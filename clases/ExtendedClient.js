const { Client, Collection } = require("discord.js");
/** @typedef {import('../types/ExtendedClientInterface.d.ts').default} ExtendedClientInterface */

/** @implements {ExtendedClientInterface} */
class ExtendedClient extends Client {
  /** @type {Collection<string, import('../types/ExtendedSlashCommand.d.ts').default>} */
  slashCommands = new Collection();
  /** @type {import('../types/ClientColorProperty.d.ts').default} */
  color = (...args) => ({
    red: `\x1b[31m${args.join(" ")}\x1b[0m`,
    yellow: `\x1b[33m${args.join(" ")}\x1b[0m`,
    magenta: `\x1b[35m${args.join(" ")}\x1b[0m`,
    cyan: `\x1b[36m${args.join(" ")}\x1b[0m`,
    green: `\x1b[32m${args.join(" ")}\x1b[0m`,
  });
  /** @param {import('discord.js').ClientOptions} options */
  constructor(options) {
    super(options);
  }
}

module.exports = ExtendedClient;
