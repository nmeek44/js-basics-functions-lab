let hq = 42
let numFeetToBlocks = 264
function distanceFromHqInBlocks(pickupLocation) {
    let blocksAboveHq = (`${pickupLocation}` - `${hq}`);
    let blocksBelowHq = (`${hq}` - `${pickupLocation}`);
    if (blocksAboveHq > 0) {
        console.log(blocksAboveHq);
        return blocksAboveHq;
    } else {
        console.log(blocksBelowHq);
        return blocksBelowHq;
    }
}

function distanceFromHqInFeet(pickupLocation) {
    return distanceFromHqInBlocks(pickupLocation) * `${numFeetToBlocks}`
}

function distanceTravelledInFeet(pickupLocation, dropOffLocation) {
    if (`${pickupLocation}` > `${dropOffLocation}`)  {
        return (`${pickupLocation}` - `${dropOffLocation}`) * `${numFeetToBlocks}`;
    } else {
        return (`${dropOffLocation}` - `${pickupLocation}`) * `${numFeetToBlocks}`;
    }
}