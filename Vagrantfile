# -*- mode: ruby -*-
# vi: set ft=ruby :

# All Vagrant configuration is done below. The "2" in Vagrant.configure
# configures the configuration version (we support older styles for
# backwards compatibility). Please don't change it unless you know what
# you're doing.
Vagrant.configure("2") do |config|

  #config.vm.box = "hashicorp/bionic64"

  #config.vm.network "forwarded_port", guest: 8000, host: 8000
  #config.vm.network "forwarded_port", guest: 80, host: 8080
  config.vm.define "Lovelace" do |server|
    #server.vm.box = "hashicorp/bionic64"
    server.vm.box = "generic/rhel7"

    server.vm.hostname = "Lovelace"

    #server.vm.network "forwarded_port", guest: 8000, host: 8000
    server.vm.network "public_network", bridge: "wlp2s0", ip: "192.168.1.14"

    server.vm.provider "virtualbox" do |vb|
      vb.memory = "2048"
      vb.cpus = "2"
    end

  config.vm.provision "ansible" do |ansible|
    #ansible.verbose = "v"
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
