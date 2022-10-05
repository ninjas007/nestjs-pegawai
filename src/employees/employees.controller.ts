import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeesDto } from './employees.dto';

@Controller('employees')
export class EmployeesController {
    constructor(private EmployeesService: EmployeesService) { }

    /*
    * Show all data
    */
    @Get()
    showAll() {
        return this.EmployeesService.all();
    }

    /*
     * save data
    */
    @Post()
    createData(@Body() data) {
        return this.EmployeesService.createData(data)
    }
    
    /*
     * update data
    */
    @Put(':id')
    updateData(@Param('id')id, @Body() data) {
        return this.EmployeesService.updateData(id, data)
    }

    /*
    * Remove data
    */
    @Delete(':id')
    deleteData(@Param('id') id) {
        return this.EmployeesService.deleteData(id);
    }
}
