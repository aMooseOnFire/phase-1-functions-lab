function distanceFromHqInBlocks(someValue) {
    const hqLocation = 42
    const distance = someValue - hqLocation; 
    if (distance < 0) {
        return Math.abs(distance); 
    }
    else {
        return distance
    }
  };

  function distanceFromHqInFeet(someValue) {
    return (distanceFromHqInBlocks(someValue) * 264);
  }

  function distanceTravelledInFeet(start, destination) {
    const travelDistance = start - destination; 
    if (travelDistance < 0) {
        return Math.abs (travelDistance) * 264; 
    }
    else {
        return travelDistance * 264;
    }
  }

  function calculatesFarePrice(start, destination) {
    const cabDistance = distanceTravelledInFeet(start, destination);
    if (cabDistance < 400){
        return 0;
    } else if (cabDistance >= 400 && cabDistance <= 2000){
        return (cabDistance - 400) * 0.02;
    } else if (cabDistance >= 2000 && cabDistance <= 2500){
        return 25;
    } else {
        return 'cannot travel that far'
    }
}