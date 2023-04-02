import { customAlphabet } from 'nanoid';

export const generateId = (size = 7) => {
  // Generates alphanum random id
  return customAlphabet('0123456789abcdefghijklmnopqrstuvwxyz@', size)();
};
