import { Injectable } from "@nestjs/common";

@Injectable()
export class userService{
    findUser(user: string){
        return `the name of user is ${user}`
    }
}