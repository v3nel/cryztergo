const { SlashCommandBuilder, MessageFlags } = require("discord.js");
const { RuleEmbed } = require("../../embeds/regles");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("regles")
		.setDescription("Regarde les règles du serveur"),
	async execute(interaction) {
		await interaction.reply({
			embeds: [ RuleEmbed(interaction) ],
			flags: MessageFlags.Ephemeral,
		})
	},
}
