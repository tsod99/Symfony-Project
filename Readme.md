## How to run

1.) CD to your API folder (cd api) <br />
2.) You need to install vendor folder by command `composer install` <br />
3.)In the `.env` file change databse url, I put mine of Postgres <br />
4.) Create databse with this command `php bin/console doctrine:schema:create` <br />
5.) Need to make migrations for entity user and book by this command `php bin/console doctrine:migrations:migrate` <br />
6.) After that type this command `php bin/console doctrine:fixtures:load` <br />
7.) Run your application `php -S 127.0.0.1:8000 -t public` <br />

# Angular

1.) CD to clinet (cd client) <br />
2.) If you dont have installed angular, install it by this command globaly `npm install -g @angular/cli` <br />
3.) to install node modules type `npm install` <br />
4) and to server the applicaiton type `ng serve --open`
