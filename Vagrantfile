# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|

  config.vm.define "Lovelace" do |server|
    server.vm.box = "ubuntu/focal64"

    server.vm.hostname = "Lovelace"

    server.vm.network "private_network", ip: "192.168.2.14"
  #  db.vm.network "public_network", bridge: "wlp2s0", ip: "192.168.1.14"

    server.vm.provider "virtualbox" do |vb|
      vb.memory = "2048"
      vb.cpus = "2"
    end

  config.vm.provision "ansible" do |ansible|
    ansible.playbook = "ansible/lovelace_playbook.yml"
    end
end
end
#end
#config.vm.define "Aux-checker" do |db|
#  db.vm.box = "generic/rhel7"
#  db.vm.hostname = "Aux-checker"

  #db.vm.network "forwarded_port", guest: 5432, host: 5432, host_ip: "127.0.0.1"
#  db.vm.network "public_network", bridge: "wlp2s0", ip: "192.168.1.15"
  
#  db.vm.provider "virtualbox" do |vb|
#    vb.memory = "2048"
#    vb.cpus = "2"
#  end

#  db.vm.provision "ansible" do |ansible|
#    ansible.playbook = "ansible/aux_playbook.yml"
#    ansible.compatibility_mode = "2.0"
#  end
#end
#end
