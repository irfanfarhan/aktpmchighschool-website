import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

const aktpmchSchoolRoutes: Routes = [
  {
    path: 'home',
    component: NavigationComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      }
    ]
  },
  {
    path: 'about-us/:id',
    component: NavigationComponent,
    children: [
      {
        path: '',
        component: AboutUsComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(aktpmchSchoolRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AktpmchSchoolRoutingModule { }
