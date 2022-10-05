import { Module } from '@nestjs/common';
import { EmployeesController } from './employees.controller';
import { EmployeesService } from './employees.service';
import { Employees } from './employees.entity';
import { TypeOrmModule } from '@nestjs/typeorm/dist';

@Module({
  imports: [TypeOrmModule.forFeature([Employees])],
  controllers: [EmployeesController],
  providers: [EmployeesService]
})
export class EmployeesModule {}
