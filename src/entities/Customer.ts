import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from 'typeorm';

import {DocTypeEnum} from "../enums/CustomerEnum";


@Entity()
export class Customer extends BaseEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({type: 'varchar', nullable: false})
    docType: DocTypeEnum;

    @Column({type: 'varchar', length:9,  nullable: false})
    docNum: string;

    @Column({type: 'varchar', length:36,  nullable: false})
    email: string;

    @Column({type: 'varchar', length:36,  nullable: false})
    givenName: string;

    @Column({type: 'varchar', length:36,  nullable: false})
    familyName1: string;

    @Column({type: 'varchar', length:36,  nullable: true})
    familyName2: string;

    @Column({type: 'varchar', length:9,  nullable: false})
    phone: number;

    // @OneToMany(type => UserBadge, userBadge => userBadge.badge)
    // userBadges: UserBadge[];

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