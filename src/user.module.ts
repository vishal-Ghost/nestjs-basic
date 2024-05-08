import { Module } from "@nestjs/common";
import { user } from "./user.controller";
import { userService } from "./user.service";

@Module({
    controllers : [user],
    exports : [],
    imports : [],
    providers : [userService]

})

export class userModule{}