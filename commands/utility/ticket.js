const {SlashCommandBuilder, MessageFlags} = require("discord.js");
const { TICKET_CATEGORY, ARCHIVEDTICKET_CATEGORY, STAFF_CHANNEL } = require("../../core/discordids")
const { NewTicket, TicketSent, StaffTicketEmbed } = require("../../embeds/ticket");

async function nameChannel(interaction) {
	const username = interaction.user.username.toLowerCase();
	const characters = 'abcdefghijklmnopqrstuvwxyz';
	let gen = '';
	for (let i = 0; i < 5; i++) {
		const randomIndex = Math.floor(Math.random() * characters.length);
		gen += characters[randomIndex];
	}
	return `ticket-${username}-${gen}`
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName("ticket")
		.setDescription("Crée un ticket afin de discuter d'une problématique avec les modérateurs")
		.addStringOption( option =>
			option.setName("raison")
				.setDescription("Pour quelle raison souhaites-tu créer un ticket ?")
				.setRequired(true)
		),
	async execute(interaction) {
		const raison = interaction.options.getString("raison");
		const guild = interaction.guild;
		if (!guild) return console.log("La guild n'a pas été trouvé");
		const name_channel = await nameChannel(interaction);
		const staff = interaction.client.channels.cache.get(STAFF_CHANNEL);

		try {
			const ticket_channel = await guild.channels.create({
				name: name_channel,
				type: 0,
				parent: TICKET_CATEGORY,
			});
			await interaction.reply({
				embeds: [ TicketSent(interaction, ticket_channel) ],
				flags: MessageFlags.Ephemeral
			})
			await ticket_channel.send({
				embeds: [ NewTicket(interaction, raison) ]
			})
			await staff.send({
				embeds: [ StaffTicketEmbed(interaction, ticket_channel, raison)]
			})
		} catch(e) {
			await interaction.reply (`Il y a eu une erreur pendant la création du salon du ticket: ${e}`);
			console.error(e);
		}
	}
}
