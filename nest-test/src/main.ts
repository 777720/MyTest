import { NestFactory } from '@nestjs/core';
import { MessageModule } from './message/message.module';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app/app.module';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const cookieSession = require('cookie-session');

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe());
    app.use(
        cookieSession({
            keys: ['asd'],
        }),
    );
    await app.listen(3000);
}
bootstrap();
