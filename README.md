# Lovelace_development
Bachelor's Project work for upgrading Lovelace checkers

Link to the original [Lovelace learning environment](https://github.com/lovelace-dev-org/lovelace/tree/rapid_dev "Lovelace Learning environment") <br>
This project uses personal fork of Lovelaces git environment to implement changes not wanted in the production version. <br>
[Link](https://github.com/Mikkeep/lovelace/tree/read_access_revoke_branch "Link")
 to the fork

The setup guide can be found from <b> /guides/INSTALLATION_GUIDE </b> <br>
This guide assumes usage of Vagrant, Ansible and Virtualbox <br>
The virtual environment deployed is Ubuntu 20.04 Focal

For manual installation a guide in /guides/INSTALL-RHEL-7 can be used

The steps of automatic installation listed here in short:

<b> #################################################################################### </b>

Current development version can be started with just command:

```
vagrant up
```
This starts one virtual machine with everything on it, with just port forwarding, so no IP configuration needed. Then start the main server and checker service with different terminal windows on the same machine and it works. <br> <br>
<b> #################################################################################### </b>

Modify the Ansible variables to suit your needs found in the /ansible/group_vars/all/ folder <br>
<b> CHECK THE SERVER IP AT MINIMUM </b>

In the project root directory, use following command to start the Vagrant with the Ansible playbook:

```
vagrant up
```
This command creates two virtual machines, Lovelace and Auxchecker, which are main components of Lovelace.
Log in to the created Virtual Machine with command:

```
vagrant ssh Lovelace
```
Lovelace is the main server <br>
Change user to the lovelace user:

```
su -l lovelace
```

And start the deployment process with the provided script at the lovelace user home directory

```
. setup.sh
```

After this initial setup a development server will be accessible trough <br>

```
http://<your.server.ip>:8000
```

Now the main server is running <br> Checker server can be accessed trough command in another shell:

```
vagrant ssh Auxchecker
```
The checker server does not need to be deployed any further, but can be accessed by switching user:

```
su -l auxchecker
```

# TODO
Things needed to be done for the project

### Column Name
- [ ] Separate Ansible playbook for each system part contained by main.yml playbook
  - [x] lovelace_server_playbook.yml
  - [ ] user_management_playbook.yml
  - [x] checker_server_playbook.yml
  - [ ] database_playbook.yml

### Completed Column ???
- [x] Assign variables to the playbook for better management
- [x] Create separate roles for each of the system parts
- [x] Fork the original Lovelace git repo and make the Ansible playbook clone it instead of the original
- [x] Create the checker server VM via Vagrant and Ansible
