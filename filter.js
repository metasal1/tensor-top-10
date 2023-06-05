// import data from './logs/tensor.json' assert { type: "json" }
const LAMPORTS_PER_SOL = 1000000000;

export default async function filter(data) {

    console.log(data)
    const list = [];
    // sort 
    data.sort((a, b) => {
        return b.document['stats.sales1h'] - a.document['stats.sales1h']
    })

    data.map((item) => {

        list.push({ name: item.document.name, sales1h: item.document['stats.sales1h'], floor: item.document['statsOverall.floorPrice'] })
        // get the sales1h
        console.log(item.document.name, item.document['stats.sales1h'], (item.document['statsOverall.floorPrice'] / LAMPORTS_PER_SOL).toFixed(2))
    }
    )

    return list;
}
