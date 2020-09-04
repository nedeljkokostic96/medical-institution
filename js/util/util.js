
export default class Util{

    static getDate = () => {
        return new Date();
    }

    static currentDateString = () => {
        return Util.getDate().toLocaleDateString();
    }

    static currentTimeString = () => {
        return Util.getDate().toLocaleTimeString();
    }

    static getRandomNumber = (low, high) => {
        return Math.floor(Math.random() * (high - low + 1)) + low;
    }

    static getRandomTime = (minHours = 7, maxHours = 12) => {
        const hours = Util.getRandomNumber(minHours, maxHours - 1);
        const hoursStr = hours < 10 ? '0' + hours : hours + '';
        const minutes = Util.getRandomNumber(0, 59);
        const minutesStr = minutes < 10 ? '0' + minutes : minutes + '';
        return hoursStr + ':' + minutesStr;
    }

    static getRandomDate = (start = new Date(), end = new Date(2021, 5, 30)) => {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString();
    }

    // static logContent = (newLine) => {
    //     const file = '../log/log.txt';
    //     const fs = require('fs');
    //     let content = '';
    //     fs.readFile(file, (err, data) => {
    //         if(err) throw err;
    //         content = data.toString();
    //     });
    //     content += '\n' + newLine;
    //     fs.writeFile(file, content, err => {
    //         if (err) throw err;
    //     });
    // }
}