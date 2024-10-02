const { readdirSync } = require("node:fs");

module.exports = {
  /** @param {import("../types/ExtendedClientInterface.d.ts").default} client */
  async loadEvents(client) {
    for (const subdirectory of readdirSync("./eventos")) {
      for (const filename of readdirSync(`./eventos/${subdirectory}`)) {
        const event = require(`../eventos/${subdirectory}/${filename}`);
        client.on(event.name, event.execute.bind(null, client));
      }
    }
  },
};
