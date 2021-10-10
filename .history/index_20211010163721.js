const { readFile } = require('fs').promises;

async function readDates() {
    const dates = await readFile('./dates.json', 'utf-8');
    const datesJson = JSON.parse(dates);
    for(const item of datesJson) {
        console.log(item);
    }
}

readDates();