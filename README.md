# Lovelace_development
Bachelor's Project work for upgrading Lovelace checkers

The setup guide can be found from /guides/INSTALLATION_GUIDE <br>
This guide assumes usage of Vagrant, Ansible and Virtualbox <br>
The virtual environment deployed is Ubuntu 20.04 Focal

For manual installation a guide in /guides/INSTALL-RHEL-7 can be used

The steps of automatic installation listed here in short:

Modify the Ansible variables to suit your needs found in the /ansible/group_vars/all/ folder <br>
<b> CHECK THE SERVER IP AT MINIMUM </b>

In the root directory, use following command to start the Vagrant with the Ansible playbook:

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
