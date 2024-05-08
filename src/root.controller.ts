import { Controller, Get } from "@nestjs/common";
import { rootService } from "./root.service";

@Controller('test')
export class rootController{
    name : string = 'Vishal'
    age : number = 27

    constructor(private rootService : rootService){
        console.log(this.age+' '+this.name)
    }

    @Get('/test')
    findAll(){
        return this.rootService.findAll(this.name, this.age)
    }

}