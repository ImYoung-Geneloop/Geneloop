
module.exports = async (client, interaction, args) => {
    var result = Math.ceil(Math.random() * 100);

    client.embed({
        title: `ð³ï¸âðã»Gay rate`,
        desc: `You are ${result}% gay!`,
        type: 'editreply'
    }, interaction)
}

 