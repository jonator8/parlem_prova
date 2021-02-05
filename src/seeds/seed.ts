// Code used to seed the database.
// Must be at top
import 'reflect-metadata';

import { createConnection } from 'typeorm';
import {Customer} from "../entities/Customer";
import {DocTypeEnum} from "../enums/CustomerEnum";
import {Product} from "../entities/Product";
import {TypeEnum} from "../enums/ProductEnum";
import {CustomerProduct} from "../entities/CustomerProduct";

(async () => {
    console.info('Beginning task.');

    const conn = await createConnection();
    console.info('PG connected.');

    // Create seed data.
    let customers = [
        new Customer({
            docType: DocTypeEnum.dni,
            docNum: '11223344E',
            email: 'it@parlem.com',
            givenName: 'Enriqueta',
            familyName1: "Parlem",
            phone: 668668668
        }),
        new Customer({
            docType: DocTypeEnum.nie,
            docNum: 'X0523821F',
            email: 'it@parlem.com',
            givenName: 'Joan',
            familyName1: "Ferrer",
            phone: 668668668
        }),
        new Customer({
            docType: DocTypeEnum.nif,
            docNum: 'X1234567E',
            email: 'it@parlem.com',
            givenName: 'Andreu',
            familyName1: "Godo",
            phone: 668668668
        }),
    ];
    let products = [
        new Product({
            name: "Fibra 100 Adamo",
            type: TypeEnum.ftth
        }),
        new Product({
            name: "Fibra 10 Adamo",
            type: TypeEnum.fttt
        }),
        new Product({
            name: "Fibra 50 Adamo",
            type: TypeEnum.fttf
        }),
        new Product({
            name: "Movil 10",
            type: TypeEnum.mttt
        })
    ];


    customers = await conn.getRepository(Customer).save(customers);
    console.info('Customers saved:',  customers);
    products = await conn.getRepository(Product).save(products);
    console.info('Products saved:',  products);

    let customerProducts = [
        new CustomerProduct({
            customer: customers[0],
            product: products[0],
            soldAt: new Date(),
            numeracioTerminal: 123456789
        }),
        new CustomerProduct({
            customer: customers[1],
            product: products[1],
            soldAt: new Date(),
            numeracioTerminal: 123456789
        }),
        new CustomerProduct({
            customer: customers[1],
            product: products[3],
            soldAt: new Date(),
            numeracioTerminal: 123456789
        }),
    ];

    customerProducts = await conn.getRepository(CustomerProduct).save(customerProducts);
    console.info('Customer products saved:',  customerProducts);

    // Close connection
    await conn.close();
    console.info('PG connection closed.');

    console.info('Finished task.');
})();
