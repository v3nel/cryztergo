import { EmbedBuilder } from "discord.js";

 export function defaultSanctionEmbed(interaction) {
	const avatar = interaction.user.displayAvatarURL({ dynamic: true, size: 512,});
	return new EmbedBuilder()
		.setTitle("Sanctions")
		.setDescription("Voici les différentes sanctions qu'il est possible d'attribuer aux utilisateurs. \nAttention !! Toutes actions de modérateur sera logged dans un salon ainsi que dans une base de donnée")
		.addFields(
			{name: "/ban", value:"Banni un utilisateur du serveur"},
			{name: "/kick", value:"Kick un utilisateur du serveur"}
		)
		.setFooter({text:`Demandé par ${interaction.user.username}`, iconURL: avatar})
		.setColor("Blue");
}
