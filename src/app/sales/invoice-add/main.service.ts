import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  constructor(private http: HttpClient) {

   }

  //  getCode(code: any):Observable<any>{
  //   return this.http.get('http://localhost:3000/sales-invoice/invoice-code')
  //  }

  //  post 

  addSalesInvoice(data: any):Observable<any>{
    return this.http.post('http://localhost:3000/sales-invoice/invoice-save',data)
   }

   updateSalesInvoice(data: any):Observable<any>{
    return this.http.post('http://localhost:3000/sales-invoice/invoice-update',data)
   }



  //  get details 

  getsalesinvoiceItem():Observable<any>{
    return this.http.get('http://localhost:3000/sales-invoice/getInvoice')
  }


  // edit

  getInvoiceId(id:any){
    
    return this.http.get('http://localhost:3000/sales-invoice/getInvoiceId/'+id)
  }



  // sweetAlert 

  showAlert(type: any, msg: any,icon='') {
    const toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 10000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
        },
    });

    toast.fire({
        icon: type,
        title: msg,
    });
}


// customer save 


saveCustomerDetails(data: any):Observable<any>{
  return this.http.post('http://localhost:3000/sales-invoice/customer-save',data)
 }

}
