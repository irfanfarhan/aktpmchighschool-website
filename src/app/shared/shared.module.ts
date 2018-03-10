import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { LoadingService } from './services/loading.service';
import { LoginRedirectComponent } from './components/login-redirect/login-redirect.component';
import { LoaderComponent } from './components/loader/loader.component';
import { LibraryModule } from '../lib/lib.module';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    LibraryModule,
    CarouselModule
  ],
  declarations: [LoginRedirectComponent, LoaderComponent],
  exports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    LoginRedirectComponent,
    LoaderComponent,
    CarouselModule
  ],
  providers: [LoadingService]
})
export class SharedModule {}
