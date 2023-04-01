import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ActivatedRoute } from "@angular/router";
import { UserService } from "src/app/Service/user.service";

@Component({
  selector: "app-dilalog-change-pass-word",
  templateUrl: "./dilalog-change-pass-word.component.html",
  styleUrls: ["./dilalog-change-pass-word.component.scss"],
})
export class DilalogChangePassWordComponent implements OnInit {
  userId: any;
  hide = true;
  constructor(
    private fromBuilder: FormBuilder,
    private route: ActivatedRoute,
    private matSnackBar: MatSnackBar,
    private userService: UserService
  ) {}
  formBCTKCC: FormGroup = this.fromBuilder.group({
    Password: [],
  });
  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get("userId");
  }
  doUpdate(){
    let data={
      password: this.formBCTKCC.get('Password').value
    }
    this.userService.UpdatepassWord(this.userId,data).subscribe((res:any)=>{
         if(res.statusCode==200){
               this.matSnackBar.open(res.message,'ok',{
                duration: 4000,
               })
         }
    })
  }
}
