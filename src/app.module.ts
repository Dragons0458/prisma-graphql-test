import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { TaskCrudResolver } from '@generated/type-graphql';
import { TaskResolver } from 'src/task/task.resolver';
import { TaskService } from 'src/task/task.service';
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
  ],
  providers: [
    TaskResolver,
    TaskService,
    AppService,
    AppResolver,
    TaskCrudResolver,
  ],
})
export class AppModule {}
