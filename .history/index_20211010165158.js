const { readFile } = require('fs').promises;

const date = new Date();
const actualMonth = date.getMonth() + 1;
const actualDay = date.getDate();
console.log(actualMonth, actualDay);

async function readDates() {
    const dates = await readFile('./dates.json', 'utf-8');
    const persons = Object.entries(JSON.parse(dates));
    for(const person of persons) {
        const date = person[1].date.split('/');
        const [day, month] = date;
        console.log(day, month);
        if(month === actualMonth && day === actualDay) {
            console.log(`Dziś ${person[0]} ma ${person[1][1]}`);
        }
    }
    
}

readDates();