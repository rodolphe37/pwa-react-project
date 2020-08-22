// For generateVAPIDKeys
// const webpush = require('web-push');

export default function serviceworkerDev() {

  // when VAPIDKeys is generated
  function determineAppServerKey() {
    const vapidPublicKey = 'BK2hyuJKf0cTYUbmvW6_2gH4lgwSBO_DEdAyldEJJVglYoHQKqw5GQROhNdrCTwYxaVv4mkhYVpPyF_LTX5Ipew'
    return urlBase64ToUint8Array(vapidPublicKey);
  }

  function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
      .replace(/-/g, '+')
      .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }


  let swUrl = `${process.env.PUBLIC_URL}/serviceworker.js`
  navigator.serviceWorker.register(swUrl).then((response) => {
    console.warn("response", response)
    return response.pushManager.getSubscription()
      .then(function (subscription) {
        return response.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: determineAppServerKey()
        })
      })
  })
}


// generateVAPIDKeys()
// const vapidKeys = webpush.generateVAPIDKeys();

// Prints 2 URL Safe Base64 Encoded Strings
// console.log(vapidKeys.publicKey, vapidKeys.privateKey);
