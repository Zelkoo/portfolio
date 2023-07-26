import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MenuComponent} from "./navigation/nav-menu/menu.component";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {AboutComponent} from "./section/about-section/about.component";
import {HomeComponent} from "./section/home-section/home.component";
import {RouterModule, Routes} from "@angular/router";
import {SkillsComponent} from "./section/skills-section/skills.component";
import {MatExpansionModule} from '@angular/material/expansion';

const routes: Routes = [
  { path: 'home', component: HomeComponent,  data: {animation: 'isLeft'}},
  { path: 'about', component: AboutComponent, data: {animation: 'isRight'} },
  { path: 'skills', component: SkillsComponent, data: {animation: 'isRight'} }
];


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AboutComponent,
    HomeComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
