import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from 'typeorm';
import {TypeEnum} from "../enums/ProductEnum";


@Entity()
export class Product extends BaseEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({type: 'varchar', nullable: false})
    name: string;

    @Column({type: 'varchar',  nullable: false})
    type: TypeEnum;

    @CreateDateColumn()
    createdAt: 'string';

    @UpdateDateColumn()
    updatedAt: 'string';

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }

    constructor(obj?: any) {
        super();
        this.deserialize(obj);
    }

}