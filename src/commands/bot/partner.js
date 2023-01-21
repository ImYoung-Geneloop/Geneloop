const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    let row = new Discord.ActionRowBuilder()
        .addComponents(
            new Discord.ButtonBuilder()
                .setLabel("Geneloop Official Partner - Fun Days")
                .setURL("https://discord.gg/AtDDjXgmME")
                .setStyle(Discord.ButtonStyle.Link),
        );

    client.embed({
        title: `${client.user.username}・Join Fun Days now!`,
        desc: '_____ \n\nClick the button below to join the server! \n**Its a good choice, please join!* \n ```Link Confirmation: Valid```**',
        thumbnail: client.user.avatarURL({ dynamic: true }),
        url: "https://discord.gg/AtDDjXgmME",
        components: [row],
        type: 'editreply'
    }, interaction)
}