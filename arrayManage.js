// Developer: ALEX PONCE
// Date of Development: Wed Jul 26 2023
// Purpose of Script: Representing team members and their favorite things in order by name.

let rockyObj = {
    'Name': 'Rocky',
    'Favorite Food': 'Sushi',
    'Favorite Movie': 'Back to The Future',
    'Status': 'Inactive'
  };
  
  let miroslavObj = {
    'Name': 'Miroslav',
    'Favorite Food': 'Sushi',
    'Favorite Movie': 'American Psycho',
    'Status': 'Active'
  };
  
  let donnyObj = {
    'Name': 'Donny',
    'Favorite Food': 'Singapore chow mei fun',
    'Favorite Movie': 'The Princess Bride',
    'Status': 'Inactive'
  };
  
  let mattObj = {
    'Name': 'Matt',
    'Favorite Food': 'Brisket Tacos',
    'Favorite Movie': 'The Princess Bride',
    'Status': 'Active'
  };
  
  // My Object:
  let myObj = {
    'Name': 'Alex Ponce',
    'Favorite Food': 'Pizza',
    'Favorite Movie': 'the martian',
    'Status': 'Active'
  };

   // My Object:
   let anotherPerson = {
    'Name': 'Alex Ponce',
    'Favorite Food': 'Pizza',
    'Favorite Movie': 'the martian',
    'Status': 'Active'
  };
  
  
  // Creating array, adding objects, and adding the current date
  let  teamMembers = [rockyObj, miroslavObj, donnyObj, mattObj, myObj, anotherPerson];

  let currentDate = new Date();
  for (let member of teamMembers) {
    member['Date'] = currentDate;
  }
  
  // display  active records showing error messages


  function displayActiveRecords() {
    let activeRecords = teamMembers.filter(member => member['Status'] === 'Active');
    let inactiveRecords = teamMembers.filter(member => member['Status'] === 'Inactive');

    if (inactiveRecords.length > 1) {
        for (let member of inactiveRecords) {
            console.log(`Active records not found for Name: ${member['Name']}`);
        }
    } 
    
    if (activeRecords.length > 1) {
      for (let member of activeRecords) {
        console.log(`Name: ${member['Name']}, Date: ${member['Date']}, Favorite Movie: ${member['Favorite Movie']}`);
      }
    }
  }
  


  // sort byName because Name is the first postion into the array
  function sortByProperty(property) {
    teamMembers.sort((a, b) => (a[property] > b[property]) ? 1 : -1);
  }


  
  displayActiveRecords(); 