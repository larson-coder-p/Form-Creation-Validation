 
async function fetchUserData() {
    
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
  
    //  Select the container element where user names will be displayed
    const dataContainer = document.getElementById('api-data');
  
    try {
      // Show loading message
      dataContainer.textContent = 'Loading user data...';
  
      //  Fetch the data from the API
      const response = await fetch(apiUrl);
  
      // Check if the response is OK (status 200-299)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      // Parse JSON data
      const users = await response.json();
  
      //  Clear loading message
      dataContainer.innerHTML = '';
  
      //  Create a <ul> element to hold the user list
      const userList = document.createElement('ul');
  
      // Loop through users and create <li> for each name
      users.forEach(user => {
        const listItem = document.createElement('li');
        listItem.textContent = user.name;
        userList.appendChild(listItem);
      });
  
      // Append the list to the container
      dataContainer.appendChild(userList);
  
    } catch (error) {
      //  Handle errors by clearing container and showing error message
      dataContainer.innerHTML = '';
      dataContainer.textContent = 'Failed to load user data.';
      console.error('Error fetching user data:', error);
    }
  }
  
  document.addEventListener('DOMContentLoaded', fetchUserData);
  