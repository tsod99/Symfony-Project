<?php

namespace App\DataFixtures;

use App\Entity\User;
use App\Entity\Book;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class AppFixtures extends Fixture
{
    private UserPasswordHasherInterface $hasher;

    public function __construct(UserPasswordHasherInterface $hasher)
    {
        $this->hasher = $hasher;
    }

    public function load(ObjectManager $manager): void
    {
         $user = new User();
         $user->setUsername('admin');
         $user->setEmail('admin@admin.com');
         $user->setRoles(['ROLE_ADMIN']);
         $password = $this->hasher->hashPassword($user, 'admin');
         $user->setPassword($password);
         $manager->persist($user);
         $manager->flush();

         for ($i=0 ; $i<= 20 ; $i++) {
             $book = new Book();
             $book->setTitle('title'.''.($i+1));
             $book->setAuthor('author'.''.($i+1));
             $book->setDescription('description'.''.($i+1));
             $book->setReview('review'.''.($i+1));
             $book->setPublishedAt(new \DateTime());
             $manager->persist($book);
             $manager->flush();

         }


    }
}
