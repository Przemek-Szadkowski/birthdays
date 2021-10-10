const { readFile } = require('fs').promises;

async function readDates() {
    const dates = await readFile('./dates.json', 'utf-8');
    console.log(dates);
}

readDates();