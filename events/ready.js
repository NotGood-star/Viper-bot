const { Events } = require('discord.js');

module.exports = {
    name: Events.ClientReady, // Best practice for v14+
    once: true,
    execute(client) {
        console.log(`Viper is online and logged in as ${client.user.tag}!`);
        
        // Optional: Set a status
        client.user.setActivity('/help', { type: 'LISTENING' });
    },
};
