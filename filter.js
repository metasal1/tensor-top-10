// import data from './logs/tensor.json' assert { type: "json" }

export default async function filter(data) {

    console.log(data)
    const list = [];
    // sort 
    data.sort((a, b) => {
        return b.document['stats.sales1h'] - a.document['stats.sales1h']
    })

    data.map((item) => {

        list.push({ name: item.document.name, sales1h: item.document['stats.sales1h'] })
        // get the sales1h
        console.log(item.document.name, item.document['stats.sales1h'])
    }
    )

    return list;
}
