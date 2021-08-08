import { getUserAttributes } from './src/User.js'

const searchUser = async e => {
  e.preventDefault()
  warningOnScreen.clear()
  let user = document.getElementById('input-search').value

  if (user != '') {
    warningOnScreen.loading()

    const userInformation = await getUserAttributes.findUser(user)

    if (userInformation.message != 'Not Found') {
      warningOnScreen.clear()
      localStorage.setItem('user', `${userInformation.login}`)

      window.location.href = 'profile.html'
    } else {
      warningOnScreen.notFound()
    }
  }
}

const warningOnScreen = {
  loading() {
    document.querySelector('.alert').style.display = 'flex'
  },
  notFound() {
    document.querySelector('.alert').classList.add('not-found')
    document.querySelector('.alert').style.display = 'flex'
    document.querySelector('.alert').innerHTML = `
    <img src="./assets/lost.png" />
    Not found user
    `
  },
  clear() {
    document.querySelector('.alert').classList.remove('not-found')
    document.querySelector('.alert').style.display = 'none'
    document.querySelector('.alert').innerHTML = ''
  }
}

document.querySelector('#button-search').addEventListener('click', searchUser)
