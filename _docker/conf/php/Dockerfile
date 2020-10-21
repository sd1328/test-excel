FROM php:7.4-fpm

RUN apt-get update && apt-get install -y \
        curl \
        git \
        zip \
        unzip \
        libfreetype6-dev \
        libzip-dev \
        libjpeg62-turbo-dev \
        libpng-dev \
        libpq-dev \
        libonig-dev

RUN docker-php-ext-install pdo pdo_pgsql mbstring zip exif pcntl

RUN pecl install -o -f redis \
    &&  rm -rf /tmp/pear \
    &&  docker-php-ext-enable redis

RUN echo "post_max_size = 8M" >> /usr/local/etc/php/conf.d/uploads.ini; \
    echo "upload_max_filesize = 8M" >> /usr/local/etc/php/conf.d/uploads.ini;

RUN apt-get update && apt-get install -y \
    libmagickwand-dev --no-install-recommends \
    && pecl install imagick \
    && docker-php-ext-enable imagick

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Add user for laravel application
RUN groupadd -g 1000 www
RUN useradd -u 1000 -ms /bin/bash -g www www

# Change current user to www
ADD . /var/www
WORKDIR /var/www
USER www

# Expose port 9000 and start php-fpm server
EXPOSE 9000
CMD ["php-fpm"]
