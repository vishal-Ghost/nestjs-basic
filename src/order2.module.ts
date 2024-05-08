import { Module } from "@nestjs/common";
import { order2Controller } from "./order2.controller";
import { order2Service } from "./order2.service";

@Module({
    controllers : [order2Controller],
    exports : [],
    imports : [],
    providers : [order2Service]
})

export class order2Module{}