const { EmbedBuilder } = require("discord.js");
const { RULE_CHANNEL } = require("../core/discordids");

function RuleEmbed(interaction) {
	const avatar = interaction.user.displayAvatarURL({dynamic: true, size: 512,});
	return new EmbedBuilder()
		.setTitle("Règles")
		.setDescription(`🚧 Afin de jouer, il faut lire les règles\n👉 Les règles du serveur sont disponible ici : <#${RULE_CHANNEL}>`)
		.setColor("Blue")
		.setFooter({text: `Demandé par ${interaction.user.username}`, iconURL: avatar});
};

module.exports = { RuleEmbed };
