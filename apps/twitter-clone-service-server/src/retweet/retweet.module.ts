import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RetweetModuleBase } from "./base/retweet.module.base";
import { RetweetService } from "./retweet.service";
import { RetweetController } from "./retweet.controller";
import { RetweetGrpcController } from "./retweet.grpc.controller";
import { RetweetResolver } from "./retweet.resolver";

@Module({
  imports: [RetweetModuleBase, forwardRef(() => AuthModule)],
  controllers: [RetweetController, RetweetGrpcController],
  providers: [RetweetService, RetweetResolver],
  exports: [RetweetService],
})
export class RetweetModule {}
