import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Size {
  @Field(() => ID)
  id: number;

  @Field()
  displayName: string;
}
