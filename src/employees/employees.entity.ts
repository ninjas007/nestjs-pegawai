import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Employees {
    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    full_name: string

    @Column()
    email: string

    @Column()
    phone_number: string

    @Column()
    is_status: boolean
}

