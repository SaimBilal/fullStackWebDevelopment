exports.getDate = () => {
    let date = new Date();
    return date.toLocaleDateString("en-UK", {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
};

exports.getDay = () => {
    let date = new Date();
    return date.toLocaleDateString("en-UK", {
        weekday: 'long',
    });
};