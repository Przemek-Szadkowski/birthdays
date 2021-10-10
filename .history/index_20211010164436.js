const { readFile } = require('fs').promises;

const date = new Date();
const actualMonth = date.getMonth() + 1;
const actualDay = date.getDate();

async function readDates() {
    const dates = await readFile('./dates.json', 'utf-8');
    const datesArr = Object.entries(JSON.parse(dates));
    for(const date of datesArr) {
        console.log(date);
    }
    
}

readDates();