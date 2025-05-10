const userAge = +prompt('Enter your age');
const userCity = prompt('Enter your city');
const userFavouriteSport = prompt('Enter your favourite sport')

let userCountry
let userSportMessage

switch (userCity) {
    case "Kyiv":
        userCountry = "Ukraine";
        break;

    case "London":
        userCountry = "The UK";
        break;

    case "Washington":
        userCountry = "The US";
        break;

    default:
        userCountry = userCity
}

if (userFavouriteSport) {
    if (userFavouriteSport === 'Football'){
        userSportMessage = 'Wow, do you want to become like Messi ?'
    }
    else if (userFavouriteSport === 'Basketball'){
        userSportMessage = 'Wow, do you want to become like Michael Jordan ?'
    }
    else if (userFavouriteSport === 'Hockey'){
        userSportMessage = 'Wow, do you want to become like Jacques Plante ?'
    }
    else  {
        userSportMessage = 'You will become a great sportsman'
    }
} else {
    userSportMessage = 'It\'s pity I didn\'t want to enter your favourite sport'
}

let userAgeMessage = !userAge ? 'it\'s pity I didn\'t want to enter your age \n' : `Your age is ${userAge} \n`;
let userCityMessage = !userCity ? 'it\'s pity I didn\'t want to enter your age \n' : `Your country is ${userCountry} \n`;


console.log(userAgeMessage + userCityMessage + userSportMessage)