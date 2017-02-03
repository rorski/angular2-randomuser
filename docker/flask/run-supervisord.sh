#!/bin/bash

until mysql -h db -u dbuser -pdbpass -e "USE flaskapi"
do
  echo "MariaDB is unavailable - sleeping"
  sleep 20
done

# Add accounts and so forth to the DB
python /opt/flask/seed_db.py

/usr/bin/supervisord -n
