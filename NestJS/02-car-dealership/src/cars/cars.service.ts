import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Car } from './interfaces/cars.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uuid(),
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: uuid(),
      brand: 'Honda',
      model: 'Civic',
    },
    {
      id: uuid(),
      brand: 'Jeep',
      model: 'Cheroke',
    },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {
    const car = this.cars.find((item) => item.id === id);

    if (!car) throw new NotFoundException(`Car with id '${id}' not found`);

    return car;
  }

  create(createCarDto: CreateCarDto) {
    const newCar = {
      id: uuid(),
      ...createCarDto,
    };
    this.cars.push(newCar);
    return newCar;
  }

  update(id: string, updateCarDto: UpdateCarDto) {
    let carDb = this.findOneById(id);

    if (updateCarDto.id && updateCarDto.id !== id)
      throw new BadRequestException('Car id is not valid');

    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        carDb = { ...carDb, ...updateCarDto, id };
        return carDb;
      }
      return car;
    });
    return carDb;
  }

  delete(id: string) {
    this.findOneById(id);
    this.cars = this.cars.filter((car) => car.id !== id);
  }
}
