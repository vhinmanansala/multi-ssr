FROM aomanansala/phpv8-v2:latest

# Install and enable pecl extensions
RUN pecl install redis-5.1.1 \
    && pecl install xdebug-2.8.1 \
    && docker-php-ext-enable redis \
    # Comment out the below line for additional performance
    && docker-php-ext-enable xdebug

RUN docker-php-ext-install pdo_mysql

# Copy the source directory into the docker container
COPY . /var/www/html

# ---
# Set some helpful environmental variables
# ---

# Project Root details
ENV ACG_PROJECT_ROOT /var/www/html
ENV ACG_DOCUMENT_ROOT ${ACG_PROJECT_ROOT}/public

# Server details
ENV ACG_SERVER_NAME ssr.com

# Change the document root for PHP
RUN sed -ri -e 's!/var/www/html!${ACG_DOCUMENT_ROOT}!g' /etc/apache2/sites-available/*.conf
RUN sed -ri -e 's!/var/www/!${ACG_DOCUMENT_ROOT}!g' /etc/apache2/apache2.conf /etc/apache2/conf-available/*.conf

# Enable the apache2 rewrite module
RUN a2enmod rewrite

# PHP.ini details
# Set up xdebug
RUN echo "xdebug.remote_enable=1" >> /usr/local/etc/php/php.ini
RUN echo "xdebug.remote_host=exercise.test" >> /usr/local/etc/php/php.ini
RUN echo "xdebug.idekey=PHPSTORM" >> /usr/local/etc/php/php.ini

# Set approproate permissions for stoage and cache
ENV APACHE_USER www-data
RUN chown -R ${APACHE_USER} ${ACG_PROJECT_ROOT}/storage/
RUN chmod -R 777 ${ACG_PROJECT_ROOT}/storage -R
RUN chmod -R 777 ${ACG_PROJECT_ROOT}/bootstrap/cache -R

# Set the ServerName for the application and expose on port 80
RUN echo "ServerName ${ACG_SERVER_NAME}" >> /etc/apache2/apache2.conf
EXPOSE 80
