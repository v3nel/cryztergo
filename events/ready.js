const { Events } = require("discord.js")

module.exports = {
	name: Events.ClientReady,
	once: true,
	async execute(client) {
		console.log(`Ready! Logged in as ${client.user.username}`);

		const guild = client.guilds.cache.first();
		if (!guild) return console.error("Le serveur n'existe pas");

	}
}
