## How to run

1.) CD to your API folder (cd api)
2.) You need to install vendor folder by command `composer install`
3.)In the `.env` file change databse url, I put mine of Postgres
4.) Create databse with this command `php bin/console doctrine:schema:create`
5.) Need to make migrations for entity user and book by this command `php bin/console doctrine:migrations:migrate`
6.) After that type this command `php bin/console doctrine:fixtures:load`
7.) Run your application `php -S 127.0.0.1:8000 -t public`

# Angular

1.) CD to clinet (cd client)
2.) If you dont have installed angular, install it by this command globaly `npm install -g @angular/cli`
3.) to install node modules type `npm install`
4) and to server the applicaiton type `ng serve --open`
