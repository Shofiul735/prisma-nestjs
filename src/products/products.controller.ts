import { Controller, Post } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Prisma } from '@prisma/client';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Post()
  create(create: Prisma.ProductCreateInput) {
    this.productService.create(create);
  }
}
