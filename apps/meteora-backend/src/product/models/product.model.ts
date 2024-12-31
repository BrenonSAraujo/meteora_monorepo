import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Seller } from './seller.model';

@ObjectType()
export class Product {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  price: number;

  @Field()
  image: string;

  @Field(() => Seller)
  seller: Seller;
}
