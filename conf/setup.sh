#!/bin/sh

source /home/lovelace/venv/bin/activate

cd /var/lovelace/webapp/

python3 manage.py makemigrations

python3 manage.py migrate

DJANGO_SUPERUSER_USERNAME=lovelace DJANGO_SUPERUSER_PASSWORD=lovelace \
    python manage.py createsuperuser --email=admin@admin.local --noinput

python3 manage.py collectstatic
