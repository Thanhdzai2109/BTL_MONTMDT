import { Component, OnInit, ViewChild } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { UserService } from "src/app/Service/user.service";
import { MatDialog } from "@angular/material/dialog";
import { DilalogUnlockComponent } from "../dilalog-unlock/dilalog-unlock.component";
import { MatSnackBar } from "@angular/material/snack-bar";
import { DialalogDeleteComponent } from "../dialalog-delete/dialalog-delete.component";
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [];
@Component({
  selector: "app-admin-user",
  templateUrl: "./admin-user.component.html",
  styleUrls: ["./admin-user.component.scss"],
})
export class AdminUserComponent implements OnInit {
  opened = true;
  public opened2 = false;
  isUser = false;
  isSeller = false;
  isAdmin = false;
  datalist: any = [];
  displayedColumns: string[] = [
    "position",
    "name",
    "email",
    "chucnang",
    "weight",
    "symbol",
    "thaoTac",
  ];
  dataSource: any = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  name: string;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(
    private titleService: Title,
    private dialog: MatDialog,
    private matSnackBar: MatSnackBar,
    private userService: UserService
  ) {}
  isLogin = false;
  role: string;
  ngOnInit(): void {
    this.role = localStorage.getItem("role");
    this.setTitle("Bookstore");
    console.log("role check toolbar", this.role);
    if (this.role === "admin") {
      this.isAdmin = true;
      this.isLogin = true;
    }
    this.dataSource.paginator = this.paginator;
    this.doSearh();
  }
  nameEventHander($event: any) {
    this.opened2 = $event;
    console.log("2", this.opened2);
  }

  public setTitle(dashboard: string) {
    this.titleService.setTitle(dashboard);
  }
  doSearh() {
    let data = {
      name: this.name,
    };
    this.userService.SearchUser(data).subscribe((res) => {
      this.dataSource = res;
    });
  }

  openDialog(id: number) {
    const dialogRef = this.dialog.open(DilalogUnlockComponent, {
      width: "auto",
      height: "auto",
      // panelClass: 'custom-dialog-container',
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.userService.ActiveUser(id).subscribe((message) => {
          if (message.statusCode === 200) {
            this.matSnackBar.open("Cập nhật trạng thái thành công ", "ok", {
              duration: 4000,
            });
            this.doSearh();
          }
        });
      }
    });
  }
  deleteDilag(id:number){
    const dialogRef = this.dialog.open(DialalogDeleteComponent, {
      width: "auto",
      height: "auto",
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.userService.DeleteUser(id).subscribe((message) => {
          if (message.statusCode === 200) {
            this.matSnackBar.open("Xóa thành công ", "ok", {
              duration: 4000,
            });
            this.doSearh();
          }
        });
      }
    });
  }
}
