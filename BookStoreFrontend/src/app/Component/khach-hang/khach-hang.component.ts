import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {PeriodicElement} from '../admin-user/admin-user.component';

@Component({
  selector: 'app-khach-hang',
  templateUrl: './khach-hang.component.html',
  styleUrls: ['./khach-hang.component.scss']
})

export class KhachHangComponent implements OnInit {
  public opened2 = false;
  isSeller = false;
  isAdmin = false;
  constructor() { }
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
  dataSource: [];
  ngOnInit(): void {
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
}
