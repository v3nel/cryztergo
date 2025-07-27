const { SlashCommandBuilder, MessageFlags } = require('discord.js');
const { deliveredSignalEmbed, staffSignalEmbed } = require("../../embeds/signaler");
const { STAFF_CHANNEL } = require("../../core/channelids")

module.exports = {
	data: new SlashCommandBuilder()
		.setName("signaler")
		.setDescription("Signaler un joueur qui pose problème")
		.addUserOption( option =>
			option.setName("joueur")
				.setDescription("La mention du joueur qui pose problème")
				.setRequired(true)
		)
		.addStringOption( option =>
			option.setName("raison")
				.setDescription("La raison du signalement (obligatoire)")
				.setRequired(true)
		),
	async execute(interaction) {
		const staffChannel = interaction.client.channels.cache.get(STAFF_CHANNEL);
		
		await staffChannel.send({
			embeds: [staffSignalEmbed(interaction)],
		})

		await interaction.reply({
			embeds: [deliveredSignalEmbed(interaction)],
			flags: MessageFlags.Ephemeral,
		});

	},
}
