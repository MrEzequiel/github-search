const getUserAttributes = {
  async findUser(user) {
    let results = await fetch(`https://api.github.com/users/${user}`)
    let jsonResult = await results.json()

    return jsonResult
  },

  getRepository: async repo_url => {
    let results = await fetch(repo_url)
    return await results.json()
  }
}

export { getUserAttributes }
