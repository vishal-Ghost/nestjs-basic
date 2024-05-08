import { Module } from "@nestjs/common";
import { order1Module } from "./order1.module";
import { order2Module } from "./order2.module";

@Module({
    controllers : [],
    exports : [],
    imports : [order1Module,order2Module],
    providers : []
})

export class orderModule{}