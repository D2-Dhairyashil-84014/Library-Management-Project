import { createParamDecorator } from '@nestjs/common';

export const GetLibrarian = createParamDecorator((data, obj) => {
  if (obj.args.length > 0) {
    const request = obj.args[2].req;
    return request.librarian;
  }

  return null;
});
