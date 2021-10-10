const { writeFile } = require('fs');

async function readDates() {
    const dates = await writeFile('./dates.json', 'utf-8');
    console.log(dates);
}

readDates();