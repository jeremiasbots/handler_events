import type { Client, Collection } from "discord.js";
import type ExtendedSlashCommand from "./ExtendedSlashCommand";
import type ClientColorProperty from "./ClientColorProperty";

type ExtendedClientInterface = {
  slashCommands: Collection<string, ExtendedSlashCommand>;
  color: ClientColorProperty;
} & Client;

export default ExtendedClientInterface;
