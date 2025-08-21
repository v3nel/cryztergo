import { EmbedBuilder } from "discord.js";
import { DESCRIPTION_CHANNEL } from "../core/discordids.js";

function ServerEmbed(interaction) {
	const avatar = interaction.user.displayAvatarURL({ dynamic: true, size: 512,});
	return new EmbedBuilder()
		.setTitle("Informations sur le serveur")
		.setDescription(`👋 Bienvenue sur Cryztergo !👋\nPour découvrir l’univers et le fonctionnement du serveur,\n👉 Rendez vous dans le salon <#${DESCRIPTION_CHANNEL}>`)
		.setFooter({text: `Demandé par ${interaction.user.username}`, iconURL: avatar})
		.setColor('Blue');
}

export { ServerEmbed };
