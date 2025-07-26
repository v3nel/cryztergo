const { EmbedBuilder } = require("discord.js");
const { rulecID } = require("../core/config");

function RuleEmbed(interaction) {
	const avatar = interaction.user.displayAvatarURL({dynamic: true, size: 512,});
	return new EmbedBuilder()
		.setTitle("Règles")
		.setDescription(`🚧 Afin de jouer, il faut lire les règles\n👉 Les règles du serveur sont disponible ici : <#${rulecID}>`)
		.setColor("Blue")
		.setFooter({text: `Demandé par ${interaction.user.username}`, iconURL: avatar});
};

module.exports = { RuleEmbed };
