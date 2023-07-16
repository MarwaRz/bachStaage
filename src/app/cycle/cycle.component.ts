import { Observable } from "rxjs";
import { FormateurService } from "./../formateur.service";
import { Formateur } from "./../formateur";
import { Component, OnInit } from "@angular/core";
import { Router , ActivatedRoute} from '@angular/router';
import { ProductService } from '../_services/product.service';
import {Product}  from '../_model/product.model'
import { MyOrderDetails } from "../_model/order.model";


@Component({
  selector: 'app-cycle',
  templateUrl: './cycle.component.html',
  styleUrls: ['./cycle.component.css']
})

export class CycleComponent implements OnInit {
  formatDate(value: string): string {
    const parts = value.split('-');
    const formattedDate = `${parts[2]}/${parts[1]}/${parts[0]}`;
    return formattedDate;
  }
  formateur:Formateur;
  formateurs: Observable<Formateur[]>;
  id:number;
  f:any;
  formation:Product;
  idFormation :number;
  nomFormation:String;
  myOrderDetails: MyOrderDetails[] =[];
orderId :number;
  constructor(private formateurService: FormateurService,private route: ActivatedRoute,
    private router: Router ,private activatedRoute: ActivatedRoute,
    private productService : ProductService,
    ) { }


  ngOnInit(): void {
    this.formateurs = this.formateurService.getFormateurList();

    this.activatedRoute.paramMap.subscribe(params => {
      this.idFormation = Number(params.get('idFormation'));
      console.log("params",params);
      console.log("paramsid",this.idFormation);
      this. getOrderDetails(this.idFormation)
      
    });
   
    this.formateur = new Formateur();

    this.id = this.route.snapshot.params['id'];
    
   
    this.onSubmit()

  }




  onSubmit()
{
 this.f= this.formateurService.getFormateur(this.id).subscribe(
    response =>{this.formateurs = response;}
   );  
} 

 




  getOrderDetails(idFormation) {
     
    this.productService.getAllOrderDetailsFormationn(idFormation)
      .subscribe(myOrderDetails => {
        this.myOrderDetails = myOrderDetails;
      });
  }





  displayedColumns: string[] = ['Id', 'Product Name', 'Name', 'Address', 'Contact No' ,'Status','date1','date2','date3','date4','date5'];
  dataSourcee = [];


 

  getAllOrderDetailsForAdmin(){
    this.productService.getAllOrderDetailsForAdmin().subscribe(
      (resp) => {
        console.log(resp);
        this.dataSourcee = resp;
      }, (error) => {
        console.log(error);
      }
    );
  }





}



