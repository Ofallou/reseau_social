export class Config {

  URL = "http://localhost"
  public static  get SOCKET_HOST(): string {
    return "http://localhost || https://dry-fortress-71234.herokuapp.com" 
  }


/*   URL = "localhost"
  public static  get SOCKET_HOST(): string {
    return "http://localhost:5000" || 'https://dry-fortress-71234.herokuapp.com';
  } */
}
