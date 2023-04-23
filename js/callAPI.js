var callAPI = (mailAddress, fName, fNameKana, lName, lNameKana, birthDate)=>{
  // instantiate a headers object
  var myHeaders = new Headers();
  // add content type header to object
  myHeaders.append("Content-Type", "application/json");
  // using built in JSON utility package turn object to string and store in a variable
s
  var raw = JSON.stringify({
    "mailAddress": mailAddress, 
    "fName":fName, 
    "fNameKana":fNameKana, 
    "lName":lName,
    "lNameKana":lNameKana,
    "birthDate":birthDate});

  // create a JSON object with parameters for API call and store in a variable
  var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
  };
  // make API call with parameters and use promises to get response
  fetch("YOUR-API-INVOKE-URL", requestOptions)
  .then(response => response.text())
  .then(result => alert(JSON.parse(result).body))
  .catch(error => console.log('error', error));
}

