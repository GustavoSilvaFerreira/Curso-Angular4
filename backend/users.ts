export class User {
  constructor(public email: string, public name: string, public password: string) {}

  matches(another: User): boolean {
    return another !== undefined && another.email === this.email && another.password === this.password;
  }
}

export const users: {[key: string]: User} = {
  "juliana@gmail.com": new User('juliana@gmail.com', 'Juliana', 'juliana23'),
  "fernanda@gmail.com": new User('fernanda@gmail.com', 'Fernanda', 'fernanda123'),
  "gustavo@gmail.com": new User('gustavo@gmail.com', 'Gustavo', 'gustavo123'),
}
