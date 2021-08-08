import { getUserAttributes } from './User.js'
import { View } from './View.js'

const userName = localStorage.getItem('user')

const pageCreate = {
  async profileCreate() {
    const userInfo = await getUserAttributes.findUser(userName)

    let userInformations = {
      name: userInfo.name,
      login: userInfo.login,
      avatar: userInfo.avatar_url,
      page_user: userInfo.html_url,
      location: userInfo.location,
      work: userInfo.company,
      repo: userInfo.public_repos,
      repos_url: userInfo.repos_url,
      followers: userInfo.followers,
      following: userInfo.following
    }

    View.renderProfile(userInformations)

    if (userInformations.repo != 0) {
      this.repositoryCreate(userInformations.repos_url)
    }
  },

  async repositoryCreate(repos) {
    let repositories = []
    const totalRepository = await getUserAttributes.getRepository(repos)

    for (let repo of totalRepository) {
      repositories.push(repo)
    }

    let index = repositories.length - 1

    for (index; index >= 0; index--) {
      View.renderRepository(repositories[index])
    }
  }
}

pageCreate.profileCreate()
