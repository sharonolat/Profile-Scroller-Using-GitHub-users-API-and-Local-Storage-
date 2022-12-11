class GitHub{
  constructor(){
    this.client_id = '2c218d7112507ca11607';
    this.client_secret = 'b379648c47708a3a688780bede271e3bc6405ae3';
  }

  async getUsers(){

    // Profile
    const profileResponse = await fetch(`https://api.github.com/users?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    
    const profile = await profileResponse.json();

    return profile;
  }
}