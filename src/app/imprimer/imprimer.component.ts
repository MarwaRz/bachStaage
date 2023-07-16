import { Component, OnInit } from '@angular/core';
import { ProductService } from '../_services/product.service';
import {Product}  from '../_model/product.model'
import { Observable } from "rxjs";
import { OrderDetails } from '../_model/order-details.model';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MyOrderDetails } from '../_model/order.model';
import {  ParamMap } from '@angular/router'
@Component({
  selector: 'app-imprimer',
  templateUrl: './imprimer.component.html',
  styleUrls: ['./imprimer.component.css']
})
export class ImprimerComponent implements OnInit {
 

 formation:Product;
  idFormation :number;
  nomFormation:String;
  dataSource = [];
  myOrderDetails: MyOrderDetails[] =[];
orderId :number;

  constructor( private activatedRoute: ActivatedRoute,
    private productService : ProductService,
    private router: Router) {
    
   }


   ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.idFormation = Number(params.get('idFormation'));
      console.log("params",params);
      console.log("paramsid",this.idFormation);
      this. getOrderDetails(this.idFormation)
      
    });
   
     
     
   
  }

 




  

 

  getOrderDetails(idFormation) {
     
      this.productService.getAllOrderDetailsFormationn(idFormation)
        .subscribe(myOrderDetails => {
          this.myOrderDetails = myOrderDetails;
        });
    }

}
