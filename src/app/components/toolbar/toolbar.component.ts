import { Component, OnInit, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import APP_CONFIG from 'src/app/config/global';
import { APP_ROUTES } from '../../routing/app-routing.module';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Input() public sidenav: MatSidenav;
  public routes: any = {};
  public config: any = {};

  constructor() { }

  ngOnInit() {
    this.config = APP_CONFIG;
    this.routes = APP_ROUTES.filter(value => {
        return value['menu'] === true;
    });
  }
}
