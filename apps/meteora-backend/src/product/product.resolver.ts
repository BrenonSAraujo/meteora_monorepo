import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Product } from './models/product.model';
import { Inject } from '@nestjs/common';
import { Color } from './models/color.model';
import { Size } from './models/size.model';
import { ProductService } from './product.service';

@Resolver(() => Product)
export class ProductResolver {
  constructor(
    @Inject(ProductService) private readonly productService: ProductService,
  ) {}

  @Query(() => [Product])
  async products(
    @Args('page', { type: () => Number, nullable: true }) page: number = 1,
    @Args('limit', { type: () => Number, nullable: true }) limit: number = 6,
  ): Promise<Product[]> {
    return this.productService.getProducts(page, limit);
  }

  @ResolveField(() => [Size])
  async sizes(@Parent() product: Product): Promise<Size[]> {
    return this.productService.getSizes(product.id);
  }

  @ResolveField(() => [Color])
  async colors(@Parent() product: Product): Promise<Color[]> {
    return this.productService.getColors(product.id);
  }

  @ResolveField(() => String)
  async seller(@Parent() product: Product): Promise<string> {
    return product.seller.name;
  }
}
