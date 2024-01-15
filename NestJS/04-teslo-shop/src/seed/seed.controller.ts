import { Controller, Get } from '@nestjs/common';
import { SeedService } from './seed.service';
import { ApiTags } from '@nestjs/swagger';
// import { Auth } from 'src/auth/decorators';
// import { ValidRoles } from 'src/auth/entities';

@ApiTags('Seed')
@Controller('seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) {}

  @Get()
  // @Auth(ValidRoles.admin)
  async executeSeed() {
    return this.seedService.runSeed();
  }
}
