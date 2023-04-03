import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  constructor() { }
  slides = [
    {'image': 'https://kenh14cdn.com/203336854389633024/2021/1/3/photo-1-16096337476961612322578.jpg'},
    {'image': 'https://tacgia.vn/image/catalog/tin-tuc/Anh-dep-sach-tacgiavn.jpg' },
    {'image': 'https://images2.content-hci.com/commimg/myhotcourses/blog/post/myhc_99743.jpg'},
  ];
  ngOnInit(): void {
  }

}
