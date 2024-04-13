import { Controller } from '@nestjs/common';
import {
  Ctx,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';

@Controller()
export class AuthController {
  constructor() {}

  @MessagePattern({ cmd: 'get-user' })
  async getUser(@Ctx() context: RmqContext, @Payload() payload: any) {
    const channel = context.getChannelRef();
    const message = context.getMessage();
    channel.ack(message);
    return {
      payload,
    };
  }
}
