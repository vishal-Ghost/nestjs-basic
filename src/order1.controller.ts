import { Controller, Get, Param } from "@nestjs/common";
import { order1Service } from "./order1.service";

@Controller('/')
export class order1{

    constructor(private order1Service : order1Service){}

    @Get('/getOrder1/:orderNo')
    findAllOrder1(@Param() params){
        return this.order1Service.findAllOrder1(params.orderNo)
    }
}