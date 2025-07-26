const { SlashCommandBuilder, MessageFlags } = require("discord.js");
const { ServerEmbed } = require("../../embeds/serveur.js")

module.exports = {
	data: new SlashCommandBuilder()
		.setName("serveur")
		.setDescription("Découvrez le but du serveur Cryztergo"),
	async execute(interaction) {
		await interaction.reply({
			embeds: [ ServerEmbed(interaction) ],
			flags: MessageFlags.Ephemeral,
		})
	},
};
