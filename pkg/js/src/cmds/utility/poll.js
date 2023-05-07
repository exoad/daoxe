// Software created by Jack Meng (AKA exoad). Licensed by the included "LICENSE" file. If this file is not found, the project is fully copyrighted.

// @ts-ignore
const { EmbedBuilder } = require("discord.js");

// @ts-ignore
const fx_message = require("../../fx_Messages.js");
// @ts-ignore
const fx = require("../../fx.js");

module.exports = {
  config: {
    name: "poll",
    category: "Utility",
    description: "Creates a poll",
    usage: "",
    aliases: [`create_poll`],
  },
  run: async (
    // @ts-ignore
    /** @type {{ commands: any[]; }} */ bot,
    /** @type {{ channel: { send: (arg0: { embeds: EmbedBuilder[]; }) => void; }; }} */ msg,
    // @ts-ignore
    /** @type {any} */ args,
    // @ts-ignore
    /** @type {any} */ config,
    // @ts-ignore
    /** @type {any} */ bot_db
  ) => {
    // @ts-ignore
    // @ts-ignore
    msg.channel.send(fx_message.search_message()).then(async (m) => {
    });
  },
};
