import { inject } from 'aurelia';
import { BookService } from './book-service';
import { Book } from './book';

@inject(BookService)
export class Description {
    public static parameters: string[] = ['id'];
    public book: Book;

    public constructor(private bookService: BookService) {

    }

    public load(parameters) {
        this.book = this.bookService.getBook(parameters.id);
    }
}
