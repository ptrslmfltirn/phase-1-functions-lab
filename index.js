function distanceFromHqInBlocks (pickup) {
   let distance = 42-pickup;
   let abdistance = Math.abs (distance);
   return abdistance;
}
function distanceFromHqInFeet (pickup) {
    let distance = 42-pickup;
    let abdistance = Math.abs (distance);
    let feetdistance = abdistance * 264;
    return feetdistance;
}
function distanceTravelledInFeet (pickup, dropoff) {
    let distance = Math.abs (dropoff - pickup);
    let distanceinfeet = distance * 264;
    return distanceinfeet;
}
function calculatesFarePrice (start, destination) {
   let totaldistance = distanceTravelledInFeet (start, destination)
   if (totaldistance < 400) {
       return 0
   }
   else if (totaldistance > 2500) {
       return `cannot travel that far`
   }
   else if (totaldistance > 2000) {
       return 25
   }
   else {
       return ((totaldistance-400) * .02)
   }
}