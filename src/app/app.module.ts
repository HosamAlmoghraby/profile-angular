import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Components
import { AppComponent } from './app.component';
import { MyComponent } from './components/my/my.component';
import { AboutComponent } from './components/about/about.component';
import { NavigatorComponent } from './components/navigator/navigator.component';
import { SocialComponent } from './components/social/social.component';

// Services
import { DataService } from './services/data.service';

// Routes
import { RoutesModule } from './routes/routes.module';


// import { RouterModule, Routes } from '@angular/router';

// const appRoutes: Routes = [
//   {path:'', component:MyComponent},
//   {path:'about', component:AboutComponent}
// ];

@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
    AboutComponent,
    NavigatorComponent,
    SocialComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutesModule
    // RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
