cal = {
    fetch_form: function(event, caller) {
        event.preventDefault();
        event.stopPropagation();

        $(".calendar-form").remove();
        
        let button = $(caller);
        let url = button.attr("data-url");
        
        $.ajax({
            type: "GET",
            url: url,
            success: function(data, status, jqxhr) {
                let form = $(data);
                form.submit(cal.submit_form);
                button.parent().after(form);
                button.attr("onclick", "cal.close_form(event, this);");
            }
        });
        
    },
    
    close_form: function(event, caller) {
        event.preventDefault();
        event.stopPropagation();
        
        $(".calendar-form").remove();
        let button = $(caller);
        button.attr("onclick", "cal.fetch_form(event, this);");
    },
    
    submit_form: function(event) {
        event.preventDefault();
        let form = $(this);
        
        process_success = function(data) {
            location.reload();
        }
        
        submit_ajax_form(form, process_success);
    },    
    
    adjust_slots: function(event, caller) {
        event.preventDefault();
        event.stopPropagation();
        
        let button = $(caller);
        let date_div = button.parent();
        
        process_success = function(data) {
            if (data.deleted) {
                button.parents("form").remove();
            }
            else {
                button.parent().parent().find("span.right-float").html(data.content);
            }
        }
        
        submit_ajax_action(button, process_success);
    },
    
    reserve_slot: function(e, elem) {
        e.preventDefault();

        let form = $(elem).closest('form');
        let reservation_field = form.children('input[name="reserve"]');
        let submit_button = $(elem);
        let reservation_result = $(elem).parent().siblings('.reservation-result');
        let calendar = form.parent();

        if (reservation_field.val() == "1") {
            reservation_result.html("Reservation sent, awaiting for confirmation.");
        } else {
            reservation_result.html("Cancellation sent, awaiting for confirmation.");
        }

        submit_button.attr("disabled", true);

        $.ajax({
            type: form.attr('method'),
            url: form.attr('action'),
            data: form.serialize(),
            success: function(data, text_status, jqxhr_obj) {
                reservation_result.html(data.msg);
                reservation_result.removeClass("collapsed");
                calendar.children("form").each(function () {
                    if (data.can_reserve) {
                        $(this).find("input[type='submit']").attr("disabled", false)
                    }
                    else {
                        $(this).find("input[type='submit']").attr("disabled", true)
                    }
                });
                let slot_span = form.find("span.right-float");
                slot_span.html(data.slots);
                if (reservation_field.val() == "1") {
                    submit_button.val(submit_button.attr("data-cancel-text"));
                    reservation_field.val("0");
                    if (data.full) {
                        form.find("div.datetime").addClass("event-full");
                    }
                } else {
                    submit_button.val(submit_button.attr("data-reserve-text"));
                    reservation_field.val("1");
                    if (!data.full) {
                        form.find("div.datetime").removeClass("event-full");
                    }
                }
                
                submit_button.attr("disabled", false);
            },
            error: function(xhr, status, type) {
                reservation_result.html(JSON.parse(xhr.responseTextt).msg);
            }
        });
    }
}
