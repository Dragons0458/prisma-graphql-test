import { Task } from '@generated/type-graphql';
import { CreateTaskInput } from 'src/task/inputs/create-task.input';
import { TaskService } from 'src/task/task.service';
import { Resolver, Query, Int, Mutation, Args, Arg } from 'type-graphql';

@Resolver(() => Task)
export class TaskResolver {
  constructor(private readonly taskService: TaskService) {}

  @Query(() => Int)
  async getCount(): Promise<number> {
    return this.taskService.getTotalTasks();
  }

  @Mutation(() => Task)
  async createTemp(
    @Arg('createTaskInput') createTaskInput: CreateTaskInput,
  ): Promise<Task> {
    return this.taskService.createTask(createTaskInput);
  }
}
