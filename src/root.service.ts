import { Injectable } from "@nestjs/common"

@Injectable()
export class rootService {

    findAll(name : string, age : number){
        return `${name} age is ${age}`
    }

}