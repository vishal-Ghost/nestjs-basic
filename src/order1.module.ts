import { Module } from "@nestjs/common";
import { order1 } from "./order1.controller";
import { order1Service } from "./order1.service";

@Module({
    controllers : [order1],
    exports : [],
    imports : [],
    providers : [order1Service]
})

export class order1Module{}