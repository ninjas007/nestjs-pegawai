import { Injectable, HttpCode } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Employees } from './employees.entity';
import { InjectRepository } from '@nestjs/typeorm/dist';


@Injectable()
export class EmployeesService {
    constructor(@InjectRepository(Employees) private employeeRepository: Repository<Employees>) { }

    /*
    * Show all data
    *
    * return object
    */
    async all() {
        return await this.employeeRepository.find()
    }

    /*
    * store data
    */
    async createData(data) {
        const employee = await this.employeeRepository.create(data)
        await this.employeeRepository.save(employee);

        return {
            status: 200,
            message: 'Berhasil menambahkan data',
            data: employee
        }
   }

   /*
    * update data
    */
   async updateData(id, data) {
        await this.employeeRepository.update(id, data);
        // await this.employeeRepository.findOne({ where: {id} }); // ? for what

        return {
            status: 200,
            message: 'Berhasil mengupdate data',
            data: data
        }
    }


    /*
    * delete data
    */
   async deleteData(id) {
    await this.employeeRepository.delete(id);

    return {
        status: 200,
        message: 'Berhasil menghapus data',
        data: id
    }
}

}
