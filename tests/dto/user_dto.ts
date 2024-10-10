export class UserDTO {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    day: string;
    months: string;
    years: string;

  }

export class ADRESS {
    phone: string;
    company: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    additionalInformation: string;

}

export class ChangeUserDTO {
  currentPassword: string;
  newPassword: string;
  confirmationPassword: string;
}

export class ChangeAddress {
  newAddress: string;
  newPhone: string;
}
