import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BookingComponent } from './booking/booking.component';

const appRoutes:Routes=[
  {
    path:"",component:LoginComponent
  },
  {
    path:"home",component:HomeComponent
  },
  {
    path:"gallery",component:GalleryComponent
  },
  {
    path:"booking",component:BookingComponent
  }
  
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    GalleryComponent,
    BookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
