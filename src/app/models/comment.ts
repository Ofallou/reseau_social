export class Comment {
  title: String;
 author: String;
 content: String;
 date: Date;
 authorId: String;
 authorPicture: String;
 explicit: boolean;


  constructor(comment: any) {
    this.title = comment.title;
    this.author = comment.author;
    this.content = comment.content;
    this.date = new Date();
    this.authorId = comment.authorId;
    this.authorPicture = comment.authorPicture;
    this.explicit = false;

  }
}
