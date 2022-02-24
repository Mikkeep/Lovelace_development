#!/bin/sh

source /home/auxchecker/venv/bin/activate

cd /var/auxchecker/webapp/

python3 manage.py makemigrations

python3 manage.py migrate

DJANGO_SUPERUSER_USERNAME=auxchecker DJANGO_SUPERUSER_PASSWORD=lovelace \
    python manage.py createsuperuser --email=admin@admin.local --noinput

python3 manage.py collectstatic

. runserver.sh
