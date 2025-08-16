import { EmbedBuilder } from "discord.js";

export function NewTicket(interaction, raison) {
	const avatar = interaction.user.displayAvatarURL({dynamic: true, size: 512});
	return new EmbedBuilder()
		.setTitle("Ticket")
		.setDescription("Ce ticket a été créé pour que tu puisses discuter de ton problème avec le staff de Cryztergo.")
		.addFields(
			{name: "Raison du ticket", value: raison}
		)
		.setFooter({iconURL: avatar, text:`Demandé par ${interaction.user.username}`})
		.setColor("Blue")
};

export function TicketSent(interaction, channel) {
	const avatar = interaction.user.displayAvatarURL({dynamic: true, size: 512});
	return new EmbedBuilder()
		.setTitle("Ticket envoyé")
		.setDescription(`Ton ticket a été créé avec succès !!\nLe staff a aussi été notifié de la création du ticket\nTu peux accéder a ce dernier ici: ${channel}`)
		.setFooter({text: `Demandé par ${interaction.user.username}`, iconURL: avatar})
}


export function StaffTicketEmbed(interaction, channel, raison) {
	const date = interaction.createdAt;
	const avatar = interaction.user.displayAvatarURL({dynamic:true, size: 512});
	return new EmbedBuilder()
		.setTitle("Nouveau ticket")
		.setDescription("Attention a tout le staff,\nUn nouveau ticket a été créé")	
		.addFields(
			{name: `Créé par:`, value: `${interaction.user}`},
			{name: `Raison`, value: `${raison}`},
			{name: `Créé le`, value: `${date}`},
			{name: `Lien vers le ticket :`, value: `${channel}`}
		)
		.setFooter({text: `Demandé par ${interaction.user.username}`, iconURL: avatar})
		.setColor("Blue")
}
