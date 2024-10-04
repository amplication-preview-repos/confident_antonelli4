import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RetweetServiceBase } from "./base/retweet.service.base";

@Injectable()
export class RetweetService extends RetweetServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
