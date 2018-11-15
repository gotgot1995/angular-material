import { Component, OnInit, Input } from '@angular/core';
import APP_CONFIG from 'src/app/config/global';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Input() public sidenav: MatSidenav;
  public APP: any = {};

  constructor() { }

  ngOnInit() {
    this.APP = APP_CONFIG;
  }
}
