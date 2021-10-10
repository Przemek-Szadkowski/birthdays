const { readFile } = require('fs').promises;

const date = new Date();
console.log(date);

async function readDates() {
    const dates = await readFile('./dates.json', 'utf-8');
    const datesArr = Object.entries(JSON.parse(dates));
    console.log(datesArr);
    
}

readDates();