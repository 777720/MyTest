import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const CurrentUser = createParamDecorator(
    (data: never, ctx: ExecutionContext) => {
        const session = ctx.switchToHttp().getRequest().session;
        return session.userId;
    },
);
