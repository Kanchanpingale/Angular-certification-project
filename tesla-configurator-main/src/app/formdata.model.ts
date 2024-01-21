export interface FormData {
    selectedOption1: 
    {
        code:string,
        description:string,
        colors:CarColors  
    }
    selectedColor:CarColors,
    selectedConfig:ConfigDetails
  
    //selectedColor: object;
    selectedCode: string,
    codeDetails: CodeDetails,
    selectedYoke: boolean,
    selectedTowHitch:boolean

}
    
   export interface CarColors{
    code:string,
    description:string,
    price:number
   }
    
   export interface CodeDetails{
    configs: [ConfigDetails],
    towHitch: boolean,
    yoke:boolean
   }
   export interface ConfigDetails{
    
        id: string,
        description:string,
        range:number,
        speed:number,
        price:number,
        
    
   }

  