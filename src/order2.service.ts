import { Injectable } from "@nestjs/common";

@Injectable()
export class order2Service{

     findAllOrder2(orderNo : string) : string{
        return `this is order2 no ${orderNo}`
     }
}