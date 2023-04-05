import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/Service/token.service';
import { Router } from '@angular/router';
import { BookService } from 'src/app/Service/book.service';
import {  MatSnackBar } from '@angular/material/snack-bar';
import {FormControl, Validators} from '@angular/forms';
import {  MatDialog } from '@angular/material/dialog';
import { BookModule } from 'src/app/Model/book/book.module';
import { Order} from 'src/app/Model/order.model';
import { AdminService } from 'src/app/Service/admin.service';
import { Excel, ExcelService } from 'src/app/Service/excel.service';

interface Food {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-orderstatus',
  templateUrl: './orderstatus.component.html',
  styleUrls: ['./orderstatus.component.scss']
})
export class OrderstatusComponent implements OnInit {

  constructor(private service: BookService ,private adminservice:AdminService ,private dialog: MatDialog,
    private _exporHelperService: ExcelService,
    private matSnackBar: MatSnackBar,private sellerService:BookService

) { }
bookSearch: any;
name: string = null;
books: any;
status: string;
orderedBooks: any;
orderdetails = new Array<any>();

animalControl = new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  
  selectedValue: string;
 
role:string;
isAdmin:boolean=false;
isSeller:boolean=false;
ngOnInit(): void {

  this.role = localStorage.getItem('role');
  if(this.role==='admin'){
    this.isAdmin=true;
    this.isSeller=false;
    this.getallUserOrderedBooks();
  }
  else if(this.role==='seller'){
    this.isAdmin=false;
    this.isSeller=true;
    this.getallUserOrderedBooks();
  }

  this.adminservice.autoRefresh$.subscribe(() => {
    if(this.role==='admin'){
      this.getallUserOrderedBooks();
    }
    else if(this.role==='seller'){
      this.getallUserOrderedBooks();
    }
 });
  
}


getallUserOrderedBooks() {
  console.log('order status api called');
  this.adminservice.getAllOrderedBooks().subscribe( response => {
  this.orderedBooks = response.obj;
  console.log('All orderbooks for order status= :  ', this.orderedBooks);
  console.log("no of orders "+response.obj.length);

  for (let i = 0; i < response.obj.length; i++) {
    console.log ("Block statement execution no." + i);
    console.log("orderId : "+response.obj[i].orderId);
    console.log("orderStatus : "+response.obj[i].orderStatus);
    console.log("bookName : "+response.obj[i].booksList[0].bookName);
    console.log("bookDetails : "+response.obj[i].booksList[0].bookDetails);
    console.log("authorName : "+response.obj[i].booksList[0].authorName);
    console.log("image : "+response.obj[i].booksList[0].image);
    console.log("bookprice : "+response.obj[i].booksList[0].price);
    console.log("totalprice : "+response.obj[i].quantityOfBooks[0].totalprice);
    console.log("quantityOfBook : "+response.obj[i].quantityOfBooks[0].quantityOfBook);


    var p = {orderId:response.obj[i].orderId, orderStatus:response.obj[i].orderStatus, bookName:response.obj[i].booksList[0].bookName,
      bookDetails:response.obj[i].booksList[0].bookDetails, authorName:response.obj[i].booksList[0].authorName,
      image:response.obj[i].booksList[0].image,  totalprice:response.obj[i].quantityOfBooks[0].totalprice,
      quantityOfBook:response.obj[i].quantityOfBooks[0].quantityOfBook
    };

      this.orderdetails.push(p);
      console.log("after push ",this.orderdetails);
  }  
  });
}

no:any;

updateOrderAdmin(orderId:any,status:any) {
  console.log('Order Id',orderId);
  console.log('Order status',status);  
  this.adminservice.updateOrderStatus(orderId,status).subscribe(
    (response: any) => {
      this.matSnackBar.open("Order updated by Admin", 'success', {duration: 5000});
      
      },
    (error: any) => {
      this.matSnackBar.open(error.error.message, 'failed', {duration: 5000});
    }
  );
}

updateOrderSeller(orderId:any,status:any) {
  console.log('Order Id',orderId);
  console.log('Order status',status);  
  this.adminservice.updateOrderStatus(orderId,status).subscribe(
    (response: any) => {
      this.matSnackBar.open("Order updated by Seller", 'success', {duration: 5000});
      
      },
    (error: any) => {
      this.matSnackBar.open(error.error.message, 'failed', {duration: 5000});
    }
  );
}
doExport(){

  let headerTTThietHai: any[] = [
    '',
    '',
    '500KV',
    '220kv',
    '110KV',
    '35kv',
    '22kv',
    '10kv',
    '6kv',
    'Tổng',
];
let groupHeaderTTThietHai: any[] = [];
let groupHeaderTTThietHai_row1: any[] = [
    'TT',
    'Tên đơn vị',
    'Phân loại theo cấp điện áp',
    '',
    '',
    '',
    '',
    '',
    '',
    'Tổng',
];
groupHeaderTTThietHai.push(groupHeaderTTThietHai_row1);
let groupMergerTTThietHai: any[] = ['A3:A4', 'B3:B4', 'C3:I3', 'J3:J4'];
let keyTTThietHai: any[] = [
    'TT',
    'DV',
    '500',
    '220',
    '110',
    '35',
    '22',
    '10',
    '6',
    'TONG',
];
let keyTotal: any[] = [
    '',
    '',
    '500',
    '220',
    '110',
    '35',
    '22',
    '10',
    '6',
    'TONG',
];
let nameKeyTotal ="DV";
let nameTotal="EVN"
let dataTemp: any[] = [];
this.orderedBooks.forEach((element, index) => {
//   const sum=(this.analyticsDataDetail(element,"500kv") == null ?0:this.analyticsDataDetail(element,"500kv"))+
//   (this.analyticsDataDetail(element,"220kv") == null ?0:this.analyticsDataDetail(element,"220kv"))+
//   (this.analyticsDataDetail(element,"110kv") == null ?0:this.analyticsDataDetail(element,"110kv"))+
//  (this.analyticsDataDetail(element,"35kv") == null ?0:this.analyticsDataDetail(element,"35kv"))+
//  ( this.analyticsDataDetail(element,"22kv") == null ?0:this.analyticsDataDetail(element,"22kv"))+
//  ( this.analyticsDataDetail(element,"10kv") == null ?0:this.analyticsDataDetail(element,"10kv"))+
//  ( this.analyticsDataDetail(element,"6kv") == null ?0:this.analyticsDataDetail(element,"6kv"))

  let item={
    // "TT":index+1,
    // "DV":element.orgName,
    // "500":this.analyticsDataDetail(element,"500kv") == null ?0:this.analyticsDataDetail(element,"500kv"),
    // "220":this.analyticsDataDetail(element,"220kv") == null ?0:this.analyticsDataDetail(element,"220kv"),
    // "110":this.analyticsDataDetail(element,"110kv")==null?0:this.analyticsDataDetail(element,"110kv"),
    // "35":this.analyticsDataDetail(element,"35kv")==null?0:this.analyticsDataDetail(element,"35kv"),
    // "22":this.analyticsDataDetail(element,"22kv")==null?0:this.analyticsDataDetail(element,"22kv"),
    // "10":this.analyticsDataDetail(element,"10kv")==null?0:this.analyticsDataDetail(element,"10kv"),
    // "6":this.analyticsDataDetail(element,"6kv")==null?0:this.analyticsDataDetail(element,"6kv"),
    // "TONG":sum
  }
  dataTemp.push(item)
})


let widthThietHai: any[] = [8, 30, 10, 10, 10, 10, 10, 10, 10, 20];
let excelTTThietHai: Excel = {
    title: 'Phân loại vi phạm trong HLALĐCA',
    subTitle: null,
    workSheet: null,
    keys: keyTTThietHai,
    widths: widthThietHai,
    data: dataTemp,
    groupHeaders: groupHeaderTTThietHai,
    groupMerge: groupMergerTTThietHai,
    sheetName: 'Phân loại vi phạm trong HLALĐCA',
    headers: headerTTThietHai,
};
let arrayExcel = [];
arrayExcel.push(excelTTThietHai);

let timeSpan = new Date().toISOString();
this._exporHelperService.generateExcelWithTotalRow(
    'Vi-pham-hlat' + timeSpan,
    arrayExcel,
    keyTotal,
    nameKeyTotal,
    nameTotal
);
}

// getInProgressOrderedBooks() {
//   console.log('Get in progress order books -------------');
//   this.sellerService.getInProgressOrderedBooks().subscribe( response => {
//   this.orderedBooks = response.obj;
//   console.log('In progress orderbooks for order status= :  ', this.orderedBooks);
//   console.log("no of orders "+response.obj.length);

//   for (let i = 0; i < response.obj.length; i++) {
//     console.log ("Block statement execution no." + i);
//     console.log("orderId : "+response.obj[i].orderId);
//     console.log("orderStatus : "+response.obj[i].orderStatus);
//     console.log("bookName : "+response.obj[i].booksList[0].bookName);
//     console.log("bookDetails : "+response.obj[i].booksList[0].bookDetails);
//     console.log("authorName : "+response.obj[i].booksList[0].authorName);
//     console.log("image : "+response.obj[i].booksList[0].image);
//     console.log("bookprice : "+response.obj[i].booksList[0].price);
//     console.log("totalprice : "+response.obj[i].quantityOfBooks[0].totalprice);
//     console.log("quantityOfBook : "+response.obj[i].quantityOfBooks[0].quantityOfBook);


//     var p = {orderId:response.obj[i].orderId, orderStatus:response.obj[i].orderStatus, bookName:response.obj[i].booksList[0].bookName,
//       bookDetails:response.obj[i].booksList[0].bookDetails, authorName:response.obj[i].booksList[0].authorName,
//       image:response.obj[i].booksList[0].image,  totalprice:response.obj[i].quantityOfBooks[0].totalprice,
//       quantityOfBook:response.obj[i].quantityOfBooks[0].quantityOfBook
//     };

//       this.orderdetails.push(p);
//       console.log("after in progress order push ",this.orderdetails);
//   }  
//   });
// }
  
}
