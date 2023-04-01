import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-thong-tin-tai-khoan',
  templateUrl: './thong-tin-tai-khoan.component.html',
  styleUrls: ['./thong-tin-tai-khoan.component.scss']
})
export class ThongTinTaiKhoanComponent implements OnInit {
  userId:any
  user:any
  constructor(  private fromBuilder: FormBuilder,
    private route: ActivatedRoute,
    private matSnackBar: MatSnackBar,
    private userService: UserService) { }
  formBCTKCC:  FormGroup = this.fromBuilder.group({
    Email:[null,[Validators.required, Validators.email]],
    SDT:[],
    Name:[],
    Password:[],
  })
  ngOnInit(): void {
    this.userId=this.route.snapshot.paramMap.get('userId');
    this.getUser();
    console.log('id2',this.user.email)
  }
  getUser(){
    this.userService.DetailUser(this.userId).subscribe((response: any) => {
      console.log(response);
      this.user = response.obj;
      this.formBCTKCC.controls['Email'].setValue(this.user.email);
      this.formBCTKCC.controls['SDT'].setValue(this.user.mobileNumber);
      this.formBCTKCC.controls['Name'].setValue(this.user.name);
      this.formBCTKCC.controls['Password'].setValue(this.user.password);
      console.log('data',this.user)
     });
  }
  doUpdate(){
    let data={
      email:this.formBCTKCC.get('Email').value,
      password:this.formBCTKCC.get('Password').value,
      mobileNumber:this.formBCTKCC.get('SDT').value,
      name:this.formBCTKCC.get('Name').value
    }
    this.userService.UpdatepassWord(this.userId,data).subscribe((res :any)=>{
          if (res.statusCode==200){
            this.matSnackBar.open(res.message,"ok",{
              duration: 4000,
            })
          }
    })
  }


}
