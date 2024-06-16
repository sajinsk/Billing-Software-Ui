import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';
import { SidebarCollapseComponent } from './sidebar-collapse/sidebar-collapse.component';
import { InvoiceAddComponent } from './sales/invoice-add/invoice-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InvoiceManageComponent } from './sales/invoice-manage/invoice-manage.component';
import { CustomerAddComponent } from './customer/customer-add/customer-add.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';





const routes: Routes = [
 

]

@NgModule({
  declarations: [
    AppComponent,
    SidebarCollapseComponent,
    InvoiceAddComponent,
    InvoiceManageComponent,
    CustomerAddComponent,
    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
