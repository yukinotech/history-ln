function pushA() {
  history.pushState({}, '', '/a')
}

window.addEventListener('popstate', (_, e) => {
  // 
  console.log('on popstate', e)
})
