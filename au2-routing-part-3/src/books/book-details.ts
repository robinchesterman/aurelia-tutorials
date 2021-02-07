import { inject } from 'aurelia';
import { BookService } from './book-service';
import { Book } from './book';

export class BookDetails {
    public static parameters: string[] = ['id'];
    public book: Book;

    public constructor(private bookService: BookService) {

    }

    public load(parameters) {
        console.log("GET BOOK", parameters.id);
        this.book = this.bookService.getBook(parameters.id);
    }
}
