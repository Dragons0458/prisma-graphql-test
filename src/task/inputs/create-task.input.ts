import { TaskCreateInput } from '@generated/type-graphql';
import { Field, InputType } from 'type-graphql';

@InputType()
export class CreateTaskInput implements TaskCreateInput {
  @Field(() => String)
  name: string;

  @Field(() => String)
  description: string;
}
