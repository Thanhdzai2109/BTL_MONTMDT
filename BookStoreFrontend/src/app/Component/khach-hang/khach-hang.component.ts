import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {PeriodicElement} from '../admin-user/admin-user.component';
import {UserService} from '../../Service/user.service';

@Component({
  selector: 'app-khach-hang',
  templateUrl: './khach-hang.component.html',
  styleUrls: ['./khach-hang.component.scss']
})

export class KhachHangComponent implements OnInit {
  public opened2 = false;
  isSeller = false;
  isAdmin = false;
  totalOrder:number;
  constructor(
    private userService: UserService
  ) { }
  isLogin = false;
  role: string;
  displayedColumns: string[] = [
    "position",
    "name",
    "email",
    "ngaytao",
    "weight",
    "symbol",
    "chucnang",

  ];
  dataSource: any=[];
  ngOnInit(): void {
    this.doSearch()
    this.role = localStorage.getItem("role");
    if (this.role === "admin") {
      this.isAdmin = true;
      this.isLogin = true;
    }
  }

  nameEventHander($event: any) {
    this.opened2 = $event;
    console.log("2", this.opened2);
  }
  doSearch(){
    let data = {
      role : 'user'
    }
    this.userService.SearchCustomer(data).subscribe((res:any) => {
         this.dataSource=res.obj;
    })

  }

}
