import { Module } from "@nestjs/common";
import { userModule } from "./user.module";
import { orderModule } from "./order.module";
import { chatModule } from "./chat.module";
import { rootController } from "./root.controller";
import { rootService } from "./root.service";

@Module({
    exports : [],
    controllers : [rootController],
    imports : [userModule,orderModule,chatModule],
    providers : [rootService]
})

export class rootModule{};