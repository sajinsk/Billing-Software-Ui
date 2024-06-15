import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SalesService } from './sales.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-invoice-add',
  templateUrl: './invoice-add.component.html',
  styleUrls: ['./invoice-add.component.css']
})
export class InvoiceAddComponent implements OnInit {

  ispage:boolean = false
  salesInvoice:any
  itemList: any
  id: any = '';
  invoiceList: any = [];
  updatePage: boolean = false;
  currentIndex: any;
  editArr: boolean = false;
  constructor(private fb:FormBuilder, public route: ActivatedRoute,private si:SalesService, private router:Router){

  }
  ngOnInit(): void {
    this.salesInvoice = this.fb.group({
      invoice_type:[''],
      invoice_no:[''],
      date:[''],
      sold_by:[''],
      bill_to:[''],
      mobile_no:[''],
      client_name:[''],
      address:[''],
      place_of_supply:[''],
      client_gst:[''],
      type:[''],
      delivery_terms:[''],
      remarks:[''],
      item_name:[''],
      uom:[''],
      quantity:[''],
      sale_price:[''],
      discount:[''],
      amount:[''],

    });

    this.id = this.route.snapshot.paramMap.get('id')
    console.log('id',this.id);
    
    if(this.id){
      this.si.getInvoiceId(this.id).subscribe((res:any)=>{
         console.log('res',res);

         this.patchValue(res.data);
         this.updatePage = true;
         
   })
    }
    
   
}


patchValue(data: any): void {
  this.salesInvoice.patchValue({
    invoice_type: data.invoice_type,
    invoice_no: data.invoice_no,
    date: data.date,
    sold_by: data.sold_by,
    bill_to: data.bill_to,
    mobile_no: data.mobile_no,
    client_name: data.client_name,
    address: data.address,
    place_of_supply: data.place_of_supply,
    client_gst: data.client_gst,
    type: data.type,
    delivery_terms: data.delivery_terms,
    remarks: data.remarks,
    item_name: data.item_name,
    uom: data.uom,
    quantity: data.quantity,
    sale_price: data.sale_price,
    discount: data.discount,
    amount: data.amount,
  });
}









  addToSave():void{
    const formValue = this.salesInvoice.getRawValue();
       this.si.addSalesInvoice(formValue).subscribe((res: any) =>{
           console.log('save',formValue);
         
          this.si.showAlert('success', 'Sales Invoice created')
        })
  }



  addToUpdate():void{
    const formValue = this.salesInvoice.getRawValue();
       formValue.id = this.id;
       console.log(formValue.id);
       
        this.si.updateSalesInvoice(formValue).subscribe((res: any)=>{
          console.log(formValue)
          this.si.showAlert('success', 'Sales Invoice Updated')
        })
  }

  moveToManage():void{
    this.router.navigate(['invoice-manage'])
  }

 
}
