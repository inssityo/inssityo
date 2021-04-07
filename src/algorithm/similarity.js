
exports.getSimilarities = (ifExistsComparisonObjects, ifExistsComparedObject, differenceComparisonObjects, differenceComparedObject) => {
  let ifExistsArr = this.calculateIfExists(ifExistsComparisonObjects, ifExistsComparedObject);
  //console.log("IF exists ", ifExistsArr);
  
  let distancesArr = this.calculateDistance(differenceComparisonObjects, differenceComparedObject);
  //console.log("DISTANCE ", distancesArr);

  let maxIfExists = ifExistsArr[0];
  let maxDiff = distancesArr[0];
  let max = maxIfExists + maxDiff;

  //Remove max values
  ifExistsArr.shift();
  distancesArr.shift();

  let similarityArr = ifExistsArr.map(function (num, idx) {
    return num + distancesArr[idx];
  });

  let similarities = [];
  similarityArr.forEach(item => {
    similarities.push(this.calculateSimilarity(item, max));
  });

  return similarities;
}

//Returns common key values from two objects.
exports.getCommonKeys = (obj1, obj2) => {
  let commonKeys = Object.keys(obj2).filter((key) =>
    Object.keys(obj1).includes(key)
  );
  return commonKeys;
}

/*
exports.getNonCommonKeys = (obj1, obj2) => {
  let nonCommonKeys;
  return nonCommonKeys;
}*/


//Calculates if a value of user object exists in a target object
exports.calculateIfExists = (comparisonObjects, comparedObject) => {
  let maxSimilarity = 22; //HARD CODED, based on 15 ifExistsKeys and 7 personality traits
  let similarities = [];
  similarities.push(maxSimilarity);

  comparisonObjects.forEach((object) => {
    let similaritySum = 0;
    let nullAndUndefinedArr = []; //Collect all null or undefined keys

    for (let key in object) {
      //console.log("VALUES ", object[key], " ", comparedObject[key])
      if (comparedObject[key] !== null || 
        object[key] !== null || 
        comparedObject[key] !== undefined || 
        object[key] !== undefined
      ) {

        //Execute if key is not personalityTraits
        //Compare integers or booleans
        if (key.toLowerCase().indexOf("personality".toLowerCase()) === -1) {
          if (object[key] === comparedObject[key]) {
            similaritySum++;
          }
        }
        //Compare strings
        else {
          //Find duplicates
          let duplicates = object[key].filter(function(val) {
            return comparedObject[key].indexOf(val) != -1;
          });
          similaritySum += duplicates.length;
        }
      } else {
        nullAndUndefinedArr.push(key);
      }
    }
    console.log("EX SUM ", similaritySum)
    similarities.push(similaritySum);
      //this.calculateSimilarity(similaritySum, maxSimilarity);
  });
  return similarities;
}

//Calculates if a value of user object exists in a target object or the distance between the values.
exports.calculateDistance = (comparisonObjects, comparedObject) => {
  let maxDiff = this.calculateMaxDifference(comparisonObjects, comparedObject.rentLimit);
  let similarities = [];
  similarities.push(maxDiff);

  //Loop users
  comparisonObjects.forEach((object) => {
    //console.log("compared ", JSON.stringify(comparedObject))
    //console.log("comparison ", JSON.stringify(object))

    //Get common keys of the comparable profiles
    let commonKeys = this.getCommonKeys(comparedObject, object);
    //let nonCommonKeys = this.getNonCommonKeys(comparedObject, object);
    //console.log("KEYS ", JSON.stringify(commonKeys))
    //console.log("NON KEYS ", JSON.stringify(nonCommonKeys))

    let comparedValues = [];
    let comparisonValues = [];
    commonKeys.forEach((key) => {
      comparedValues.push(comparedObject[key])
      comparisonValues.push(object[key])
    })

    //console.log("COM KEYs ", comparedObject)
    //console.log("OBJ KEYs ", object)

    //Compare the similarity of common keys
    let diffSum = this.calculateDifferenceSum(comparedValues, comparisonValues); //Handle NaN
    console.log("DIFF SUM ", diffSum)
    let similaritySum = maxDiff - diffSum;

    similarities.push(similaritySum);
      //this.calculateSimilarity(similaritySum, maxDiff);
  });
  return similarities;
}

exports.calculateDifferenceSum = (comparedValues, comparisonValues) => {

  if (comparisonValues.length) {
    let differenceSum = 0;

    //Compare the similarity of common keys
    for (let i = 0; i < comparisonValues.length; i++) {
      //console.log("VALUES ", comparisonValues[i], " ", comparedValues[i])
      differenceSum += Math.abs(comparisonValues[i] - comparedValues[i])
    }
    return differenceSum;
  }
  return "No similar fields"
}

exports.calculateMaxDifference = (comparisonObjects, comparedRentLimit) => {
  //Get max and min rent limit
  let maxRentLimit = 0;
  let minRentLimit = 100000;

  comparisonObjects.reduce((acc, obj) => {
    if (obj.rentLimit > maxRentLimit) {
      maxRentLimit = obj.rentLimit;
    }
    else if (obj.rentLimit < minRentLimit) {
      minRentLimit = obj.rentLimit;
    }
  }, 0);

  let rentLimitArr = [Math.abs(comparedRentLimit - maxRentLimit), Math.abs(comparedRentLimit - minRentLimit)]
  let maxRentLimitDiff = Math.max.apply(Math, rentLimitArr) //450

  let maxDiff = 85 + maxRentLimitDiff; //85 HARD CODED, based on hobbies 1-7*12 + ageGroup 1-8 + sociality 1-7

  return maxDiff;
}

exports.calculateSimilarity = (sum, max) => {
  //Make it percentage
  let similarityAmount = (sum / max) * 100;
  let similarityPercentage = parseFloat(similarityAmount).toFixed(0);
  return similarityPercentage;

  /*
  let similarityAmount = 0;

  //Make it percentage
  if (algo === 1) {
    similarityAmount = (sum / max) * 100;
  } else {
    similarityAmount = 100 - ((sum / max) * 100);
  }
  let similarityPercentage = parseFloat(similarityAmount).toFixed(0);
  return similarityPercentage;
  */
}