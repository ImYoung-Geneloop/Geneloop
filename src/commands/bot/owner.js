const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    client.embed({
        title: `📘・Owner information`,
        desc: `____________________________`,
        thumbnail: client.user.avatarURL({ dynamic: true, size: 1024 }),
        fields: [{
            name: "👑┆Owners name",
            value: `Young | .BRKT `,
            inline: true,
        },
        {
            name: "🏷┆Discord tag",
            value: `Young#0011 | .BRKT#3696`,
            inline: true,
        },
        {
            name: "🏢┆Organization",
            value: `City Developments`,
            inline: true,
        },
        {
            name: "🌐┆Website",
            value: `[Coming Soon](https://google.com)`,
            inline: true,
        }],
        type: 'editreply'
    }, interaction)
}

 