import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import {AboutComponent} from '../components/about/about.component';

export const APP_ROUTES = [
    { menu: true, path: 'home', component: HomeComponent, name: 'Home', icon: 'home' },
    { menu: true, path: 'about', component: AboutComponent, name: 'About', icon: 'info' },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
