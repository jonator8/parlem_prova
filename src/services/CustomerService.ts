import { getConnection } from "typeorm";
import {Customer} from "../entities/Customer";

export async function getAllCustomers () {
    return await getConnection().getRepository(Customer).find();
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