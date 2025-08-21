import { EmbedBuilder } from "discord.js";
import { UPDATES_CHANNEL } from "../core/discordids.js";

function UpdateEmbed(interaction) {
	const avatar = interaction.user.displayAvatarURL({ dynamic: true, size: 512 });
	return new EmbedBuilder()
		.setTitle("Mises a jour")
		.setDescription(`🏗️ Tu veux voir ce qui change entre les versions ?\n👉 Va les voir dans le salon : <#${UPDATES_CHANNEL}>`)
		.setFooter({ text: `Demandé par ${interaction.user.username}`, iconURL: avatar})
		.setColor("Blue")
};

export { UpdateEmbed };
