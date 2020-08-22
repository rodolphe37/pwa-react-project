export default function serviceworkerDev() {

  let swUrl = `${process.env.PUBLIC_URL}/serviceworker.js`
  navigator.serviceWorker.register(swUrl).then((response) => {
    console.warn("response", response)
  })
}
