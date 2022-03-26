# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|

  config.vm.define "Lovelace" do |server|
    server.vm.box = "ubuntu/focal64"

    server.vm.hostname = "Lovelace"

    config.vm.network :forwarded_port, guest: 8000, host: 8000

    server.vm.provider "virtualbox" do |vb|
      vb.memory = "2048"
      vb.cpus = "2"
    end

  config.vm.provision "ansible" do |ansible|
    ansible.playbook = "ansible/lovelace_main.yml"
    end
#END OF LOVELACE3 CONFIGURATION
end

end
