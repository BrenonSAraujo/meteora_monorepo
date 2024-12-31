import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Size } from './models/size.model';
import { Color } from './models/color.model';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  async getProducts(page: number = 1, limit: number = 6) {
    const skip = (page - 1) * limit;
    return this.prisma.product.findMany({
      skip,
      take: limit,
      include: {
        seller: true,
      },
    });
  }

  async getSizes(productId: number): Promise<Size[]> {
    const productSizes = await this.prisma.productSize.findMany({
      where: {
        productId,
      },
      include: {
        size: true,
      },
    });
    return productSizes.map((productSize) => productSize.size);
  }

  async getColors(productId: number): Promise<Color[]> {
    const productColors = await this.prisma.productColor.findMany({
      where: {
        productId,
      },
      include: {
        color: true,
      },
    });
    return productColors.map((productColor) => productColor.color);
  }
}
