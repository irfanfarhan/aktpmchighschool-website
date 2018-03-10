import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { LibraryModule } from '../lib/lib.module';
import { LoadingService } from '../shared/services/loading.service';
import { AktpmchSchoolRoutingModule } from './aktpmch-school-routing.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    LibraryModule,
    AktpmchSchoolRoutingModule
  ],
  declarations: [
    NavigationComponent,
    DashboardComponent,
  ],
  entryComponents: [],
  providers: [LoadingService]
})
export class AktpmchSchoolModule {}
