import { getUserAttributes } from './src/User.js'

const searchUser = async e => {
  e.preventDefault()
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
    document.querySelector('.alert').innerHTML = 'Carregando'
  },
  notFound() {
    document.querySelector('.alert').innerHTML = 'Não encontrado'
  },
  clear() {
    document.querySelector('.alert').innerHTML = ''
  }
}

document.querySelector('#button-search').addEventListener('click', searchUser)
