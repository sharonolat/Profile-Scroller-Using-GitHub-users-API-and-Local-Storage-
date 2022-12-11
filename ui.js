class UI{
  constructor(){
    this.profile = document.getElementById('profile');
  }

  showProfile(user){
    if(user !== undefined){

      this.profile.innerHTML = `
        <div class = "card card-body mb-3">
          <div class = "row">
            <div class = "col-md-3">
              <img class = "img-fluid mb-2" src = "${user.avatar_url}"> 
              <div class = "mb-2 fw-bold fs-4 text-capitalize">${user.login}</div>
              <a href = "${user.html_url}" class = "btn btn-primary btn-sm w-100" target = "_blank">View Profile</a>
            </div>
            <div class = "col-md-9">
              <span class = "badge rounded-pill bg-primary">Public Repos: ${user.public_repos}
              </span>
              <span class = "badge rounded-pill bg-secondary">Public Gists: ${user.public_gists}
              </span>
              <span class = "badge rounded-pill bg-success">Followers: ${user.followers}
              </span>
              <span class = "badge rounded-pill bg-info">Following: ${user.following}
              </span>
              <br><br>
              <ul class="list-group">
                <li class="list-group-item">Company: ${user.company}</li>
                <li class="list-group-item">Website: ${user.blog}</li>
                <li class="list-group-item">Location: ${user.location}</li>
                <li class="list-group-item">Member Since: ${user.created_at}</li>
              </ul>
            </div>
          </div>
        </div>
      `;
    }
    else{
      window.location.reload()
    }

  }

}
