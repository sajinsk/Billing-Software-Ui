import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
id: any = '';
constructor(private fb:FormBuilder, public route: ActivatedRoute,private si:SalesService, private router:Router){

}
  ngOnInit(): void {
    this.customerGroup = this.fb.group({
     
      customer_type :[''],
      customer_name:[''],
      mobile_no:[''],
      address:[''],
      city_area:[''],
      state:[''],
      remarks:[''],
    })

    
    this.id = this.route.snapshot.paramMap.get('id')
    console.log('id',this.id);

    if(this.id){
      this.si.getCustomerId(this.id).subscribe((res:any)=>{
         console.log('res',res);

         this.patchValue(res.data);
         this.updatePage = true;
         
   })
    }
  }

  patchValue(data: any): void {
    this.customerGroup.patchValue({
      
      customer_type:data.customer_type,
      customer_name:data.customer_name,
      mobile_no:data.mobile_no,
      address:data.address,
      city_area:data.city_area,
      state:data.state,
      remarks:data.remarks
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
  const formValue = this.customerGroup.getRawValue();
       formValue.id = this.id;
       console.log(formValue.id);
       
        this.si.updateCustomerDetails(formValue).subscribe((res: any)=>{
          console.log(formValue)
          this.si.showAlert('success', res.msg)
        })
  }

  moveToManage():void {
    this.router.navigate(['customer-manage'])
  }
  
}
