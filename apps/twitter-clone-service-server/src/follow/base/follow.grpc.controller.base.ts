/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { GrpcMethod } from "@nestjs/microservices";
import { FollowService } from "../follow.service";
import { FollowCreateInput } from "./FollowCreateInput";
import { FollowWhereInput } from "./FollowWhereInput";
import { FollowWhereUniqueInput } from "./FollowWhereUniqueInput";
import { FollowFindManyArgs } from "./FollowFindManyArgs";
import { FollowUpdateInput } from "./FollowUpdateInput";
import { Follow } from "./Follow";

export class FollowGrpcControllerBase {
  constructor(protected readonly service: FollowService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Follow })
  @GrpcMethod("FollowService", "createFollow")
  async createFollow(@common.Body() data: FollowCreateInput): Promise<Follow> {
    return await this.service.createFollow({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Follow] })
  @ApiNestedQuery(FollowFindManyArgs)
  @GrpcMethod("FollowService", "follows")
  async follows(@common.Req() request: Request): Promise<Follow[]> {
    const args = plainToClass(FollowFindManyArgs, request.query);
    return this.service.follows({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Follow })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("FollowService", "follow")
  async follow(
    @common.Param() params: FollowWhereUniqueInput
  ): Promise<Follow | null> {
    const result = await this.service.follow({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Follow })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("FollowService", "updateFollow")
  async updateFollow(
    @common.Param() params: FollowWhereUniqueInput,
    @common.Body() data: FollowUpdateInput
  ): Promise<Follow | null> {
    try {
      return await this.service.updateFollow({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Follow })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("FollowService", "deleteFollow")
  async deleteFollow(
    @common.Param() params: FollowWhereUniqueInput
  ): Promise<Follow | null> {
    try {
      return await this.service.deleteFollow({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
