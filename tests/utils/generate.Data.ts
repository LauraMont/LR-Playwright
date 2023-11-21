import { faker } from '@faker-js/faker';

/* Datos de usuario */
export const nombreRandom = () => faker.person.firstName();
export const apellidoRandom = () => faker.person.lastName();
export const telefono = () => faker.phone.number();

/* Algoritmos de numeros*/
export const randomNumberByRange = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
