import { MyOrderDetails } from "./order.model";

export interface Cycle {
     Id: number

  numSalle:String
   numAction:String
   themeFormation:String

    modeFormation:String
 lieu:String
    gouv :String
     periodeDebut:String
    periodeFin:String
   horaireFin:String
    pauseDebut :String
 pauseFin:String
droitTirageI:boolean
  droitTirageC:boolean
   credit:boolean
    inscriptionDetail :MyOrderDetails;
    formateur : any
}