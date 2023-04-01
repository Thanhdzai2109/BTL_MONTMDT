import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "src/app/Service/user.service";

@Component({
  selector: "app-thong-tin-tai-khoan",
  templateUrl: "./thong-tin-tai-khoan.component.html",
  styleUrls: ["./thong-tin-tai-khoan.component.scss"],
})
export class ThongTinTaiKhoanComponent implements OnInit {
  userId: any;
  user: any;
  constructor(
    private fromBuilder: FormBuilder,
    private route: ActivatedRoute,
    private matSnackBar: MatSnackBar,
    private route1: Router,
    private dialog: MatDialog,
    private userService: UserService
  ) {}
  formBCTKCC: FormGroup = this.fromBuilder.group({
    Email: [null, [Validators.required, Validators.email]],
    SDT: [],
    Name: [],
    Password: [],
  });
  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get("userId");
    this.getUser();
    console.log("id2", this.user.email);
  }
  getUser() {
    this.userService.DetailUser(this.userId).subscribe((response: any) => {
      console.log(response);
      this.user = response.obj;
      this.formBCTKCC.controls["Email"].setValue(this.user.email);
      this.formBCTKCC.controls["SDT"].setValue(this.user.mobileNumber);
      this.formBCTKCC.controls["Name"].setValue(this.user.name);
      this.formBCTKCC.controls["Password"].setValue(this.user.password);
      console.log("data", this.user);
    });
  }
  doUpdate() {
    let data = {
      email: this.formBCTKCC.get("Email").value,
      mobileNumber: this.formBCTKCC.get("SDT").value,
      name: this.formBCTKCC.get("Name").value,
    };
    this.userService.UpdateInfor(data).subscribe((res: any) => {
      if (res.statusCode == 200) {
        this.matSnackBar.open(res.message, "ok", {
          duration: 4000,
        });
      }
    });
  }
  changePassword() {
    this.route1.navigateByUrl("passWord/" + this.userId);
  }
}
