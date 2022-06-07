const Discord = require('discord.js');

const chkn_gifs = [
    "https://i.imgur.com/bT3BWPZb.jpg",
];

module.exports = {
    name: 'chicken',
    description: 'Send a chicken',
    async execute(interaction) {
        const chkn_img = chkn_gifs(Math.floor(Math.random() * chkn_gifs.length));
        const chkn_embed = new Discord.MessageEmbed()
            .setTitle(":smiley: Be happy like this chkn")
            .setColor("#e0c200")
            .setDescription('')
            .setFooter({ text: "Chkn courtesy of ${interaction.client.user.username}!", iconURL: interaction.client.user.displayAvatarURL() })
            .setImage(chkn_img);

        interaction.reply({ embeds: chkn_embed });
    }
}