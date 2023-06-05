import fs from 'fs';
import dotenv from 'dotenv';
dotenv.config();


export default async function getTensor() {
    let url = process.env.API_ENDPOINT;

    let options = {
        method: 'POST',
        headers: {
            Accept: '*/*',
            'X-Typesense-Api-Key': process.env.API_KEY,
            'Content-Type': 'application/json'
        },
        body: '{"searches":[{"collection":"nft_collections","q":"*","query_by":"name,slug,symbol"}]}'
    };

    const req = await fetch(url, options)
    const res = await req.json()
    const results = res.results[0]
    const hits = results.hits
    // fs.writeFileSync('./logs/tensor.json', JSON.stringify(hits, null, 2))
    return hits;

}

getTensor();