export class User {
    id: number = 0;
    username: string = '';
    email: string = '';
    password: string = '';
    favedMovies: number[] = [];
  
    constructor(id?: number, username?: string, email?: string, password?: string) {
      if (id) this.id = id;
      if (username) this.username = username;
      if (email) this.email = email;
      if (password) this.password = password;
    }
  }