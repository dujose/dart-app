export class UserViewModel {

  id: number;
  username: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;

  constructor(data: any) {

    this.id = data.id;
    this.username = data.username;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.gender = data.gender;
    this.image = data.image;
    this.token = data.token;

  }
}