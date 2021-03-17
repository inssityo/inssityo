//Prune users before handling user objects
export function pruneUsers(users, user) {

  //Prune users by location
  let usersWithRightLocation = [];
  users.forEach(userObj => {
    if (user.location[0].localeCompare(userObj.location[0]) === 0) {
      usersWithRightLocation.push(userObj);
    }
  });

  //Prune users by gender
  let userWithSpecificGender = [];
  usersWithRightLocation.forEach(userObj => {
    let gender1 = user.gender[0];
    let gender2 = user.gender[1];

    if (gender1 === userObj.gender || gender2 === userObj.gender){
      userWithSpecificGender.push(userObj);
    }
  });

  let pruneUsersObject = userWithSpecificGender;

  return pruneUsersObject;
}

//The logged in user's target profile
export function createComparedTargetObject(targetProfile) {

  let targetProfileObject = removeKeyValuePairs([targetProfile]);
  let comparedTargetObject = createOneLevelObject(targetProfileObject[0]);

  //console.log("COMPARE ", JSON.stringify(comparedTargetObject))
  let algoObjects = whichAlgorithm([comparedTargetObject]);
  //console.log("ALGOS ", JSON.stringify(algoObjects))

  return algoObjects;
}

//The other user profiles except the logged in user's profile
export function createComparisonUserObjects(users) {

  let userObjects = removeKeyValuePairs(users);

  let comparisonUserObjects = [];
  userObjects.forEach(user => {
    comparisonUserObjects.push(createOneLevelObject(user));
  })

  //Sort the keys according to the required algorithm
  let algoObjects = whichAlgorithm(comparisonUserObjects);

  //console.log("ALGOS ", JSON.stringify(algoObjects))

  return algoObjects;
}

//Remove unnecessary key value pairs
function removeKeyValuePairs(object) {

  let removableKeys = [
    "_id",
    "blockedUsers", 
    "email", 
    "password", 
    "name", 
    "surname", 
    "movingDate", 
    "img",
    "description",
    "lastActive",
    "creationTime",
    "__v",
    "targetProfile",
    "user",
  ];

  object.forEach(obj => {
    for(let i = 0; i < removableKeys.length; i++) {
      delete obj[removableKeys[i]];
    }
    obj["petTypes"].map(function (o) { 
      delete o._id; 
    });
    obj["hobbies"].map(function (o) { 
      delete o._id; 
    });
  });
  return object;
}

//Convert nested object to one level object
function createOneLevelObject(object) {

  //location
  let location = {};
  location["city"] = object.location[0];
  location["neighborhood"] = object.location[1];

  /*
  //personality traits
  let traitLen = object.personalityTraits.length;
  let traits = {};
  for(let i=0; i < traitLen; i++) {
    traits["personalityTrait" + (i+1)] = object.personalityTraits[i];
  }*/

  //pet types
  let petTypes = object.petTypes[0];

  //hobbies
  let hobbies = object.hobbies[0];

  delete object["location"];
  //delete object["personalityTraits"];
  delete object["petTypes"];
  delete object["hobbies"];
  delete object["gender"]; //POISTA

  let oneLevelObject = {...object, ...location, /*...traits,*/ ...petTypes, ...hobbies};
  return oneLevelObject;
}

function whichAlgorithm(object) {
  let ifExistsKeys = [
    "maxRoomMates",
    "employmentStatus",
    "workType",
    "alcohol",
    "smoking",
    "drugs",
    "personalityTraits",
    /*"personalityTrait1",
    "personalityTrait2",
    "personalityTrait3",
    "personalityTrait4",
    "personalityTrait5",
    "personalityTrait6",
    "personalityTrait7",*/
    "pets",
    "cats",
    "dogs",
    "rodents",
    "birds",
    "fishes",
    "terrarium",
    "other",
  ];
  let differenceKeys = [
    "collecting",
    "crafts",
    "informationTech",
    "sports",
    "music",
    "games",
    "reading",
    "art",
    "culture",
    "cooking",
    "travelling",
    "voluntaryWork",
    "ageGroup",
    "rentLimit",
    "sociality",
  ]

  let ifExistsAlgo = [];
  let differenceAlgo = [];

  object.forEach(obj => {

    let keys = {}
    ifExistsKeys.forEach(key => {
      //console.log("KEY2 ", key);
      if ({}.hasOwnProperty.call(obj, key)); {
        //console.log("IFFF ", obj[key])
        keys[key] = obj[key];
      }
      
    })
    ifExistsAlgo.push(keys);
  })
  //console.log("EXISTS ", JSON.stringify(ifExistsAlgo));

  object.forEach(obj => {

    let keys = {};
    differenceKeys.forEach(key => {
      if ({}.hasOwnProperty.call(obj, key)) {
        keys[key] = obj[key];
      }
    
    })
    differenceAlgo.push(keys);
  })
  //console.log("DIFF ", JSON.stringify(differenceAlgo))

  return [ifExistsAlgo, differenceAlgo];
}