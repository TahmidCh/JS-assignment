// Github link: https://github.com/TahmidCh/JS-assignment

// First Part of Assignment

function kilometerToMeter(inputDistance) {
    if (inputDistance < 0 || typeof inputDistance != "number") {
        return "Your input is invalid"
    }
    else {
        result = inputDistance * 1000
        return result;
    }
}

// End of first part


// Second Part of Assignment

function budgetCalculator(quantityOfWatch, quantityOfPhone, quantityOfLaptop) {
    var watchPrice = 50;
    var phonePrice = 100;
    var laptopPrice = 500;
    if (quantityOfWatch < 0 || quantityOfPhone < 0 || quantityOfLaptop < 0 || typeof quantityOfWatch != "number" || typeof quantityOfPhone != "number" || typeof quantityOfLaptop != "number") {
        return "Your input is invalid"
    }
    else {
        var totalWatchPrice = Math.round(quantityOfWatch) * watchPrice;
        var totalPhonePrice = Math.round(quantityOfPhone) * phonePrice;
        var totalLaptopPrice = Math.round(quantityOfLaptop) * laptopPrice;
        var total = totalWatchPrice + totalPhonePrice + totalLaptopPrice;
        return total;
    }
}

// End of second part


// Third Part of Assignment

function hotelCost(numberOfDays) {
    var totalCost = 0;
    if (numberOfDays < 0 || typeof numberOfDays != "number") {
        totalCost = "Your input is invalid";
    }
    else if (numberOfDays <= 10) {
        numberOfDays = Math.round(numberOfDays);
        totalCost = numberOfDays * 100;
    }
    else if (numberOfDays <= 20) {
        numberOfDays = Math.round(numberOfDays);
        var firstTenDays = 10 * 100;
        var remaining = numberOfDays - 10;
        var tenToTwentyDays = remaining * 80
        totalCost = firstTenDays + tenToTwentyDays;
    }
    else {
        numberOfDays = Math.round(numberOfDays);
        var firstTenDays = 10 * 100;
        var tenToTwentyDays = 10 * 80;
        var remaining = numberOfDays - 20;
        var moreThanTwenty = remaining * 50;
        totalCost = firstTenDays + tenToTwentyDays + moreThanTwenty
    }
    return totalCost;
}

// End of third part


// Fourth Part of Assignment

function megaFriend(nameOfFriends) {
    var longest = ''
    if (nameOfFriends.length == 0) {
        longest = "Your input is invalid";
    }
    else {
        for (let i = 0; i < nameOfFriends.length; i++) {
            var str = nameOfFriends[i]
            if (str.length > longest.length)
                longest = str;
        }
    }
    return longest;
}

// End of fourth part