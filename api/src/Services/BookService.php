<?php

namespace App\Services;


use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\Validator\Constraints as Assert;
class BookService
{
    private $validator ;

    public function __construct(ValidatorInterface $validator) {

        $this->validator = $validator;

    }

    public function verify ($data)
    {
        $constraints = new Assert\Collection([
            'title' => [
                new Assert\NotBlank()
            ],
            'author' => [
                new Assert\NotBlank()
            ],

            'description' => [
                new Assert\NotBlank()
            ],

            'review' => [
                new Assert\NotBlank(),
            ],

        ]);

        return $this->validator->validate($data, $constraints);
    }

}