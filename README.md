# Lovelace_development
Bachelor's Project work for upgrading Lovelace checkers

Link to the original [Lovelace learning environment](https://github.com/lovelace-dev-org/lovelace/tree/rapid_dev "Lovelace Learning environment") <br>
This project uses personal fork of Lovelaces git environment to implement changes not wanted in the production version. <br>

The setup guide can be found from /guides/INSTALLATION_GUIDE <br>
This guide assumes usage of Vagrant, Ansible and Virtualbox <br>
The virtual environment deployed is Ubuntu 20.04 Focal

For manual installation a guide in /guides/INSTALL-RHEL-7 can be used

The steps of automatic installation listed here in short:

Modify the Ansible variables to suit your needs found in the /ansible/group_vars/all/ folder <br>
<b> CHECK THE SERVER IP AT MINIMUM </b>

In the project root directory, use following command to start the Vagrant with the Ansible playbook:

```
vagrant up
```

Log in to the created Virtual Machine with command:

```
vagrant ssh
```

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
# TODO
Things needed to be done for the project

### Column Name
- [ ] Separate Ansible playbook for each system part contained by main.yml playbook
  - [ ] lovelace_server_playbook.yml
  - [ ] user_management_playbook.yml
  - [ ] checker_server_playbook.yml
  - [ ] database_playbook.yml
- [ ] Create separate roles for each of the system parts
- [ ] Fork the original Lovelace git repo and make the Ansible playbook clone it instead of the original
- [ ] Create the checker server VM via Vagrant and Ansible

### Completed Column ✓
- [x] Assign variables to the playbook for better management
