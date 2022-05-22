const { App } = require("@slack/bolt");
require("dotenv").config();
// Initializes your app with your bot token and signing secret
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  developerMode: true,
  socketMode:false, // enable the following to use socket mode
//   appToken: process.env.APP_TOKEN
});

app.command("/test", async ({ command, ack, say }) => {
    try {
      await ack();
      say("Yaaay! that command works!");
    } catch (error) {
      console.log("err the error is >>>>")
      console.error(error);
    }
});

(async () => {
    const port = 3010
    // Start your app
    await app.start(process.env.PORT || port);
    console.log(`⚡️ Slack Bolt app is running on port ${port}!`);
  })();