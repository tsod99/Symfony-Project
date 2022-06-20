export class book
{
    id: Number,
    title: String,
    author: String,
    description: String,
    review: String


    constructor(id: number, title: String,author: String,description: String, review: String) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.description = description;
        this.review = review;

      }
}