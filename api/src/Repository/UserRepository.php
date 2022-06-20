<?php

namespace App\Repository;

use App\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method User|null find($id, $lockMode = null, $lockVersion = null)
 * @method User|null findOneBy(array $criteria, array $orderBy = null)
 * @method User[]    findAll()
 * @method User[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UserRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, User::class);
    }


  /*  public function transform(Book $book)
    {
        $date = $book->getPublishedAt();
        $newDate = $date->format('Y-m-d H:i:s');
        return [
            'id' => (int) $book->getId(),
            'author' => (string) $book->getAuthor(),
            'title' => (string) $book->getTitle(),
            'description' => (string) $book->getDescription(),
            'published_at' =>(string) $newDate,
            'review' => (string) $book->getReview(),
            'image_loc' => (string) $book->getImageLocation()
        ];
    }
    public function transformSome($query) {
        $books = $this->findBy([
            'title' => $query
        ]);
        $booksArray = [];
        foreach($books as $book) {
            $booksArray[] = $this->transform($book);
        }
        return $booksArray;
    }
    public function transformAll() 
    {
        $books = $this->findAll();
        $booksArray = [];
        foreach ($books as $book) {
            $booksArray[] = $this->transform($book);
        }
        return $booksArray;
    }
*/
    
    // /**
    //  * @return Book[] Returns an array of Book objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('b')
            ->andWhere('b.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('b.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Book
    {
        return $this->createQueryBuilder('b')
            ->andWhere('b.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
