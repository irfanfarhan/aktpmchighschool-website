import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

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
