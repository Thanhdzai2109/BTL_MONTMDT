import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/Service/token.service';
import { Router } from '@angular/router';
import { BookService } from 'src/app/Service/book.service';
import {  MatSnackBar } from '@angular/material/snack-bar';

import {  MatDialog } from '@angular/material/dialog';
import { AddbookComponent } from '../../addbook/addbook.component';
import { UpdateBookComponent } from '../../update-book/update-book.component';
import { UploadBookImageComponent } from '../../addbook/upload-book-image/upload-book-image.component';
import {ActivatedRoute,ParamMap} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {DialalogDeleteComponent} from '../../dialalog-delete/dialalog-delete.component';
@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.scss']
})
export class SellerComponent implements OnInit {
  constructor(private service: BookService , private dialog: MatDialog,
              private toastr: ToastrService,
              private matSnackBar: MatSnackBar,private _route:ActivatedRoute

  ) { }
  bookSearch: any;
  name: string = null;
  books: any;
  status: string;

  sellerBooks:boolean=false;
  orderBooks:boolean=false;

  private param:any;

  ngOnInit(): void {
    this.service.autoRefresh$.subscribe(() => {
      this._route.queryParams.subscribe
    (params=>
      {this.param=params['book'];
      if (this.param == "sellerbook")
      {
      this.sellerBooks=true;
      this.orderBooks=false

      }
      if(this.param == "order")
      {
        this.sellerBooks=false;
        this.orderBooks=true;
      }
    });
       this.getallBooks();
    });

    this._route.queryParams.subscribe
    (params=>
      {this.param=params['book'];
      if (this.param == "sellerbook")
      {
      this.sellerBooks=true;
      this.orderBooks=false

      }
      if(this.param == "order")
      {
        this.sellerBooks=false;
        this.orderBooks=true;
      }
    });

    this.getUserName();
    this.getallBooks();
    this.getSearchBookData();
  }

  getallBooks() {
    this.sellerBooks=true;
    this.orderBooks=false;
    console.log('inside seller book meth.....');
    this.service.getallBooks().subscribe( response => {
      this.books = response.obj;
      console.log('All books ', this.books);
    });

  }

  deleteBook(bookId) {
    const dialogRef = this.dialog.open(DialalogDeleteComponent, {
      width: "auto",
      height: "auto",
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
    this.service.deleteBook2(bookId).subscribe((message) => {
      if (message.statusCode === 202) {
        this.toastr.success('Book Deleted Successfully', 'OK', {
        });
    } else {
      this.toastr.error('Error in Book Deletion', 'ok', );
    }
    });
      }
    });
  }


  openImageDialog(bookId): void {
    const dialogRef = this.dialog.open(UploadBookImageComponent, {
      width: '25rem',
      panelClass: 'custom-dialog-container',
      data: { bookId },
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  editBook(book: any): void {
    const dialogRef = this.dialog.open(UpdateBookComponent, {
      width: '25rem',
      height: 'auto',
      panelClass: 'custom-dialog-container',
      data: {
        bookName: book.bookName,
        authorName: book.authorName,
        price: book.price,
        priceSale:book.priceSale,
        noOfBooks: book.noOfBooks,
        bookDetails: book.bookDetails,
        bookId: book.bookId,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  addBook() {
    const dialogRef = this.dialog.open(AddbookComponent, {
      width: '25rem',
      panelClass: 'custom-dialog-container',
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  verifyBook(bookId: any) {
  this.status = 'OnHold';
  this.service.verifyBook(bookId, this.status).subscribe((message) => {
      if (message.statusCode === 202) {
        this.toastr.success('Request sent Successfully', 'OK', {
        });
    } else {
      this.toastr.error('Error in Book Deletion' );
    }
    });
  }

  getUserName() {
   this.name = localStorage.getItem('Name');
  }

  getSearchBookData() {
    this.service.getSearchBookData().subscribe((message) => {
      console.log('search data', message.books);
      this.bookSearch = message.books;
    });
  }

}
