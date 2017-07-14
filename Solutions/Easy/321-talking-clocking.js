/**
 * [2017-06-27] Challenge #321 [Easy] Talking Clock - https://redd.it/6jr76h
 * 
 * Description
 * 
 * No more hiding from your alarm clock! You've decided you want your computer to keep you updated on the time so you're never late again. A talking clock takes a 24-hour time and translates it into words.
 * 
 * Input Description
 * An hour (0-23) followed by a colon followed by the minute (0-59).
 * 
 * Output Description
 * The time in words, using 12-hour format followed by am or pm.
 * 
 * Sample Input data
 * 00:00
 * 01:30
 * 12:05
 * 14:01
 * 20:29
 * 21:00
 * 22:15
 * 
 * Sample Output data
 * It's twelve am
 * It's one thirty am
 * It's twelve oh five pm
 * It's two oh one pm
 * It's eight twenty nine pm
 * It's nine pm
 * It's ten fifteen pm  
 * 
 */

const talkingClock = (time) => {

    const hours = ['twelve ', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven '];
    const tens = ['oh ', '', 'twenty ', 'thirty ', 'fourty ', 'fifty '];

    const ones = ['', '', 'two ', 'three ', 'four ', 'five ',
        'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelv ',
        'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ',
        'eighteen ', 'nineteen '];

    const hour = +time.split(':')[0];
    const minute = time.split(':')[1];

    var hour12 = hour >= 12 ? hour - 12 : hour;

    var talkMinutes = '';
    if (+minute > 19) {
        talkMinutes = tens[+minute[0]]
            + ones[+minute[1]];
    } else {
        talkMinutes = (+minute < 10 && +minute > 0 ? 'oh ' : '')
            + ones[+minute];
    }

    const result = 'It\'s '
        + hours[hour12]
        + talkMinutes
        + (hour <= 1 ? 'am' : 'pm');

    return result;
}

/**
 * TESTS
 */

const tests = ['00:00', '01:30', '12:05', '14:01', '20:29', '21:00', '22:15'];

for (let i = 0; i < tests.length; i++) {
    console.log(talkingClock(tests[i]));
}