import { getConnection } from "typeorm";
import {Product} from "../entities/Product";

export async function getAllProducts () {
    return await getConnection().getRepository(Product).find();
}

export async function getProduct (id: string) {
    return await getConnection().getRepository(Product).findOne(id);
}
export async function deleteProduct(id: string) {
    return await getConnection().getRepository(Product).delete(id);
}

export async function createProduct(body) {
    let repository = getConnection().getRepository(Product);
    const product = await repository.create(body);
    return await repository.save(product);
}

export async function updateProduct(id, body) {
    let repository = getConnection().getRepository(Product);
    const product = await repository.findOne(id);
    repository.merge(product, body);
    return await repository.save(product);
}