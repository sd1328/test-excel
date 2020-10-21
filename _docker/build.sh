#!/bin/bash
# на случай если уже есть - удаляем сеть
echo "Clear network"
docker network rm excel_net
echo "Clear containers"
docker container rm excel_postgres
docker container rm excel_phpfpm
docker container rm excel_nginx

echo "Docker Compose"
cd "$(dirname "$0")"
docker-compose build --force-rm --no-cache

echo "Docker Create Network";
#docker network create --driver=bridge --subnet=172.10.100.0/24 --gateway=172.10.100.1 excel_net