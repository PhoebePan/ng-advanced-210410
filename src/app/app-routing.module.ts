import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Page2Component } from './page2/page2.component';
import { Page1Component } from './page1/page1.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ColorComponent } from './utilities/color/color.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { Login2Component } from './login2/login2.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  { path: '', component: LayoutComponent, children:
    [
      { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
      { path: 'page1', component: Page1Component },
      { path: 'page2', component: Page2Component, canActivate: [AuthGuard] },
      { path: 'dashboard', component: DashboardComponent },
      {
        path: 'utilities',
        children: [
          { path: 'color', component: ColorComponent },
          { path: 'color/:type', component: ColorComponent }
        ]
      },
      { path: 'components', loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule) },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'login2', component: Login2Component },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
