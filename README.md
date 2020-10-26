

#  Тестовое задание  
## Онлайн редактор таблиц (excel подобный)


### Поднятие проекта локально

Требуеться Docker, Docker Compose

__Создание контейнеров__
```bash
cd _docker
./build.sh
```

__Установить права папки временных файлов__
```bash
chmod -R 777 storage
```

__Создать файл конфигурации__
```bash
cat .env.example > .env
```

__Запуск контейнеров__
```bash
cd _docker
./run.sh
```

__Развертывание__
```bash
# войти в контейнер fpm
cd _docker
./fpm_bash.sh
# перейти в папку проекта
cd /code
# установка зависимостей
composer update
# миграции
php artisan migrate
```

### API
 - http порт проекта 8081 ->  http://localhost:8081
 - Описание API (Swagger)    http://localhost:8081/api/documentation
 

### Состав
- стандартный интерфейс bootstrap
- стандартный интерфейс авторизации/аунтефикации на базе  laravel ui   (регистрация/авторизация)
- CRUD таблиц, привязка таблиц к конкретному пользователю
- сервис редактора таблиц (backend)
- VUI компонент редактора таблицы (frontend)


#### Сервис редактора таблиц

- Реализован с упором на преобладание операций чтения 
- Значения конкретных ячеек храняться в отдельных записях таблицы БД
- Реализованы обекты Таблицы / Ячейки с функциями DTO
- Обект таблицы включает коллекцию обектов ячеек
- Обекты ячеек создаються только если задано какое-либо значение
- Обект таблицы (вместе с ячейками) сериализируеться и сохраняеться в Redis
- Чтение значейни ячеек всегда происходит из обекта полученого из десиреализации из Redis
- БД служит постояным хранилищем

API представленно двумя методами:
- чтение (получение) значений ячеек определенной области таблицы
- запись значения конкретной ячейки
  
