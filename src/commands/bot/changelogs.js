const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    client.embed({
        title: "📃・Changelogs",
        desc: `_____`,
        thumbnail: client.user.avatarURL({ size: 1024 }),
        fields: [{
            name: "📃┆Changelogs",
                value: '01/19/2023 - Better error handling for commands (.js v14) ',
                inline: false,
            },
        ],
        type: 'editreply'
    }, interaction)
}

 