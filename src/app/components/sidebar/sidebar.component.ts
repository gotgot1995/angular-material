import { Component, OnInit } from '@angular/core';
import { APP_ROUTES } from '../../routing/app-routing.module';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public routes: any = {};
  constructor() { }

  ngOnInit() {
    this.routes = APP_ROUTES.filter(value => {
      return value['menu'] === true;
    });
  }

}
