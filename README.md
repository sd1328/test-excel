

#  Тестовое задание  
## Онлайн редактор таблиц (excel подобный)




### Поднятие проекта локально

Требуеться Docker, Docker Compose

__Создание контейнеров__
cd _docker
./build.sh

__Запуск контейнеров__
cd _docker
./run.sh

__Подготовка__
cd _docker
./fpm_bash.sh
cd /code
composer install
php artisan migrate

### API
 - Проект доступен  http://localhost:8081
 - Описание API     http://localhost:8081/api/documentation
 


  












