import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RetweetService } from "./retweet.service";
import { RetweetGrpcControllerBase } from "./base/retweet.grpc.controller.base";

@swagger.ApiTags("retweets")
@common.Controller("retweets")
export class RetweetGrpcController extends RetweetGrpcControllerBase {
  constructor(protected readonly service: RetweetService) {
    super(service);
  }
}
