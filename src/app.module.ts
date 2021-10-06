import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppService } from './app.service';
import ormConfig from './configs/orm.config';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { AutorModule } from './modules/autor/autor.module';
import { LivroModule } from './modules/livro/livro.module';
import { UsuarioModule } from './modules/usuario/usuario.module';
import { VendaModule } from './modules/venda/venda.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    TypeOrmModule.forRoot(ormConfig),
    AutorModule,
    LivroModule,
    UsuarioModule,
    VendaModule,
  ],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
