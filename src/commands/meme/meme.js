const Discord = require('discord.js');
const DIG = require("discord-image-generation");

module.exports = async (client, interaction, args) => {


    const avatar = interaction.user.displayAvatarURL({ dynamic: false, size: 1024, extension: 'png' });
    const userAvatar = member.displayAvatarURL({ dynamic: false, size: 1024, extension: 'png' });
    const image = await new DIG.Kiss().getImage(avatar, userAvatar);
    const embed = client.templateEmbed();
    embed.setImage('attachment://meme.png')
    interaction.editReply({ files: [attach], embeds: [embed] })
}

