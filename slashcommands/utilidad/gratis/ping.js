const CommandBuilder = require("../../../clases/CommandBuilder.js");
const { EmbedBuilder } = require("discord.js");

module.exports = new CommandBuilder({
  name: "ping",
  description: "Muestra mi latencia",

  async execute(client, interaction) {
    let ping = Date.now() - interaction.createdTimestamp;

    let embed = new EmbedBuilder()
      .setColor("Red")
      .setDescription(
        `🏓 \`|\` Pong!\n📨 \`|\` Mensajes: \`${ping}ms\`\n🛰️ \`|\` Ping DiscordAPI: \`${client.ws.ping}ms\``
      );

    interaction.reply({ embeds: [embed] });
  },
});
