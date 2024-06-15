import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { SalesService } from '../invoice-add/sales.service';

@Component({
  selector: 'app-quotation-add',
  templateUrl: './quotation-add.component.html',
  styleUrls: ['./quotation-add.component.css']
})
export class QuotationAddComponent implements OnInit {
  updatePage: boolean = false;
  quotationInformation:any

  constructor(private fb:FormBuilder, public route: ActivatedRoute,private router:Router,private si:SalesService){

  }

  ngOnInit(): void {
   this.quotationInformation = this.fb.group({
    quotation_type:[''],
    client_name:[''],
    date:[''],
    valid_until:[''],
    bill_to:[''],
    mobile_no:[''],
    address:[''],
    place_of_supply:[''],
    client_gst:[''],
    item_name:[''],
    uom:[''],
    quantity:[''],
    sale_price:[''],
    discount:[''],
    amount:[''],
    
   })
  }
  
  addToSave():void {

  }

  addToUpdate():void {

  }
}
