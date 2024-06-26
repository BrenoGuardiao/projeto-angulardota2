import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { HeroPageComponent } from './components/pages/hero-page/hero-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';

const routes: Routes = [
  {path: '', component:HomeComponent },
  {path: 'search/:searchTerm', component:HomeComponent},
  {path:'hero/:id', component:HeroPageComponent},
  {path:'login', component:LoginPageComponent},
  {path:'register', component: RegisterPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
