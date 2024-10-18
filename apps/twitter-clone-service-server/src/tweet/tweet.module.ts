import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TweetModuleBase } from "./base/tweet.module.base";
import { TweetService } from "./tweet.service";
import { TweetController } from "./tweet.controller";
import { TweetGrpcController } from "./tweet.grpc.controller";
import { TweetResolver } from "./tweet.resolver";

@Module({
  imports: [TweetModuleBase, forwardRef(() => AuthModule)],
  controllers: [TweetController, TweetGrpcController],
  providers: [TweetService, TweetResolver],
  exports: [TweetService],
})
export class TweetModule {}
