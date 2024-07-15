
import { AppError } from '../../../../core/error/Error'
import { Client } from 'pg'
import { Product } from '../../application/entities/Product'
import { ProductRepository } from '../../application/repository/ProductRepository'
// import { Either,right,left } from 'fp-ts'
import * as E from 'fp-ts/lib/Either'


class ProductRepositoryImpl implements ProductRepository {
  private readonly client: Client

  constructor(client: Client) {
    this.client = client
  }
  async getAllProducts(): Promise<E.Either<String, Product[]>> {
    try {
      const result = await this.client.query('')
      const products = result.rows.map((row) => ({
        id: row.id,
        name: row.name,
        price: row.price
      }))
      return E.right(products)
    } catch (error) {
      return E.left("asd")
    }
  }
}
