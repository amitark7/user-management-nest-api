import { Injectable } from "@nestjs/common";

@Injectable()
export class LoggerService {
    log(msg: String ,payload?: any) {
        if(payload)
            console.log(`[LOG] ${msg} : `,payload)
        else
            console.log(`[LOG] ${msg}`)
    }
}