import APP_CONFIG from 'src/app/config/global';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public APP: any = {};
  constructor() { }

  ngOnInit() {
    this.APP = APP_CONFIG;
  }

}
