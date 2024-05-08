import { Controller, Get, Param } from "@nestjs/common";
import { userService } from "./user.service";

@Controller('user')
export class user{
    constructor(private userService : userService){

    }

    @Get('/getUser/:user')
    findUser(@Param() params) : string{
        return this.userService.findUser(params.user)
    }
}