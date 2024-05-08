import { Controller, Get, Param } from "@nestjs/common";
import { order2Service } from "./order2.service";

@Controller('/')
export class order2Controller{

    constructor(private order2Service : order2Service){}

    @Get('/getOrder2/:id')
    findAllOrder2(@Param() params){
        return this.order2Service.findAllOrder2(params.id)
    }

}