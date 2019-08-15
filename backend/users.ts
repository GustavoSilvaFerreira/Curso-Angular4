export class User {
  constructor(public email: string, public name: string, public password: string) {}

  matches(another: User): boolean {
    return another !== undefined && another.email === this.email && another.password === this.password;
  }
}

export const users: {[key: string]: User} = {
  "fernanda@gmail.com": new User('fernanda@gmail.com', 'Fernanda', 'fernanda123'),
  "gustavo@gmail.com": new User('gustavo@gmail.com', 'Gustavo', 'gustavo123')
}
