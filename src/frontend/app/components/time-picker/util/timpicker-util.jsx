

export let timePickerUtil = {
    convert: (date) => ({
        hour: date.getHours() > 12 ? date.getHours() - 12 : date.getHours(),
        minute: date.getMinutes(),
        noon: date.getHours() > 12
    }),
    parse: (oriDate, val) => {
        let hour = val.noon ? val.hour + 12 : val.hour;
        return oriDate.setHours(hour).setMinutes(parseInt(val.minute))
    }
};