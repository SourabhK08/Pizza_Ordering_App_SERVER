import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';  
import { UserModule } from './user/user.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5425,
    username: 'postgres',
    password: 'postgres',
    database: 'pizzastore',
    synchronize: true}), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
