const { SlashCommandBuilder, MessageFlags } = require("discord.js");
const { modEmbed } = require("../../embeds/moderateurs")

module.exports = {
	data: new SlashCommandBuilder()
		.setName("moderateurs")
		.setDescription("Retourne une liste de touts les modérateurs"),
	async execute(interaction) {
		await interaction.reply({
			embeds: [modEmbed(interaction)],
			flags: MessageFlags.Ephemeral
		})
	}
} 
