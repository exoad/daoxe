// Software created by Jack Meng (AKA exoad). Licensed by the included "LICENSE" file. If this file is not found, the project is fully copyrighted.

const { EmbedBuilder } = require("discord.js");
const superagent = require("superagent");
const fx = require("../../fx.js");

module.exports = {
  config: {
    name: "owoify",
    category: "Fun",
    description: "Make your message be OwOified",
    usage: "A sentence after the initial command like so: owoify [sentence]",
    aliases: [`uwuify`],
  },
  run: async (
    /** @type {{ commands: any[]; }} */ bot,
    /** @type {{ channel: { send: (arg0: { embeds: EmbedBuilder[]; }) => void; }; }} */ msg,
    /** @type {any} */ args,
    /** @type {any} */ config,
    bot_db
  ) => {
    // @ts-ignore
    if (!args[0]) return msg.channel.send("<:ohno:1104517527180157018> y-you didn't provide anything!");
    let phrase = args.join("%20");
    fx.exec_command("pwd", function (callback) {
      let script = callback.replace("\n", "") + "/pkg/lib/java/owo";
      fx.exec_command(
        "cd " + script + " && java OwO.java " + phrase,
        function (callback) {
          // @ts-ignore
          msg.channel.send(callback == "" ? "?" : callback);
          fx.exec_command(
            "cd " + script + " && rm -r *.class",
            function (Er) {}
          );
        }
      );
    });
  },
};
