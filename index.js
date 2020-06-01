const Discord = require("discord.js");
const client = new Discord.Client();
const { token, prefix } = require("./config.json");

//activates once the client is on, You should see the console say ready
client.once("ready", () => {
  console.log("Ready!");
});

client.on("message", (message) => {
  console.log(message.content);
  if (message.content === "The Test") {
    console.log("writing the TEST!!!! ");
    message.channel.send("Reporting in for Sound Duty");
  }
  if (message.content === `${prefix}first`) {
    console.log("First sound to play");
    message.channel.send("playing First Sound");
  }
});

// this activates the client and causes to bot to listen on the server
client.login(token);
