import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Color {
  @Field(() => ID)
  id: number;

  @Field()
  displayName: string;
}
