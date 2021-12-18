function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    const spy = string.toUpperCase();
    console.log(spy);
}

function logWhisper(string) {
    const spy = string.toLowerCase();
    console.log(spy);
}

function sayHiToHeadphonedRoommate(string) {
    const lower = string.toLowerCase();
    const upper = string.toUpperCase();
    if (string === lower) {
        let phrase = `I can\'t hear you!`;
        return phrase;
    } else if (string === upper) {
        let phrase = `YES INDEED!`;
        return phrase;
    } else {
        let phrase = `I would love to!`;
        return phrase;
    }
}
