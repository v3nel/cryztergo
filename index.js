import { fileURLToPath } from 'url';
import { pathToFileURL } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import fs from "node:fs";
import path from "node:path";
import {Client, Events, GatewayIntentBits, Collection, MessageFlags} from "discord.js";
import { discordToken } from "./core/config.js";

const token = discordToken;

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });

client.commands = new Collection();

const foldersP = path.join(__dirname, 'commands');
const commandsF = fs.readdirSync(foldersP);

for (const folder of commandsF) {
	const commandsP = path.join(foldersP, folder);
	const commandFi = fs.readdirSync(commandsP).filter(file => file.endsWith(".js"));
	for (const file of commandFi) {
		const fileP = path.join(commandsP, file);
		const command = await import(pathToFileURL(fileP).href);
		const cmd = command.default || command;
		if ('data' in cmd && 'execute' in cmd) {
			client.commands.set(cmd.data.name, cmd);
			console.log(`[INFO] La commande ${cmd.data.name} a bien été synchronisée`);
		} else {
			console.log(`[WARN] La commande ${fileP} n'a pas d'attribut 'data' ou 'execute'`);
		}
	}
};

const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
  const filePath = path.join(eventsPath, file);
	const eventModule = await import(pathToFileURL(filePath).href);
   const event = eventModule.default || eventModule;
  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args, client));
  } else {
    client.on(event.name, (...args) => event.execute(...args, client));
  }
}

client.login(token);
