import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Seller {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;
}
