const fs = require("node:fs");
const path = require("node:path");
const {Client, Events, GatewayIntentBits, Collection, MessageFlags} = require("discord.js");
const { discordToken } = require("./core/config");

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
		const command = require(fileP);
		if ('data' in command && 'execute' in command) {
			client.commands.set(command.data.name, command);
			console.log(`[INFO] La commande ${command.data.name} a bien été synchronisée`);
		} else {
			console.log(`[WARN] La commande ${fileP} n'a pas d'attribut 'data' ou 'execute'`);
		}
	}
};

const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
  const filePath = path.join(eventsPath, file);
  const event = require(filePath);
  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args, client));
  } else {
    client.on(event.name, (...args) => event.execute(...args, client));
  }
}

client.login(token);
