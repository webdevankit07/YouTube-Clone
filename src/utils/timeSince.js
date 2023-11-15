export const timeSince = (date) => {
    const second = Math.floor((new Date().valueOf() - date.valueOf()) / 1000);

    let interval = second / 31536000;
    if (interval > 1) {
        return Math.floor(interval) + ' years ago';
    }

    interval = second / 2592000;
    if (interval > 1) {
        return Math.floor(interval) + ' Month ago';
    }

    interval = second / 86400;
    if (interval > 1) {
        return Math.floor(interval) + ' Days ago';
    }

    interval = second / 3600;
    if (interval > 1) {
        return Math.floor(interval) + ' Hours ago';
    }

    interval = second / 60;
    if (interval > 1) {
        return Math.floor(interval) + ' Minutes ago';
    }

    interval = second / 1;
    if (interval > 1) {
        return Math.floor(interval) + 'Seconds';
    }
};
