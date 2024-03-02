import { CreateMediaQueryInput } from './create-media-query.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateMediaQueryInput extends PartialType(CreateMediaQueryInput) {
  id: number;
}
