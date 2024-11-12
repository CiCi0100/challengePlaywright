import { faker } from '@faker-js/faker';
import fs from 'fs';
import path from 'path';

export function generateUser() {
  const user = {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      day: String(faker.number.int({ min: 1, max: 28 })),
      months: String(faker.number.int({ min: 1, max: 12 })),
      years: String(faker.number.int({ min: 1980, max: 2010 })),
      title: faker.person.prefix(),
      newPassword: faker.internet.password(),
      confirmationPassword: faker.internet.password(),
      phone: `(98) ${faker.string.numeric(4)}-${faker.string.numeric(4)}`,
      mobilePhone: `(98) ${faker.string.numeric(4)}-${faker.string.numeric(4)}`,
      company: faker.company.name(),
      address: faker.location.streetAddress(),
      city: faker.location.city(),
      state: faker.location.state(),
      zip: generateZipCode(),
      additionalInformation: faker.lorem.paragraph(),
      newAddress: faker.location.streetAddress(),
      newPhone:`(98) ${faker.string.numeric(4)}-${faker.string.numeric(4)}`,
  };
  return user;
}

function generateZipCode(): string {
  const min = 10000;
  const max = 99999;
  return Math.floor(Math.random() * (max - min + 1) + min).toString();
}

export function saveUser(user: Record<string, any>) {
  const date = new Date();
  const formattedDate = date.toISOString().split('T')[0]; 

  const dir = path.join(__dirname, 'users');
  
  if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
  }

  const filePath = path.join(dir, `${formattedDate}.json`); 

  fs.writeFileSync(filePath, JSON.stringify(user, null, 2), 'utf-8');
  console.log(`Usuário salvo em: ${filePath}`);
}

export function loadUserFromFile() {
  const date = new Date();
  const formattedDate = date.toISOString().split('T')[0];
  const filePath = path.join(__dirname, 'users', `${formattedDate}.json`);

  if (!fs.existsSync(filePath)) {
    throw new Error(`O arquivo para a data ${formattedDate} não foi encontrado.`);
  }

  const userData = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(userData);
}