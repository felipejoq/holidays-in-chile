const helper = {};

helper.toJSON =  (context) => {
    return JSON.stringify(context);
};

helper.isInalienable = (value) => {
    return value === 0 ? 'Si' : 'No';
}

module.exports = helper;
