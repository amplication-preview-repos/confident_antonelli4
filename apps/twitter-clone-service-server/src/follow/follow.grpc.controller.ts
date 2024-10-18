import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FollowService } from "./follow.service";
import { FollowGrpcControllerBase } from "./base/follow.grpc.controller.base";

@swagger.ApiTags("follows")
@common.Controller("follows")
export class FollowGrpcController extends FollowGrpcControllerBase {
  constructor(protected readonly service: FollowService) {
    super(service);
  }
}
