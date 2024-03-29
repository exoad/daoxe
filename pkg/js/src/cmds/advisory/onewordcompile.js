// Software created by Jack Meng (AKA exoad). Licensed by the included "LICENSE" file. If this file is not found, the project is fully copyrighted.
// @ts-nocheck
// @ts-ignore
const { EmbedBuilder, AttachmentBuilder } = require("discord.js");

// @ts-ignore
const fx_message = require("../../fx_Messages.js");
// @ts-ignore
const fx = require("../../fx.js");
const { fetchAllMessages } = require("../../fx_BotGeneric.js");

module.exports = {
  config: {
    name: "oneword_compile",
    category: "Advisory",
    description: "",
    usage: "",
    aliases: [`fetchmsgchnl`],
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
    msg.channel.send("querying...\nthis can take some time").then(async (m) => {
      let channel_id = "1090758966029590679";
      try {
        let e = await fetchAllMessages(bot, channel_id);
        let fin = "";
        let chars_curr = 0;
        let line_width = 0;
        const max_line_width_char = 100;
        e.forEach((x) => {
          x = x.toString();
          const words = x.split(" ");
          for (let i = 0; i < words.length; i++)
            chars_curr += words[i].length + 1;
        });
        if (chars_curr >= 1984) {
          e.forEach((x) => {
            x = x.toString();
            const words = x.split(" ");
            for (let i = 0; i < words.length; i++) {
              if (line_width + words[i].length > max_line_width_char) {
                fin += "\n";
                line_width = 0;
              }
              fin += words[i] + " ";
              line_width += words[i].length + 1;
            }
          });
          bot.channels.cache.get(config.channels.advisory_channel).send({
            files: [
              new AttachmentBuilder(Buffer.from(fin)).setName(
                "fetched_" + channel_id + ".txt"
              ),
            ],
          });
        } else {
          e.forEach((x) => {
            fin += x.toString() + " ";
          });
          const embed = fx
            .embed()
            .setDescription("```\n" + fin + "```")
            .setFooter({ text: "that was intense?!" });
          bot.channels.cache
            .get(config.channels.advisory_channel)
            .send({ embeds: [embed] });
        }
        bot.channels.cache
          .get(config.channels.advisory_channel)
          .send(
            "**hoi!**\na newer compilation of the one-word-stories exotic channel has been made. check it out above " +
              config.emojis.dumb_look
          );
        m.edit(
          config.emojis.happy_look + " yay!\nmanaged to process all of that!"
        );
      } catch (err) {
        if (err) {
          console.error(err);
          msg.channel.send("something went horribly wrong\ncheck the console");
        }
      }
    });
  },
};
