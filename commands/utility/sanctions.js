const { SlashCommandBuilder } = require("discord.js");
const { defaultSanctionEmbed } = require("../../embeds/sanctions")

function getSanction(user) {
	
};

module.exports = {
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
