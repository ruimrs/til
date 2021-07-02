export default class Client {
  email: string;

  create(): void {}

  read(): void {}

  update(): void {}

  delete(): void {}

  // Esta função deve estar noutra classe, pois não é da responsabilidade do Client, assim garantimos que a classe Client apenas tem 1 responsabilidade -> CRUD // para manutenção e uso é muito melhor
  // sendEmail(): boolean {
  //     return true;
  // }
}
