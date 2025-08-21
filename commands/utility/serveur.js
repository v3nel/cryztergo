import { SlashCommandBuilder, MessageFlags } from "discord.js";
import { ServerEmbed } from "../../embeds/serveur.js";

export default {
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
