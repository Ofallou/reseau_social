import {environment} from '../environments/environment'
export class Config {
  env= environment;
   PORT = process.env.PORT || 8080;
  public static  get SOCKET_HOST(): string {
    return 'http://localhost:PORT';
  }
}
