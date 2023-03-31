import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-thong-tin-tai-khoan',
  templateUrl: './thong-tin-tai-khoan.component.html',
  styleUrls: ['./thong-tin-tai-khoan.component.scss']
})
export class ThongTinTaiKhoanComponent implements OnInit {

  constructor(  private fromBuilder: FormBuilder,) { }
  formBCTKCC:  FormGroup = this.fromBuilder.group({
    Email:[null,[Validators.required, Validators.email]],
    SDT:[],
    Name:[],
    Password:[],
  })
  ngOnInit(): void {
  }

}
