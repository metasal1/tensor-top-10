import filter from "./filter.js";
import postToDiscord from "./discord.js";
import getTensor from "./tensor.js";
import { CronJob } from "cron";

if (process.argv[2] === "now") {

    var when = '0/10 * * * * *';
}
else {
    var when = '0 * * * *';
}

const job = new CronJob(when, async function () {

    const webhook = process.env.DISCORD_TENSOR_WEBHOOK;
    const payload = await getTensor();
    const data = await filter(payload);
    const post = await postToDiscord(webhook, data);

    console.log(post);

}
)
job.start();
job.nextDates(1);