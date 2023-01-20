const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    let row = new Discord.ActionRowBuilder()
        .addComponents(
            new Discord.ButtonBuilder()
                .setLabel("Geneloop Server Invite")
                .setURL("https://discord.gg/PJWN8vPdPe")
                .setStyle(Discord.ButtonStyle.Link),
        );

    client.embed({
        title: `${client.user.username}・Apply for the Geneloop Team`,
        desc: '_____ \n\nClick the button below for the application page \n**Pay attention! answers are required* \n ```Application Status: Active```**',
        thumbnail: client.user.avatarURL({ dynamic: true }),
        url: "https://forms.gle/KQwAoGcWtxF3kKQz5",
        components: [row],
        type: 'editreply'
    }, interaction)
}