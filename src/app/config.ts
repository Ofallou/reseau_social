export class Config {
  public static  get SOCKET_HOST(): string {
    return 'http://localhost:5000' || 'https://dry-fortress-71234.herokuapp.com';
  }
}
