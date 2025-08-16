const { EmbedBuilder } = require("discord.js");

function deliveredSignalEmbed(interaction) {
	const avatar = interaction.user.displayAvatarURL({dynamic: true, size: 512});
	return new EmbedBuilder()
		.setTitle("✅ Votre signalement a été envoyé")
		.setDescription(`Nous allons discuter de ton signalement envers ${interaction.options.getUser("joueur")} avec le staff`)
		.setFooter({ text: `Demandé par ${interaction.user.username}`, iconURL: avatar})
};

function staffSignalEmbed(interaction) {
	const date = interaction.createdAt;

	const day = date.getDate().toString().padStart(2, '0');
	const month = (date.getMonth() + 1).toString().padStart(2, "0");
	const year = date.getFullYear();

	const hour = date.getHour().toString().padStart(2, "0");
	const minute = date.getMinutes().toString().padStart(2, "0");
	const second = date.getSeconds().toString().padStart(2, "0");

	const format = `${day}/${month}/${year} ${hour}:${minute}:${second}`;
	return new EmbedBuilder()
		.setTitle("⚠️Nouveau signalement reçu⚠️")
		.setDescription(`Déliveré par : ${interaction.user}\nConcernant: ${interaction.options.getUser("joueur")}\nRaison: ${interaction.options.getString("raison")}\nEffectué a : ${format}`)
		.setColor("Yellow")
};

module.exports = { staffSignalEmbed, deliveredSignalEmbed }
