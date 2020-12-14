export class product {
    constructor(
      public code  : string,
      public name  : string,
      public price : string,

      public _id?  : number,
      public checked : boolean = false ,
    ) {}
  }
  
  