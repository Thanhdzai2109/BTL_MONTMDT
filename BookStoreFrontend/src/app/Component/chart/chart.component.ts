import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Service/admin.service';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
	count1:number
	count2:number
	public opened2 = false;
	dataNB=[]
	count3:number
	isUser = false;
  isSeller = false;
  isAdmin = false;
  role: string;
  isLogin = false;
  constructor(
	private adminservice :AdminService,
	private titleService: Title
  ) { }
  chartOptions = {
	  animationEnabled: true,
	  theme: "while",
	  exportEnabled: true,
	  title: {
		text: ""
	  },
	  subtitles: [{
		text: "Hàng hóa các kho"
	  }],
	  data: [{
		type: "pie", //change type to column, line, area, doughnut, etc
		indexLabel: "{name}: {y}%",
		dataPoints: [
			{ name: "Kho A", y: 9.1 },
			{ name: "Kho B", y: 3.7 },
			{ name: "Kho C", y: 36.4 },
			{ name: "Kho D", y: 30.7 },
			{ name: "Kho E", y: 20.1 }
		]
	  }]
	}
	chartOptions1 = {
		animationEnabled: true,
		theme: "while",
		exportEnabled: true,
		title: {
		  text: ""
		},
		subtitles: [{
		  text: "Doanh thu các kho"
		}],
		data: [{
		  type: "pie", //change type to column, line, area, doughnut, etc
		  indexLabel: "{name}: {y}%",
		  dataPoints: [
			  { name: "Kho A", y: 9.1 },
			  { name: "Kho B", y: 3.7 },
			  { name: "Kho C", y: 36.4 },
			  { name: "Kho D", y: 30.7 },
			  { name: "Kho E", y: 20.1 }
		  ]
		}]
	  }
  ngOnInit(): void {
	this.role = localStorage.getItem('role');
    this.setTitle('Bookstore');
    console.log('role check toolbar', this.role);
    if (this.role === 'admin') {
     this.isAdmin = true;
     this.isLogin = true;
   }
    if (this.role === 'seller') {
     this.isSeller = true;
     this.isLogin = true;
   }
    if (this.role === 'user') {
     this.isUser = true;
     this.isLogin = true;
     console.log('is user ', this.isUser);
   }
  }
  nameEventHander($event: any) {
    this.opened2 = $event;
    console.log('2', this.opened2);
  }
  public setTitle( dashboard: string) {
    this.titleService.setTitle( dashboard );
    }
}
