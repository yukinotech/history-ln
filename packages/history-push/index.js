const historyIns = createBrowserHistory()

historyIns.listen(() => {
  console.log('push done')
})

function pushA() {
  historyIns.push('/')
}
