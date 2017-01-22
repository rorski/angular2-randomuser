FROM ubuntu:latest
MAINTAINER Rory Mitchell <rory@rorski.com>

RUN apt-get update 
RUN DEBIAN_FRONTEND=noninteractive apt-get install -y -q python-all python-pip python-dev nginx supervisor uwsgi uwsgi-plugin-python git mariadb-server libmysqlclient-dev vim

RUN git clone https://f023359aa7bc465f30bbe6383af7845760d0922c:x-oauth-basic@github.com/rorski/angular2-randomuser-backend.git /opt/flask
RUN pip install --upgrade pip
RUN pip install -qr /opt/flask/requirements.txt

ADD uwsgi.ini /opt/flask/
ADD cors /etc/nginx/conf.d/
ADD settings.py /opt/flask/src/
ADD flask_nginx.conf /etc/nginx/sites-enabled/
RUN (echo "daemon off;" >> /etc/nginx/nginx.conf && rm /etc/nginx/sites-enabled/default)
ADD flask_supervisord.conf /etc/supervisor/conf.d/

# Script to wait for the DB
ADD run-supervisord.sh /root/

EXPOSE 80
CMD ["/usr/bin/supervisord", "-n"]
