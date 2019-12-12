let d = new Date();
let thisHour = d.getHours();

//it is pm if hours from 12 onwards
let suffix = (thisHour >= 12) ? 'pm' : 'am';
//only -12 from hours if it is greater than 12 (if not back at mid night)
thisHour = (thisHour > 12) ? thisHour - 12 : thisHour;
//if 00 then it is 12 am
thisHour = (thisHour == '00') ? 12 : thisHour;

const weekday = [{
        day: 'Sunday',
        opening: 8,
        closing: 8
    },
    {
        day: 'Monday',
        opening: 6.5,
        closing: 10
    },
    {
        day: 'Tuesday',
        opening: 6.5,
        closing: 10
    },
    {
        day: 'Wednesday',
        opening: 6.5,
        closing: 10
    },
    {
        day: 'Thursday',
        opening: 6.5,
        closing: 10
    },
    {
        day: 'Friday',
        opening: 6.5,
        closing: 10
    },
    {
        day: 'Saturday',
        opening: 6.5,
        closing: 10
    }
]

let today = weekday[d.getDay()];
let tomorrow = weekday[d.getDay() + 1];

console.log(today.day);
console.log(tomorrow.day);
console.log(thisHour)

const response = document.querySelector('#response');
const storeHours = document.querySelector('#store-hours');

if (thisHour >= today.opening && thisHour <= today.closing) {
    isOpen = true;
} else {
    isOpen = false;
}

if (today.opening === 6.5) {
    today.opening = '6:30';
} else if (today.opening === 8) {
    today.opening = '8:00'
} else {
    today.opening = '!!!Something Broke!!!'
}

if (today.closing === 8) {
    today.closing = '8:00';
} else if (today.closing === 10) {
    today.closing = '10:00';
} else {
    today.opening = '!!!Something Broke!!!'
}

if (tomorrow.opening === 6.5) {
    tomorrow.opening = '6:30';
} else if (tomorrow.opening === 8) {
    tomorrow.opening = '8:00'
} else {
    tomorrow.opening = '!!!Something Broke!!!'
}

if (tomorrow.closing === 8) {
    tomorrow.closing = '8:00';
} else if (tomorrow.closing === 10) {
    tomorrow.closing = '10:00';
} else {
    tomorrow.opening = '!!!Something Broke!!!'
}

if (isOpen) {
    response.src = 'images/YES.png';
    response.alt = 'YES!';
    storeHours.textContent = `Open in Ames, IA today from ${today.opening}AM until ${today.closing}PM`;
} else {
    response.src = 'images/NO.png';
    response.alt = 'NO!';
    storeHours.textContent = `Open in Ames, IA tomorrow from ${tomorrow.opening}AM until ${tomorrow.closing}PM`;
}