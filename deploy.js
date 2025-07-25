// Ce script est obligatoire afin d'envoyer les commandes a Discord et de les
// rendre accessible pour les utilisateurs
//

const { REST, Routes } = require('discord.js');
const dotenv = require('dotenv');
const fs = require('node:fs');
const path = require('node:path');

//Chargement des variebles : token et application_id pour déployer les nouveles commandes
dotenv.config();
const token = process.env.DISCORD_TOKEN;
const clientId = process.env.CLIENTID;

// Récupération des commandes
const commands = [];
const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {

	const commandsPath = path.join(foldersPath, folder);
	const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		const command = require(filePath);
		if ('data' in command && 'execute' in command) {
			commands.push(command.data.toJSON());
		} else {
			console.log(`[ATTENTION] La commande présente dans ${filePath} n'a pas de propriété 'data' ou 'execute'`);
		}
	}
}
// Fin de la récupération des commandFolders

// Début de la syncronisation avec Discord
const rest = new REST().setToken(token);

(async () => {
	try {
		console.log(`[INFO] Début de la synchronisation de ${data.length} / commandes`);

			const data = await rest.put(
			Routes.applicationCommands(clientId),
			{ body: commands },
		);

		console.log(`[INFO] La synchronisation de ${data.length} / commande s'est terminée avec succes`);
	} catch (error) {
		console.error(error);
	}
})();
//Fin du script et de la synchronisation

