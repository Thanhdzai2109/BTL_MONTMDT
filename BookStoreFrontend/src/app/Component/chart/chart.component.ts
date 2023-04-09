import {Component, OnInit} from '@angular/core';
import {AdminService} from 'src/app/Service/admin.service';
import {Title} from '@angular/platform-browser';
import {PeriodicElement} from '../admin-user/admin-user.component';
import {MatTableDataSource} from '@angular/material/table';
import {formatDate} from '@angular/common';
import {Excel, ExcelService} from '../../Service/excel.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  count1: number
  count2: number
  public opened2 = false;
  dataNB = []
  count3: number
  isUser = false;
  isSeller = false;
  isAdmin = false;
  role: string;
  isLogin = false;
  dataSl:any=[
    {label: 'Jan', y: 372},
    {label: 'Feb', y: 412},
    {label: 'Mar', y: 572},
    {label: 'Apr', y: 224},
    {label: 'May', y: 246},
    {label: 'Jun', y: 601},
    {label: 'Jul', y: 642},
    {label: 'Aug', y: 590},
    {label: 'Sep', y: 527},
    {label: 'Oct', y: 273},
    {label: 'Nov', y: 251},
    {label: 'Dec', y: 331}
  ]
  dataSource: any = [
    {label: 'Jan', y: 250000},
    {label: 'Feb', y: 431000},
    {label: 'Mar', y: 646000},
    {label: 'Apr', y: 522000},
    {label: 'May', y: 464000},
    {label: 'Jun', y: 470000},
    {label: 'Jul', y: 534000},
    {label: 'Aug', y: 407000},
    {label: 'Sep', y: 484000},
    {label: 'Oct', y: 465000},
    {label: 'Nov', y: 424000},
    {label: 'Dec', y: 231000}

  ];
  displayedColumns: string[] = [
    'stt',
    'Thang',
    'Doanhthu',
  ];
  discolum:string[]=[
    'stt',
    'Thang',
    'soDonhang',
  ]
  constructor(
    private adminservice: AdminService,
    private _exporHelperService: ExcelService,
    private titleService: Title
  ) {
  }

  chart: any;
  chartOptions1 = {
	  animationEnabled: true,

	  data: [{
		type: "doughnut",
		yValueFormatString: "#,###.##'%'",
		// indexLabel: "{name}",
		dataPoints: [
		  // { y: 28, name: "Labour" },
		  // { y: 10, name: "Legal" },
		  // { y: 20, name: "Production" },
		  // { y: 15, name: "License" },
		  // { y: 23, name: "Facilities" },
		  // { y: 17, name: "Taxes" },
		  // { y: 12, name: "Insurance" }
      { y: 28,},
      { y: 10,},
      { y: 10,},
      { y: 15,},
      { y: 23,},
      { y: 17,},
      { y: 12,},
		]
	  }]
	}	
  chartOptions = {
    animationEnabled: true,
    theme: 'light2',
    title: {
      text: 'Phân tích doanh thu'
    },
    axisY: {
      title: 'Số lượng đơn đặt hàng',
      includeZero: true
    },
    axisY2: {
      title: 'Tổng doanh thu',
      includeZero: true,
      labelFormatter: (e: any) => {
        var suffixes = ['', 'K', 'M', 'B'];

        var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
        if (order > suffixes.length - 1)
          order = suffixes.length - 1;

        var suffix = suffixes[order];
        return 'đ' + (e.value / Math.pow(1000, order)) + suffix;
      }
    },
    toolTip: {
      shared: true
    },
    legend: {
      cursor: 'pointer',
      itemclick: function (e: any) {
        if (typeof (e.dataSeries.visible) === 'undefined' || e.dataSeries.visible) {
          e.dataSeries.visible = false;
        } else {
          e.dataSeries.visible = true;
        }
        e.chart.render();
      }
    },
    data: [{
      type: 'column',
      showInLegend: true,
      name: 'Doanh thu',
      axisYType: 'secondary',
      yValueFormatString: '$#,###',
      dataPoints: [
        {label: 'Jan', y: 25000000},
        {label: 'Feb', y: 43100000},
        {label: 'Mar', y: 64600000},
        {label: 'Apr', y: 52200000},
        {label: 'May', y: 46400000},
        {label: 'Jun', y: 47000000},
        {label: 'Jul', y: 53400000},
        {label: 'Aug', y: 40700000},
        {label: 'Sep', y: 48400000},
        {label: 'Oct', y: 46500000},
        {label: 'Nov', y: 42400000},
        {label: 'Dec', y: 23100000}
      ]
    }, {
      type: 'spline',
      showInLegend: true,
      name: 'Số đơn đặt hàng',
      dataPoints: [
        {label: 'Jan', y: 372},
        {label: 'Feb', y: 412},
        {label: 'Mar', y: 572},
        {label: 'Apr', y: 224},
        {label: 'May', y: 246},
        {label: 'Jun', y: 601},
        {label: 'Jul', y: 642},
        {label: 'Aug', y: 590},
        {label: 'Sep', y: 527},
        {label: 'Oct', y: 273},
        {label: 'Nov', y: 251},
        {label: 'Dec', y: 331}
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

  public setTitle(dashboard: string) {
    this.titleService.setTitle(dashboard);
  }

  doExport() {
    let headerTTThietHai: any[] = [
      'STT',
      'Tháng',
      'Doanh thu',

    ];
    let groupHeaderTTThietHai: any[] = [];
    let groupHeaderTTThietHai_row1: any[] = [];

    let groupMergerTTThietHai: any[] = [];
    let keyTTThietHai: any[] = [
      'TT',
      'thang',
      'Doanhthu'
    ];


    let dataTemp: any[] = [];

    this.dataSource.forEach((element, index) => {
      let item = {
        'TT': index + 1,
        'thang': element.label,
        'Doanhthu': element.y +'đ',


      }
      dataTemp.push(item)
    })


    let widthThietHai: any[] = [8, 10, 40];
    let excelTTThietHai: Excel = {
      title: 'Thống kê Doanh thu cả năm',
      subTitle: null,
      workSheet: null,
      keys: keyTTThietHai,
      widths: widthThietHai,
      data: dataTemp,
      groupHeaders: null,
      groupMerge: null,
      sheetName: 'Hóa đơn',
      headers: headerTTThietHai,
    };
    let arrayExcel = [];
    arrayExcel.push(excelTTThietHai);

    let timeSpan = new Date().toISOString();
    this._exporHelperService.generateExcel(
      'Doanh-thu' + timeSpan,
      arrayExcel,
    );
  }
  doExport1(){
    let headerTTThietHai: any[] = [
      'STT',
      'Tháng',
      'Số lượng đơn',

    ];
    let groupHeaderTTThietHai: any[] = [];
    let groupHeaderTTThietHai_row1: any[] = [];

    let groupMergerTTThietHai: any[] = [];
    let keyTTThietHai: any[] = [
      'TT',
      'thang',
      'SL'
    ];


    let dataTemp: any[] = [];

    this.dataSl.forEach((element, index) => {
      let item = {
        'TT': index + 1,
        'thang': element.label,
        'SL': element.y +' Đơn',


      }
      dataTemp.push(item)
    })


    let widthThietHai: any[] = [8, 10, 50];
    let excelTTThietHai: Excel = {
      title: 'Thống kê Số lượng đơn cả năm',
      subTitle: null,
      workSheet: null,
      keys: keyTTThietHai,
      widths: widthThietHai,
      data: dataTemp,
      groupHeaders: null,
      groupMerge: null,
      sheetName: 'Hóa đơn',
      headers: headerTTThietHai,
    };
    let arrayExcel = [];
    arrayExcel.push(excelTTThietHai);

    let timeSpan = new Date().toISOString();
    this._exporHelperService.generateExcel(
      'Don-hang' + timeSpan,
      arrayExcel,
    );
  }
}
