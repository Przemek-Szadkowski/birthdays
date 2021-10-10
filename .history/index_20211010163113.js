const { writeFile } = require('fs').promises;

async function readDates() {
    const dates = await writeFile('./dates.json', 'utf-8', err => {
        if(err) console.log(err);
    });
    console.log(dates);
}

readDates();