<?php
namespace App\Controller;

use App\Entity\Book;
use App\Repository\BookRepository;
use App\Services\BookService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


/**
 * @Route("/api", name="api_")
 */
class BookController extends AbstractController {


    private $bookRepository ;
    private $em ;

    public function __construct(BookRepository $bookRepository,EntityManagerInterface $em)
    {
        $this->bookRepository =  $bookRepository ;
        $this->em =  $em ;
    }

    /**
     * @Route("/topHeadlines", methods="GET")
     */
    public function index(): JsonResponse {

        $books = $this->bookRepository->findAll();
        $data = [];
        foreach ($books as $book) {
           array_push($data,$this->bookRepository->transform($book));
        }
        return new JsonResponse($data,Response::HTTP_OK) ;
    }

    /**
     * @Route("/addBook", methods="POST")
     */
    public function create(Request $request,BookService $bookService):JsonResponse{

        $data = json_decode($request->getContent(), true);

        if (empty($data)) {
            return new JsonResponse(['message' => 'empty data'], Response::HTTP_NOT_FOUND);
        }
        $validateRaws = $bookService->verify($data) ;

        if (!$validateRaws->count()) {

            $book =new Book();
            $book->setTitle($data['title']);
            $book->setAuthor($data['author']);
            $book->setDescription($data['description']);
            $book->setReview($data['review']);
            $book->setPublishedAt(new \DateTime());
            $this->bookRepository->add($book, true);

            return new JsonResponse(['message' => 'Book created!'], Response::HTTP_CREATED);
        } else {
            return new JsonResponse(['message' => 'Enter valid inputs'], Response::HTTP_NOT_FOUND);
        }


    
    }
    /**
     * @Route("/book/{id}", methods="GET")
     */
    public function viewBook($id): JsonResponse {

        $book = $this->bookRepository->findOneBy(['id'=>$id]);
        if(!$book) {
            return new JsonResponse('Book not found !',Response::HTTP_NOT_FOUND) ;
        }
        return new JsonResponse($this->bookRepository->transform($book),Response::HTTP_OK) ;
    }
    /**
     * @Route("/search/{queryParam}", methods="GET")
     */
    public function searchBooks($queryParam):JsonResponse {

        $books = $this->bookRepository->findBy(['title'=>$queryParam]);

        if(!$books) {
            return new JsonResponse('Book(s) not found with this title !',Response::HTTP_NOT_FOUND) ;
        }
        return new JsonResponse($this->bookRepository->transformSome($books),Response::HTTP_OK) ;
    }

    /**
     * @Route("/delete/{id}", methods="DELETE")
     */
    public function DeleteBook($id): JsonResponse {

        $book = $this->bookRepository->findOneBy(['id'=>$id]);
        if(!$book) {
            return new JsonResponse('Book not found !',Response::HTTP_NOT_FOUND) ;
        }
        $this->bookRepository->remove($book,true);
        return new JsonResponse('Boook deleted Successfuly !',Response::HTTP_OK) ;
    }
}
