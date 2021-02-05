// Code used to seed the database.
// Must be at top
import 'reflect-metadata';

import { createConnection } from 'typeorm';
import {Customer} from "../entities/Customer";
import {DocTypeEnum} from "../enums/CustomerEnum";

(async () => {
    console.info('Beginning task.');

    const conn = await createConnection();
    console.info('PG connected.');

    // Create seed data.
    let customer = new Customer({
        docType: DocTypeEnum.dni,
        docNum: '11223344E',
        email: 'it@parlem.com',
        givenName: 'Enriqueta',
        familyName1: "Parlem",
        phone: 668668668
    });

    customer = await conn.getRepository(Customer).save(customer); // re-assign to know assigned id
    console.info('Customer saved.',  customer);

    // Close connection
    await conn.close();
    console.info('PG connection closed.');

    console.info('Finished task.');
})();
