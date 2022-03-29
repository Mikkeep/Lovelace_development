#!/bin/sh

source /home/lovelace/venv/bin/activate

cd /var/lovelace/webapp/

find . -type f -name "*.html" -print0 | xargs -0 sed -i 's/staticfiles/static/'

python3 manage.py makemigrations

python3 manage.py migrate

DJANGO_SUPERUSER_USERNAME=lovelace DJANGO_SUPERUSER_PASSWORD=lovelace \
    python manage.py createsuperuser --email=admin@admin.local --noinput

python3 manage.py collectstatic

. runserver.sh
