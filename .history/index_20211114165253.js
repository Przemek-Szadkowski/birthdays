const { readFile } = require('fs').promises;
// const nodemailer = require('nodemailer');
import { SMTPClient } from 'emailjs';

const date = new Date();
const actualMonth = String(date.getMonth() + 1);
const actualDay = String(date.getDate());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'przemodev21@gmail.com',
        pass: 'wielkiTenis21#'
    }
})

// async function readDates() {
//     const dates = await readFile('./dates.json', 'utf-8');
//     const persons = Object.entries(JSON.parse(dates));
//     for(const person of persons) {
//         const date = person[1].date.split('/');
//         const [day, month] = date;
//         if(month === actualMonth && day === actualDay) {
//             const mailOptions = {
//                 from: 'przemodev21@gmail.com',
//                 to: 'przemoszadkowski@o2.pl',
//                 subject: 'Ważna data!',
//                 text: `Dziś ${person[0]} ma ${person[1].type}`
//             };
//             transporter.sendMail(mailOptions, function(error, info){
//                 if (error) {
//                   console.log(error);
//                 } else {
//                   console.log('Email sent: ' + info.response);
//                 }
//               });
//         }
//     }
// }

async function readDates() {
    const dates = await readFile('./dates.json', 'utf-8');
    const persons = Object.entries(JSON.parse(dates));
    for(const person of persons) {
        const date = person[1].date.split('/');
        const [day, month] = date;
        if(month === actualMonth && day === actualDay) {
            const mailOptions = {
                from: 'przemodev21@gmail.com',
                to: 'przemoszadkowski@o2.pl',
                subject: 'Ważna data!',
                text: `Dziś ${person[0]} ma ${person[1].type}`
            };
            transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                } else {
                  console.log('Email sent: ' + info.response);
                }
              });
        }
    }
}

readDates();