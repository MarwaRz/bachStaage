import { HttpClient, HttpParams } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderDetails } from '../_model/order-details.model';
import { MyOrderDetails } from '../_model/order.model';
import { Product } from '../_model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  public getAllOrderDetailsForAdmin() : Observable<MyOrderDetails[]>{
    return this.httpClient.get<MyOrderDetails[]>("http://localhost:9090/getAllOrderDetails");
   }


   
   public getAllOrderDetailsFormationn(idFormation:number) : Observable<MyOrderDetails[]>{
    return this.httpClient.get<MyOrderDetails[]>("http://localhost:9090/getAllOrderDetailsFormation/"+idFormation);
   }
  

  




 

  public getMyOrders() : Observable<MyOrderDetails[]>{
    return this.httpClient.get<MyOrderDetails[]>("http://localhost:9090/getOrderDetails");
   }

  public deleteCartItem(cartId){
    return this.httpClient.delete("http://localhost:9090/deleteCartItem/"+cartId);
   }

  public addProduct(product: FormData){
    return this.httpClient.post<Product>("http://localhost:9090/addNewProduct", product);
  }

  public getAllProducts(pageNumber, searchKeyword: string= ""){
    return this.httpClient.get<Product[]>("http://localhost:9090/getAllProducts?pageNumber="+pageNumber+"&searchKey="+searchKeyword);
  }

  public getProductDetailsById(idFormation){
    return this.httpClient.get<Product>("http://localhost:9090/getProductDetailsById/"+idFormation);
   }

  public deleteProduct(idFormation: number){
   return this.httpClient.delete("http://localhost:9090/deleteProductDetails/"+idFormation);
  }

  public getProductDetails(isSingeProductCheckout,idFormation){
    return this.httpClient.get<Product[]>("http://localhost:9090/getProductDetails/"+isSingeProductCheckout+"/"+idFormation);
   }


   public placeOrder(orderDetails: OrderDetails, isCartCheckout){
    return this.httpClient.post("http://localhost:9090/placeOrder/"+isCartCheckout, orderDetails);
   }

   public addToCart(idFormation){
    return this.httpClient.get("http://localhost:9090/addToCart/"+idFormation);
   }

   public getCartDetails(){
    return this.httpClient.get("http://localhost:9090/getCartDetails");
   }


   public getInscription(orderId){
    return this.httpClient.get<OrderDetails>("http://localhost:9090/getInscriptionById/"+orderId);
   }
   




   searchByFormationNom(nomFormation: string): Observable<OrderDetails[]> {
    const params = new HttpParams().set('nomFormation', nomFormation);
    return this.httpClient.get<OrderDetails[]>("http://localhost:9090/inscription/search", { params });
  }





}
