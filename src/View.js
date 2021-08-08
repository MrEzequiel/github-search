const View = {
  renderProfile(user) {
    document.querySelector('title').innerText = `GitHub Search - ${user.login}`

    document.querySelector('.image-user').innerHTML = `
      <img src=${user.avatar}/>
    `

    if (user.name != null) {
      document.querySelector('.user-name').innerHTML = `
      <a href=${user.page_user} target="_blank" class="name-user">
        ${user.name}
        <span class="material-icons"> link </span>
      </a>
      <p class="tag-user">@${user.login}</p>
      `
    } else {
      document.querySelector('.user-name').innerHTML = `
      <a href=${user.page_user} target="_blank" class="name-user">
        ${user.login}
        <span class="material-icons"> link </span>
      </a>
      <p class="tag-user">@${user.login}</p>
      `
    }

    if (user.location != null) {
      document.querySelector('.more-information .localization').innerHTML = `
      <div class="icons flex">
        <span class="material-icons"> place </span>
        ${user.location}
      </div> 
      `
    }

    if (user.work != undefined) {
      document.querySelector('.more-information .localization').innerHTML += `
      <div class="icons flex">
        <span class="material-icons"> work </span>
        ${user.work}
      </div>
      `
    }

    document.querySelector('.more-information .social').innerHTML = `
    <div class="icons flex">
      <span class="material-icons"> people </span>
      ${user.followers.toLocaleString()}
    </div>
    <div class="icons flex">
      <span class="material-icons"> person </span>
      ${user.following.toLocaleString()}
    </div>
    `

    document.querySelector('.repository-total .icon-fork').innerHTML = `
    <img src="./assets/fork-icon.png" />
    ${user.repo}
    `
  },

  renderRepository(repo) {
    let repository = document.createElement('div')
    repository.classList.add('repository')

    if (repo.description != null) {
      repository.innerHTML = `
      <div class="title-repository">
        <a href="${repo.html_url}" target="_blank">
          ${repo.name}
          <span class="material-icons"> link </span>
        </a>
        <p>${repo.description}</p>
      </div>
      `
    } else {
      repository.innerHTML = `
      <div class="title-repository">
        <a href="${repo.html_url}" target="_blank">
          ${repo.name}
          <span class="material-icons"> link </span>
        </a>
      </div>
      `
    }

    if (repo.language != null) {
      repository.innerHTML += `
      <div class="status-repository">
        <div class="star-repository">
          <span class="material-icons"> star </span>
          ${repo.stargazers_count.toLocaleString()}
        </div>
        <div class="fork-repository">
          <img src="./assets/fork-icon.png" alt="" />
          ${repo.forks.toLocaleString()}
        </div>
        <div class="code-repository">
          <span class="material-icons"> code </span>
          ${repo.language}
        </div>
      </div>
      `
    } else {
      repository.innerHTML += `
      <div class="status-repository">
        <div class="star-repository">
          <span class="material-icons"> star </span>
          ${repo.stargazers_count.toLocaleString()}
        </div>
        <div class="fork-repository">
          <img src="./assets/fork-icon.png" alt="" />
          ${repo.forks.toLocaleString()}
        </div>
      </div>
      `
    }

    document.querySelector('#repositories').appendChild(repository)
  }
}

export { View }
