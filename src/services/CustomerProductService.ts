import { getConnection } from "typeorm";
import { CustomerProduct } from "../entities/CustomerProduct";

export async function getAllCustomersProducts () {
    return await getConnection().getRepository(CustomerProduct).find();
}

export async function getCustomerProduct(id: string) {
    return await getConnection().getRepository(CustomerProduct).findOne(id);
}
export async function deleteCustomerProduct(id: string) {
    return await getConnection().getRepository(CustomerProduct).delete(id);
}

export async function createCustomerProduct(body) {
    let repository = getConnection().getRepository(CustomerProduct);
    const customerProduct = await repository.create(body);
    return await repository.save(customerProduct);
}

export async function updateCustomerProduct(id, body) {
    let repository = getConnection().getRepository(CustomerProduct);
    const customerProduct = await repository.findOne(id);
    repository.merge(customerProduct, body);
    return await repository.save(customerProduct);
}

export async function getCustomerProducts(idCustomer) {
    return await getConnection().getRepository(CustomerProduct).find({
        relations:['product', 'customer'],
        where:{customer: idCustomer}
    });
}