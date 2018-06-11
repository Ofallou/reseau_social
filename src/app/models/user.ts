export class User {
   first_name: String;
   last_name: String;
   pseudo: String;
   email: String;
    gender: String;
    password: String;
    roleAdmin: Boolean

  constructor(user: any) {
    this.first_name = user.first_name;
    this.last_name = user.last_name;
    this.pseudo = user.pseudo;
    this.email = user.last_name;
    this.password = user.password;
    this.gender = user.gender;
    this.roleAdmin = false;

  }
}
