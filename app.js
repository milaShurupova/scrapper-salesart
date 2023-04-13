const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");



const url = "https://en.wikipedia.org/wiki/Cosmonautics_Day";


async function scrapeData() {
    try {

        const { data } = await axios.get(url);
        const $ = cheerio.load(data);

        const listItems = $(".mw-parser-output ul li");
        //console.log(listItems.html());

        listItems.each(function (idx, el) {
            console.log($(el).children("a").text());
        });

        const names = [];
        listItems.each((idx, el) => {

            const name = { name: "", num: "" };
            name.name = $(el).children("a").text();
            names.push(name);
        });

        console.dir(names);

    } catch (err) {
        console.error(err);
    }
    
}

scrapeData();




