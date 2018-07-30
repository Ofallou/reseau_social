export class User {
  static _id(arg0: any): any {
    throw new Error("Method not implemented.");
  }
   _id:String;
   first_name: String;
   last_name: String;
   pseudo: String;
   email: String;
   dateNaissance: Date;
    gender: String;
    password: String;
    admin: Boolean;
    picture:String;
  friendsList:Array<any>;
    online:Boolean

  constructor(user: any) {
   this._id= user._id;
    this.first_name = user.first_name;
    this.last_name = user.last_name;
    this.pseudo = user.pseudo;
    this.email = user.last_name;
    this.dateNaissance = user.dateNaissance;
    this.password = user.password;
    this.gender = user.gender;
    this.admin = user.admin= false;
    this.picture =user.picture;
    this.friendsList = user.friendsList;
    this.online = user.online;

  }
}
