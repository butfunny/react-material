let subtractMonth = ({day, month, year}) => {
    if (month == 1) {
        return {
            day: day,
            month: 12,
            year: parseInt(year) - 1
        }
    } else {
        return {
            day: day,
            month: parseInt(month) - 1,
            year: year
        }
    }
};

let plusMonth = ({day, month, year}) => {
    if (month == 12) {
        return {
            day: day,
            month: 1,
            year: parseInt(year) + 1
        }
    } else {
        return {
            day: day,
            month: parseInt(month) + 1,
            year: year
        }
    }
};


let daysInMonth = (month, year) => new Date(year, month, 0).getDate();



let genCalendar = ({month = new Date().getMonth() + 1, year = new Date().getFullYear()}) => {
    let result = [];
    let startIndex = new Date(year, month - 1, 1, 0, 0, 0).getDay();
    let endIndex = daysInMonth(month, year);

    let dayNextMonth = 1;

    for (let i = 0; i < 42; i++) {
        if (i < startIndex) {
            result.push({
                month,
                day: false,
                year
            });
        }
        else if (i >= startIndex && (i - startIndex + 1) <= endIndex) {
            result.push({
                month,
                day: i - startIndex + 1,
                year
            });
        }
        else {
            result.push({
                month,
                day: false,
                year
            });
            dayNextMonth++;
        }

    }
    return result;
};

let toDate = (date) => {
    if (typeof date === "string") return new Date(date);
    const {year, month, day = 1} = date;
    return new Date(year, month - 1, day, 0, 0, 0, 0);
};


let compareDate = (date1, date2) => {
    if (!date1 || date1 == null || !date2  || date2 == null) return 1;
    return toDate(date1).getTime() - toDate(date2).getTime()
};


let parseDate = (date) => ({
    day: new Date(date).getDate(),
    month: new Date(date).getMonth() + 1,
    year: new Date(date).getFullYear()
});


export let datePickerUtil = {
    subtractMonth,
    plusMonth,
    genCalendar,
    compareDate,
    parseDate,
    toDate
};