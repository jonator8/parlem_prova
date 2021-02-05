import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity, Index,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from 'typeorm';

import {Customer} from "./Customer";
import {Product} from "./Product";


@Entity()
export class CustomerProduct extends BaseEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @ManyToOne(type => Customer, customer => customer.customerProducts)
    @Index()
    customer: Customer;

    @ManyToOne(type => Product, product => product.customerProducts)
    @Index()
    product: Product;

    @Column({type: 'timestamp without time zone',  nullable: false})
    soldAt: string;

    @Column({type: 'varchar', length:10,  nullable: true})
    numeracioTerminal: number;

    @CreateDateColumn()
    createdAt: string;

    @UpdateDateColumn()
    updatedAt: string;

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }

    constructor(obj?: any) {
        super();
        this.deserialize(obj);
    }

}