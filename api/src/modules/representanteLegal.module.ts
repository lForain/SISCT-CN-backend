import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RepresentanteLegal } from '../entities/RepresentanteLegal.entity';
import { RepresentanteLegalService } from '../services/representanteLegal.service';
import { RepresentanteLegalController } from '../controllers/representanteLegal.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([RepresentanteLegal]),
  ],
  controllers: [RepresentanteLegalController],
  providers: [RepresentanteLegalService],
  exports: [RepresentanteLegalService],
})
export class RepresentanteLegalModule {}
