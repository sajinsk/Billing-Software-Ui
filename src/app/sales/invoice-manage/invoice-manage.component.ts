import { Component, OnInit } from '@angular/core';
import { SalesService } from '../invoice-add/sales.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-invoice-manage',
  templateUrl: './invoice-manage.component.html',
  styleUrls: ['./invoice-manage.component.css']
})
export class InvoiceManageComponent implements OnInit {
  id: any = '';
  retrievedData: any;
  salesInformations:any=[];
constructor(private si:SalesService, private route:Router,public router: ActivatedRoute){

}

  ngOnInit(): void {
    this.si.getsalesinvoiceItem().subscribe((res: any) => {
      
      this.salesInformations = res;
      console.log('res',this.salesInformations);
    });

    
  }

  moveToCreate():void {

    this.route.navigate(['invoice-add'])

  }

  Invoiceedit(item:any):void{

   

  this.route.navigate(['/invoice-add', item]);
    
  }

  

}
