const watch_premium=require("./Resources/watch_premium.json");
const most_popular=require("./Resources/most_popular.json");
const latest_originals=require("./Resources/latest_originals.json");
const dataObj=[
    {
        database:watch_premium,
        url:"watchPremium"
    },
    {
        database:most_popular,
        url:"mostPopular"
    },
    {
        database:latest_originals,
        url:"latestOriginals"
    },
]
module.exports=dataObj;