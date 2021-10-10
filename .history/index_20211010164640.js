const { readFile } = require('fs').promises;

const date = new Date();
const actualMonth = date.getMonth() + 1;
const actualDay = date.getDate();

async function readDates() {
    const dates = await readFile('./dates.json', 'utf-8');
    const persons = Object.entries(JSON.parse(dates));
    for(const person of persons) {
        const date = person[1].date.split('/');
        console.log(date);
    }
    
}

readDates();