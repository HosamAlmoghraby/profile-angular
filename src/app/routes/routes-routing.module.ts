import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { MyComponent } from '../components/my/my.component';
import { AboutComponent } from '../components/about/about.component';
import { SocialComponent } from '../components/social/social.component';

// Components Paths
const routes: Routes = [
  {path: '', component: MyComponent},
  {path: 'about', component: AboutComponent},
  {path: 'social', component: SocialComponent}
];

@NgModule({
  //imports: [RouterModule.forChild(routes)],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
