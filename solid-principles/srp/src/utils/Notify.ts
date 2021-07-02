import Client from "./Client";

export default class Notify {
  constructor(private client: Client) {}

  sendEmail(): void {
    console.log("Email enviado para:", this.client.email);
  }
}
