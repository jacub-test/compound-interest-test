let likeFunctionality = () => {
  return true
}

let disLikeFunctionality = () => {
  return false
}

let getUserAge = (user) => {
  return user.age
}

let getUserAid = (user) => {
  let userName = user.name
  return userName.aid
}

const setCommit = function () {
  return true
}

let someName = ['ehsan', 'hesam', 'hassan', 'mobina']

let testUserName = prompt('enter your name:', 'ehsan')

let isEhsan = someName.map((name) => {
  if (name === 'ehsan') {
    return true
  } else {
    return false
  }
})
