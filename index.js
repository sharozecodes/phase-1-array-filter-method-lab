
function findMatching(drivers, string){
    const result = drivers.filter(name => name.toLowerCase() === string.toLowerCase());
    return result;
}


function fuzzyMatch(drivers, letter){
    const result = drivers.filter(name => name.indexOf(letter) === 0);
    return result;
}


function matchName(drivers, string){
    const result = drivers.filter(driver => driver.name.toLowerCase() === string.toLowerCase());
    return result;
}