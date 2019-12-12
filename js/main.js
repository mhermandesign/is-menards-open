let d = new Date();
let thisHour = d.getHours();
let isOpen;

const response = document.querySelector('#response');
const storeHours = document.querySelector('#store-hours');

const weekday = [{
        day: 'Sunday',
        opening: 8,
        closing: 20
    },
    {
        day: 'Monday',
        opening: 6.5,
        closing: 22
    },
    {
        day: 'Tuesday',
        opening: 6.5,
        closing: 22
    },
    {
        day: 'Wednesday',
        opening: 6.5,
        closing: 22
    },
    {
        day: 'Thursday',
        opening: 6.5,
        closing: 22
    },
    {
        day: 'Friday',
        opening: 6.5,
        closing: 22
    },
    {
        day: 'Saturday',
        opening: 6.5,
        closing: 22
    }
]

// Get index of today and tomorrow
let today = weekday[d.getDay()];
let tomorrow = weekday[d.getDay() + 1];

// Check if open
if (thisHour > today.opening && thisHour < today.closing) {
    isOpen = true;
} else {
    isOpen = false;
}

let todayOpening;
let tomorrowOpening
let todayClosing;
let tomorrowClosing;

// Set todayOpening
if (today.opening === 6.5) {
    todayOpening = '6:30';
} else if (today.opening === 8) {
    todayOpening = '8:00';
} else {
    alert('ERROR: Today Opening');
}

// Set todayClosing
if (today.closing === 20) {
    todayClosing = '8:00';
} else if (today.closing === 22) {
    todayClosing = '10:00';
} else {
    alert('ERROR: Today Closing');
}

// Set tomorrowOpening
if (tomorrow.opening === 6.5) {
    tomorrowOpening = '6:30';
} else if (tomorrow.opening === 8) {
    tomorrowOpening = '8:00';
} else {
    alert('ERROR: Tomorrow Opening');
}

// Set tomorrowClosing
if (tomorrow.closing === 20) {
    tomorrowClosing = '8:00';
} else if (tomorrow.closing === 22) {
    tomorrowClosing = '10:00';
} else {
    alert('ERROR: Tomorrow Closing');
}

let untilClosing = today.closing - thisHour;

// Render
if (isOpen) {
    response.src = 'images/YES.png';
    response.alt = 'YES!';
    storeHours.textContent = `Menards is open in Ames, IA today from ${todayOpening}AM until ${todayClosing}PM. The store is open for, roughly, another ${untilClosing > 1 ? untilClosing + ' hours' : 'hour'}.`;
} else {
    response.src = 'images/NO.png';
    response.alt = 'NO!';
    storeHours.textContent = `Menards is open in Ames, IA tomorrow from ${tomorrowOpening}AM until ${tomorrowClosing}PM.`;
}