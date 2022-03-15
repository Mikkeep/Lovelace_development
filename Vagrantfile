# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|

  config.vm.define "Lovelace2" do |server|
    server.vm.box = "ubuntu/focal64"

    server.vm.hostname = "Lovelace2"

    #ALTERNATE THESE FOR EXAMPLE IF NEED TO CHANGE NETWORKS
    #TO GET THE CORRECT IP SPACE FOR THE CURRENT NETWORK
    server.vm.network "public_network", ip: "192.168.1.52"
#    server.vm.network "public_network", ip: "130.231.0.167"

    server.vm.provider "virtualbox" do |vb|
      vb.memory = "2048"
      vb.cpus = "2"
    end

  config.vm.provision "ansible" do |ansible|
    ansible.playbook = "ansible/lovelace_main.yml"
    end
end

config.vm.define "Auxchecker2" do |aux|
  aux.vm.box = "ubuntu/focal64"
  aux.vm.hostname = "Auxchecker2"

  #ALTERNATE THESE FOR EXAMPLE IF NEED TO CHANGE NETWORKS
  #TO GET THE CORRECT IP SPACE FOR THE CURRENT NETWORK
#  aux.vm.network "public_network", ip: "130.231.0.168"
  aux.vm.network "public_network", ip: "192.168.1.53"

  aux.vm.provider "virtualbox" do |vb|
    vb.memory = "2048"
    vb.cpus = "2"
  end

  aux.vm.provision "ansible" do |ansible|
    ansible.playbook = "ansible/checker_server_main.yml"
  end
end
end
