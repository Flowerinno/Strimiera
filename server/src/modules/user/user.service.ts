import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { AuthService } from '../auth/auth.service';
import { Response } from 'express';

@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService,
    private auth: AuthService,
  ) {}

  async create(createUserInput: CreateUserInput) {
    try {
      const existingUser = await this.prisma.user.findUnique({
        where: {
          email: createUserInput.email,
        },
      });

      if (existingUser) {
        return { message: 'User already exists' };
      }

      const hashed = await bcrypt.hash(createUserInput.password, 10);

      const user = await this.prisma.user.create({
        data: {
          ...createUserInput,
          password: hashed,
        },
      });

      const token = await this.auth.generateToken({
        email: user.email,
        id: user.id.toString(),
      });

      if (!user) throw new Error('User not created');

      return {
        ...user,
        token,
      };
    } catch (error) {
      return { message: error?.message };
    }
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  async findOne(id: number) {
    const user = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (!user) {
      return { message: 'User not found' };
    }

    return {
      name: user.name,
      email: user.email,
      id: user.id,
    };
  }

  async update(id: number, updateUserInput: UpdateUserInput) {
    try {
      const updatedUser = await this.prisma.user.update({
        where: {
          id,
        },
        data: {
          ...updateUserInput,
        },
      });

      if (!updatedUser) throw new Error('User not updated');

      return { message: 'User updated' };
    } catch (error) {
      return { message: error?.message };
    }
  }

  async remove(id: number) {
    try {
      const deletedUser = await this.prisma.user.delete({
        where: {
          id,
        },
      });

      if (!deletedUser) throw new Error('No user with such ID.');

      return { message: 'User deleted', id: deletedUser.id };
    } catch (error) {
      return { message: 'Failed to remove the user.' };
    }
  }
}
