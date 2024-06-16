import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { expand } from 'rxjs';

@Component({
  selector: 'app-sidebar-collapse',
  templateUrl: './sidebar-collapse.component.html',
  styleUrls: ['./sidebar-collapse.component.css']
})
export class SidebarCollapseComponent implements OnInit {

//   isSalesCollapsed: boolean = false;
//   ispurchaseCollapsed: boolean = false;
//   ismasterCollapsed:boolean = false;

  constructor(private router:Router) {
    
  }
  ngOnInit(): void {
    
  }
//   toggleSalesCollapse() {
//     this.isSalesCollapsed = !this.isSalesCollapsed;
//   }

//   togglePurchaseCollapse(){
// this.ispurchaseCollapsed = !this.ispurchaseCollapsed;
//   }

//   toggleMasterCollapse(){
//     this.ismasterCollapsed = !this.ismasterCollapsed;
//   }

//   navToInvoice():void {
//     this.route.navigateByUrl('invoice-manage');
//   }

//   // quotation

//   navToQuotation():void {
//     this.route.navigateByUrl('quotation-add');
//   }


submenuVisible = false;
arrowRotated = false;

toggleDropdown() {
  this.submenuVisible = !this.submenuVisible;
  this.arrowRotated = !this.arrowRotated;
}

navigateToCustomerPage():void{
  console.log('hi');
  
  this.router.navigate(['customer-manage']);
}
}


