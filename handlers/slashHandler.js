const { readdirSync } = require("node:fs");

module.exports = {
  /** @param {import("../types/ExtendedClientInterface.d.ts").default} client */
  async loadSlash(client) {
    for (const category of readdirSync("./slashcommands")) {
      for (const otherCategory of readdirSync(`./slashcommands/${category}`)) {
        for (const fileName of readdirSync(
          `./slashcommands/${category}/${otherCategory}`
        ).filter((file) => file.endsWith(".js"))) {
          /** @type {import('../types/ExtendedSlashCommand.d.ts').default} */
          const command = require(`../slashcommands/${category}/${otherCategory}/${fileName}`);
          client.slashCommands.set(command.name, command);
        }
      }
    }

    await client.application?.commands.set(client.slashCommands.map((x) => x));
  },
};
