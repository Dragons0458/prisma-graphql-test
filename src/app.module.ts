import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { TaskCrudResolver } from '@generated/type-graphql';
import { TypeGraphQLModule } from 'typegraphql-nestjs';
import { AppService } from './app.service';
import { AppResolver } from 'src/app.resolver';
import { TaskModule } from './task/task.module';

export const prisma = new PrismaClient();

@Module({
  imports: [
    TypeGraphQLModule.forRoot({
      playground: true,
      introspection: true,
      path: '/',
      emitSchemaFile: './generated-schema.graphql',
      validate: false,
      context: (): { prisma: PrismaClient } => ({ prisma }),
    }),
    TaskModule,
  ],
  providers: [AppService, AppResolver, TaskCrudResolver],
})
export class AppModule {}
