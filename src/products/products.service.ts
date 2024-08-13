import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ProductsService {
  constructor(private readonly databaseServicce: DatabaseService) {}

  async create(create: Prisma.ProductCreateInput) {
    return await this.databaseServicce.product.create({
      data: create,
    });
  }

  async findOne(id: number) {
    return await this.databaseServicce.product.findUnique({
      where: {
        id: id,
      },
    });
  }

  async findAll() {
    return await this.databaseServicce.product.findMany({});
  }

  async update(id: number, updateProductDto: Prisma.ProductUpdateInput){
    return await this.databaseServicce.product.update({
        where: {
            id
        },
        data: updateProductDto
    })
  }

  async remove(id: number){
    return await this.databaseServicce.product.delete({
        where:{id}
    })
  }
}
