let cacheData = "appV1";
this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheData).then((cache) => {
      cache.addAll([
        '/static/js/main.chunk.js',
        '/static/js/0.chunk.js',
        '/static/js/bundle.js',
        '/index.html',
        '/',
        '/users'
      ])
    })
  )
})

this.addEventListener("fetch", (event) => {


  // console.warn("url", event.request.url)


  if (!navigator.onLine) {
    if (event.request.url === "http://localhost:3001/static/js/main.chunk.js") {
      event.waitUntil(
        this.registration.showNotification("Internet", {
          body: "Internet not working !!!"
        })
      )
    }
    event.respondWith(
      caches.match(event.request).then((resp) => {
        if (resp) {
          return resp
        }
        let requestUrl = event.request.clone();
        fetch(requestUrl)
      })
    )
  }
})
