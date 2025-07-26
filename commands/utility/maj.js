const { SlashCommandBuilder, MessageFlags } = require("discord.js");
const { UpdateEmbed } = require("../../embeds/maj");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("updates")
		.setDescription("Voir les patchnotes du serveur"),
	async execute(interaction) {
		await interaction.reply({
			embeds: [ UpdateEmbed(interaction) ],
			flags: MessageFlags.Ephemeral,
		});
	},
}
