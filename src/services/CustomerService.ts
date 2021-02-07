import { getConnection } from "typeorm";
import {Customer} from "../entities/Customer";
import {getCustomerProductsByCustomer} from "./CustomerProductService";

export async function getAllCustomers () {
    return await getConnection().getRepository(Customer).find({ select: ['id', 'givenName', 'email'] });
}

export async function getCustomer (id: string) {
    return await getConnection().getRepository(Customer).findOne(id);
}
export async function deleteCustomer(id: string) {
    return await getConnection().getRepository(Customer).delete(id);
}

export async function createCustomer(body) {
    let repository = getConnection().getRepository(Customer);
    const customer = await repository.create(body);
    return await repository.save(customer);
}

export async function updateCustomer(id, body) {
    let repository = getConnection().getRepository(Customer);
    const customer = await repository.findOne(id);
    repository.merge(customer, body);
    return await repository.save(customer);
}

export async function getCustomerProducts(idCustomer) {
    return new Promise((resolve, reject) => {
        const p0 = getCustomer(idCustomer);
        const p1 = getCustomerProductsByCustomer(idCustomer);
        Promise.all([p0,p1]).then(result => {
            resolve({
                customer: result[0],
                products: result[1]
            });
        }).catch(err => reject(err));
    });
}