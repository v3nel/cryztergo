import { EmbedBuilder } from "discord.js";

export function modEmbed(interaction) {
	const avatar = interaction.user.displayAvatarURL({dynamic: true, size: 512});
	return new EmbedBuilder()
		.setTitle("Modérateurs")
		.setDescription("Voici ci dessous une liste des modérateurs")
		.addFields(
			{name:"Liste", value: "WIP pour une liste dynamique des modérateurs"}
		)
		.setFooter({text: `Demandé par ${interaction.user.username}`, iconURL: avatar})
		.setColor('Blue')
}
