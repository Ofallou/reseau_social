export class User {
  static _id(arg0: any): any {
    throw new Error("Method not implemented.");
  }
  
   first_name: String;
   last_name: String;
   pseudo: String;
   email: String;
   dateNaissance: Date;
    gender: String;
    password: String;
    roleAdmin: Boolean;
    picture:String;
    friendList:Array<String>;

  constructor(user: any) {
  
    this.first_name = user.first_name;
    this.last_name = user.last_name;
    this.pseudo = user.pseudo;
    this.email = user.last_name;
    this.dateNaissance = user.dateNaissance;
    this.password = user.password;
    this.gender = user.gender;
    this.roleAdmin = false;
    this.picture =user.picture;
    this.friendList = user.friendsList;

  }
}
