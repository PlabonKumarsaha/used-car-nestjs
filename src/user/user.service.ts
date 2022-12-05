import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  create(email: string, password: string) {
    const user = this.userRepo.create({ email, password });
    return this.userRepo.save(user);
  }
  findOne(id: number) {
    return this.userRepo.findOne({
      where: {
        id: id,
      },
    });
  }
  find(email: string) {
    return this.userRepo.find({
      where: {
        email,
      },
    });
  }
  async update(id: number, arrtibs: Partial<User>) {
    const user = await this.findOne(id);
    if (!user) {
      throw new Error('User not found');
    }
    Object.assign(user, arrtibs);
    return this.userRepo.save(user);
  }
  remove() {}
}
