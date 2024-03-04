export function getDate(spanDay) {
    let dayShown;
    let newDay = new Date().getDay();
    switch (newDay) {
      case 0:
        dayShown = "Sunday";
  
        break;
      case 1:
        dayShown = "Monday";
        break;
      case 2:
        dayShown = "Thuesday";
  
        break;
      case 3:
        dayShown = "Wednesday";
        break;
      case 4:
        dayShown = "Thursday";
  
        break;
      case 5:
        dayShown = "Friday";
  
        break;
      case 6:
        dayShown = "Saturday";
  
        break;
  
      default:
        "undefined";
        break;
    }
  
    let minutes = new Date().getMinutes();
    let hours = new Date().getHours();
    let time = `${hours}:${minutes}`;
  
    let year = new Date().getFullYear();
  
    let monthShown;
    let month = new Date().getMonth();
  
    switch (month) {
      case 0:
        monthShown = "January";
        break;
      case 1:
        monthShown = "February";
        break;
      case 2:
        monthShown = "March";
        break;
      case 3:
        monthShown = "April ";
        break;
      case 4:
        monthShown = "May";
        break;
      case 5:
        monthShown = "June";
        break;
      case 6:
        monthShown = "July";
        break;
      case 7:
        monthShown = "August";
        break;
      case 8:
        monthShown = "September";
        break;
      case 9:
        monthShown = "October";
        break;
      case 10:
        monthShown = "November";
        break;
      case 11:
        monthShown = "December";
        break;
  
      default:
        monthShown = "";
        break;
    }
  
    spanDay.innerHTML = `${time} - ${dayShown}, 9 ${monthShown.slice(0, 3)} ${year
      .toString()
      .slice(2)}`;
  }