

export let timePickerUtil = {
    convert: (date) => ({
            hour: date.getHours() > 12 ? date.getHours() - 12 : date.getHours() == 0 ? 12 : date.getHours(),
            minute: date.getMinutes(),
            noon: date.getHours() >= 12
        }
    ),
    parse: (oriDate, val) => {

        let hour = val.noon ? val.hour == 12 ? 12 : val.hour + 12: (val.hour == 12 ? 0 : val.hour);
        oriDate.setHours(hour);
        oriDate.setMinutes(val.minute);
        return oriDate;
    },
    formatMinute: (minute) => minute < 10 ? '0' + minute : minute
};