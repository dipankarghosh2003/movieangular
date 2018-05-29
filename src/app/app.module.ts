import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ChildComponent } from './child/child.component';
import {AuthGuard} from './auth.guard';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TvshowsComponent } from './tvshows/tvshows.component';
import { PeopleComponent } from './people/people.component';
import {SearchMovieFilter} from './searchmovie.filter';
import { PersonDetailsComponent } from './person-details/person-details.component';
/*const appRoute: Routes=[
{ path:'', component:HomeComponent,canActivate:[AuthGuard]},
{ path:'home', component:HomeComponent,canActivate:[AuthGuard]},
{path:'login',component:LoginComponent},
{path:'child',component:ChildComponent}
];*/
const appRoute: Routes=[
{ path:'', component:HomeComponent},
{ path:'home', component:HomeComponent},
{path:'tvshows',component:TvshowsComponent},
{path:'people',component:PeopleComponent},
{path:'person/:personId',component:PersonDetailsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ChildComponent,
    HeaderComponent,
    FooterComponent,
    TvshowsComponent,
    PeopleComponent,
    SearchMovieFilter,
    PersonDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoute)

  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
