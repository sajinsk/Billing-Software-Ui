import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SalesService } from 'src/app/sales/invoice-add/main.service';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit{

  customerGroup: any
  updatePage: boolean = false;
customer_id: any;
constructor( private si:SalesService, private fb:FormBuilder){

}
  ngOnInit(): void {
    this.customerGroup = this.fb.group({
      customer_id :[''],
      customer_name:[''],
      mobile_no:[''],
      address:[''],
      city_area:[''],
      state:[''],
      remarks:[''],
    })
  }


addToSave():void {

  const formValue = this.customerGroup.getRawValue()
  this.si.saveCustomerDetails(formValue).subscribe((res: any) =>{
    console.log(res);
    if(res.status){
      this.si.showAlert('success',res.msg)
    }
    
  })

}

addToUpdate() {
  
  }
  
}
