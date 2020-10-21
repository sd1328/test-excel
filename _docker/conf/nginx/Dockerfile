FROM nginx:mainline-alpine

RUN apk add --update netcat-openbsd && rm -rf /var/cache/apk/*

COPY ./default.conf /etc/nginx/conf.d/default.conf
COPY ./run.sh /opt/nginx/

RUN chmod +x /opt/nginx/run.sh

EXPOSE 80
VOLUME ["/var/www/html", "/opt/nginx/config"]
CMD ["/opt/nginx/run.sh"]
