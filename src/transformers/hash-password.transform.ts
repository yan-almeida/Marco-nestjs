import { genSaltSync, hashSync } from 'bcryptjs';
import { TransformFnParams } from 'class-transformer';

export const HashPasswordTransform = (property: TransformFnParams) => {
  return hashSync(property.value, genSaltSync());
};
