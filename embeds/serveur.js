const { EmbedBuilder } = require("discord.js");
const { descriptioncID } = require("../core/config");

function ServerEmbed(interaction) {
	const avatar = interaction.user.displayAvatarURL({ dynamic: true, size: 512,});
	return new EmbedBuilder()
		.setTitle("Informations sur le serveur")
		.setDescription(`👋 Bienvenue sur Cryztergo !👋\nPour découvrir l’univers et le fonctionnement du serveur,\n👉 Rendez vous dans le salon <#${descriptioncID}>`)
		.setFooter({text: `Demandé par ${interaction.user.username}`, iconURL: avatar})
		.setColor('Blue');
}

module.exports = { ServerEmbed };
