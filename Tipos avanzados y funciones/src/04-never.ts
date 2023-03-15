// const withoutEnd = () => {
//   // ciclos infinitos
//   while (true) {
//     console.log('nunca para de aprender');
//   }
// };

const fail = (message: string) => {
  throw new Error(message);
};

const example = (input: unknown) => {
  if (typeof input === 'string') return 'es un string';
  else if (Array.isArray(input)) return 'es un array';
  return fail('not match');
};
// no hay typeof de array, se corrobora con isArray()
console.log(example('hola'));
console.log(example([1, 1, 1, 1]));
console.log(example(1212)); // detiene
console.log(example('Hola despues del fail'));
