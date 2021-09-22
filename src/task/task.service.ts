import { Task } from '@generated/type-graphql';
import { Injectable, Scope } from '@nestjs/common';
import { prisma } from 'src/app.module';
import { CreateTaskInput } from 'src/task/inputs/create-task.input';

@Injectable({ scope: Scope.REQUEST })
export class TaskService {
  async getTotalTasks(): Promise<number> {
    return prisma.task.count();
  }

  async createTask(createTaskInput: CreateTaskInput): Promise<Task> {
    return prisma.task.create({
      data: createTaskInput,
    });
  }
}
