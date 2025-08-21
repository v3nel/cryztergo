import { SlashCommandBuilder } from "discord.js";
import { defaultSanctionEmbed } from "../../embeds/sanctions.js";

function getSanction(user) {
	// ...existing code...
};

export default {
	data: new SlashCommandBuilder()
		.setName("sanctions")
		.setDescription("Récupérez les sanctions possibles")
		.addUserOption( option => 
			option.setName("utilisateur")
				.setDescription("Récupérez les sanctions attribuées a un utilisateur")
				.setRequired(false)
		),
	async execute(interaction) {
		const user = interaction.options.getUser("utilisateur");
		if ( !user ) {
			await interaction.reply({
				embeds: [defaultSanctionEmbed(interaction)]
			})
		}
	}
}
