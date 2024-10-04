import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RetweetModuleBase } from "./base/retweet.module.base";
import { RetweetService } from "./retweet.service";
import { RetweetController } from "./retweet.controller";
import { RetweetResolver } from "./retweet.resolver";

@Module({
  imports: [RetweetModuleBase, forwardRef(() => AuthModule)],
  controllers: [RetweetController],
  providers: [RetweetService, RetweetResolver],
  exports: [RetweetService],
})
export class RetweetModule {}
