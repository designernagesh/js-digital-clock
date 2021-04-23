// Current Time
let currentTime = document.getElementById("currentTime");

// Function to add '0' before below 10
const checkSingleDigit = i => (i < 10) ? '0' + i : i;	

// Function for Time
const dateTime = () => {
  let d = new Date();  
  let hours   = d.getHours();
  let minutes = d.getMinutes(); 	
  let seconds = d.getSeconds();
  let session = "AM";

  hours == 0 ? hours = 12 : hours;
  if(hours > 12){			
    hours = hours - 12;
    session = "PM";
  }else{
    hours;
  }  

  hours   = checkSingleDigit(hours);
  minutes = checkSingleDigit(minutes);
  seconds = checkSingleDigit(seconds);	  	

  let fullTime = `${hours} : ${minutes} : ${seconds}`;

  currentTime.innerHTML = `${fullTime} ${session}`;   
}

// Calling Current Time Function  
setInterval(dateTime, 1000)