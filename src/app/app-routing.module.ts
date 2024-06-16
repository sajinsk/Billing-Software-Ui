import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarCollapseComponent } from './sidebar-collapse/sidebar-collapse.component';
import { InvoiceAddComponent } from './sales/invoice-add/invoice-add.component';
import { InvoiceManageComponent } from './sales/invoice-manage/invoice-manage.component';
import { CustomerAddComponent } from './customer/customer-add/customer-add.component';
import { CustomerManageComponent } from './customer/customer-manage/customer-manage.component';


const routes: Routes = [
  {
    path:'',
    component: SidebarCollapseComponent
  },
  // {
  //   path:'invoice-manage',
  //   component: InvoiceManageComponent
  // },
  // {
  //   path:'invoice-add',
  //   component: InvoiceAddComponent
  // },
  // {
  //   path:'invoice-add/:id',
  //   component: InvoiceAddComponent
  // },
  {
    path:"customer-add",
    component:CustomerAddComponent
  },
  {
    path:"customer-manage",
    component:CustomerManageComponent
  },

  {
    path:'customer-add/:id',
    component: CustomerAddComponent
  },

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
