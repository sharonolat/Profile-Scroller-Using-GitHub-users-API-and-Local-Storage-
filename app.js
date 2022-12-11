// Initialize github class
const git = new GitHub;

// Initialize UI class
const ui = new UI;

// Initialize storage class
const storage = new Storage;



// Profile Iterator function
function profileIterator(profiles){

  let nextIndex = 0;
  
  return {
    next: function(){
      return nextIndex < profiles.length ?
      {currentProfile: profiles[nextIndex++], done: false}:
      {done: true}
    }
  }
}


// Get profiles Event Listener
document.addEventListener('DOMContentLoaded', getProfiles());


const profiles = profileIterator(JSON.parse(localStorage.getItem('profiles')));

// Call first person
nextProfile();

// Next Eventlistner
document.getElementById('next').addEventListener('click', nextProfile);


// Get users function
function getProfiles(){
  
  git.getUsers()
  .then(profilesData =>{
    storage.setProfiles(profilesData);
  });

}

// Next Profile function
function nextProfile(){

  const currentProfile = profiles.next().currentProfile

  ui.showProfile(currentProfile);
}

