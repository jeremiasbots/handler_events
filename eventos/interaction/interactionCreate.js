const EventBuilder = require("../../clases/EventBuilder.js");

module.exports = new EventBuilder({
  name: "interactionCreate",
  async execute(client, interaction) {
    if (!interaction.isCommand()) return;
    const cmd = client.slashCommands.get(interaction.commandName);
    if (!cmd) return;

    const args = [];
    for (let option of interaction.options.data) {
      if (option.type === 1) {
        if (option.name) args.push(option.name);
        option.options?.forEach((x) => {
          if (x.value) args.push(x.value);
        });
      } else if (option.value) args.push(option.value);
    }
    cmd.execute(client, interaction, args);
  },
});
