import dotenv from 'dotenv';
dotenv.config();

export default async function postToDiscord(webhook, data) {

    try {
        const fields = data.map((item) => {
            return {
                name: item.name,
                value: `${item.sales1h} sales`,
            }
        })

        const embed = {
            title: `Top ${data.length} collections sales last hour`,
            color: 0xff0000, // Hex color code (red),
            fields: fields,
            footer: {
                text: 'On-chain data brought to you by @nftmate_',
            },
        };

        const payload = {
            embeds: [embed],
        };
        // console.log(payload)
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        }

        const req = await fetch(webhook, options);
        const res = await req.text()
        console.log('Posted to Discord successfully:', res);
    } catch (error) {
        console.error('Error posting to Discord:', error.message);
    }
}

