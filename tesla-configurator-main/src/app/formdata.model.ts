export interface FormData {
    selectedOption1: 
    {
        code:string,
        description:string,
        colors:CarColors

       
    }
    selectedColor:CarColors,
    selectedConfig:
    {
        id: string,
        description:string,
        range:number,
        speed:number,
        price:number,
        towHitch: boolean,
        yoke:boolean
    }
    //selectedColor: object;
    selectedCode: string,
    codeDetails: object,
}
    
   export interface CarColors{
    code:string,
    description:string,
    price:number
   }
    

  