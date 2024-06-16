import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime } from 'rxjs';
import { SalesService } from 'src/app/sales/invoice-add/main.service';

@Component({
  selector: 'app-customer-manage',
  templateUrl: './customer-manage.component.html',
  styleUrls: ['./customer-manage.component.css']
})
export class CustomerManageComponent implements OnInit {
  id: any = '';
  retrievedData: any;
  customerinformations:any=[] 
  customerinformationsOg: any =[]
  

  live: FormControl = new FormControl();
  constructor(private si:SalesService, private route:Router,public router: ActivatedRoute){

  }
  ngOnInit(): void {
    this.si.getCustomerList().subscribe((res: any) => {
      this.customerinformations = res;
      this.customerinformationsOg = this.customerinformations;
     
    });

    // Search
    this.live.valueChanges.pipe(debounceTime(500)).subscribe({
      next: (res: any) => {
        console.log('Search input value:', res);  
        if(!res.trim().length){
          this.customerinformations = this.customerinformationsOg;

        } else {
          this.customerinformations =[];
          for(const item of this.customerinformationsOg){
            const result = JSON.stringify(item).toLowerCase().indexOf(res.toLowerCase());
            if(result > -1) {
              this.customerinformations.push(item);
          }
          }
        }

        

     
      }
    });
  }

  moveToCreate():void {

    this.route.navigate(['customer-add'])

  }

  
  customerEdit(item:any):void{
    console.log(item);
    this.route.navigate(['/customer-add', item]);
      
    }

}
