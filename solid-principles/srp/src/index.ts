import Client from "./utils/Client";
import Notify from "./utils/Notify";

const client = new Client();
client.email = "email@teste.com";
const notify = new Notify(client);

notify.sendEmail();
