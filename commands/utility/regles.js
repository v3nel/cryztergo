import { SlashCommandBuilder, MessageFlags } from "discord.js";
import { RuleEmbed } from "../../embeds/regles.js";

export default {
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
