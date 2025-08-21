import { SlashCommandBuilder, MessageFlags } from "discord.js";
import { UpdateEmbed } from "../../embeds/maj.js";

export default {
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
