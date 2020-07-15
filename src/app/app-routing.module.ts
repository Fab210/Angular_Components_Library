import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularComponent } from "./formular/formular.component";
import { LoginPageComponent } from "./login-page/login-page.component";

const routes: Routes = [
  { path: "formular", component: FormularComponent },
  { path: "login", component: LoginPageComponent },
  { path: "**", component: LoginPageComponent },
  { path: "", redirectTo: "/login", pathMatch: "full" },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
