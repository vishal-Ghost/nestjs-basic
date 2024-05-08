import { Injectable } from "@nestjs/common";

@Injectable()
export class order1Service{

    findAllOrder1(orderNo : string) : string{
        return `Order number is ${orderNo}`
    }
}