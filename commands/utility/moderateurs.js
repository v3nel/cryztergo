import { SlashCommandBuilder, MessageFlags } from "discord.js";
import { modEmbed } from "../../embeds/moderateurs.js";

export default {
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
