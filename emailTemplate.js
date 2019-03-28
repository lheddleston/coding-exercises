// Question: We have an email template with places for personalized info to be inserted. Insert the values in the dictionary into the appropriate places in the templateString.

var templateString = "Hello there {{firstName}} {{lastName}}! You are great at {{thing}}. What is your secret?";
var valueDict = {firstName: "Susan", lastName: "Beavers", thing: "skating"};

function finalTemplate(templateString, valueDict) {

  var finalTemplate = templateString;

  for(var key in valueDict) {

    var keyPlace = finalTemplate.indexOf("{{" + key + "}}");
    var firstString = finalTemplate.slice(0, keyPlace);
    var lastString = finalTemplate.slice(keyPlace + key.length + 4, finalTemplate.length);

    if(keyPlace >= 0){  
      finalTemplate = firstString + valueDict[key] + lastString;
    }
    else{
      return -1;
    }
  }
  return finalTemplate;
}

console.log(finalTemplate(templateString, valueDict));
