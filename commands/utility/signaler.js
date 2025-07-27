const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName("signaler")
		.setDescription("Signaler un joueur qui pose problème")
		.addUserOption( option =>
			option.setName("joueur")
				.setDescription("La mention du joueur qui pose problème")
				.setRequired(true)
		)
		.addStringOption( option =>
			option.setName("raison")
				.setDescription("La raison du signalement (obligatoire)")
				.setRequired(true)
		),
	async execute(interaction) {
		const joueur = interaction.options.getUser("joueur");
		const reason = interaction.options.getString("raison");

		await interaction.reply(`Tu as signalé ${joueur} pour la raison : ${reason}`)
	},
}
