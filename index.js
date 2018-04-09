fetch("https://api.github.com/users/miftahmfaris/followers")
  .then(response => {
    return response.json();
  })
  .then(data => {
    let list = document.getElementById("display_list");
    let display_list = "";

    for (var i = 0; i < data.length; i++) {
      let name = data[i].login;
      let picture = data[i].avatar_url;
      let profile_link = data[i].html_url;

      display_list += `
      <div class="item col-md-4 col-sm-6 padding-left-50">
        <div class="card margin-10" style="width: 300px;">
          <img class="card-img-top" src="${picture}" alt="Image">
          <div class="card-block">
            <h4 class="card-title center">${name}</h4>
            <p class="center"><a href="${profile_link}" class="card-link" target="_blank">Visit Profile</a></p>
          </div>
        </div>
        </div>

      `;
      list.innerHTML = display_list;
    }
  });