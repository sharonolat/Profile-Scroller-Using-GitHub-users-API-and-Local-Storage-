class Storage{

  getProfiles(){
    let profiles = localStorage.getItem('profiles');

    if(profiles == null){
      return [];
    }
    else{
      return JSON.parse(profiles);
    }
  }

  setProfiles(profilesData){

    //profiles.push(profilesData);
    localStorage.setItem('profiles', JSON.stringify(profilesData));

  }
  
}
