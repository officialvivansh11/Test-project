const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async message => {
    if (message.author.bot) return;

    if (message.content === '!ping') {
        message.reply(`Pong! Latency is ${Date.now() - message.createdTimestamp}ms.`);
    }

    if (message.content === '!serverinfo') {
        const embed = new EmbedBuilder()
            .setTitle('Server Information Hub')
            .setDescription('Manage and check community resources easily.')
            .setColor(0x00AE86)
            .addFields(
                { name: 'Status', value: 'Online', inline: true },
                { name: 'Version', value: '1.20.x', inline: true }
            )
            .setTimestamp();
        
        message.channel.send({ embeds: [embed] });
    }
});

client.login(process.env.DISCORD_BOT_TOKEN);
