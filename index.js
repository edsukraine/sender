module.exports = function sender(method, url, body = null) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()

    xhr.responseType = 'json'
    xhr.setRequestHeader('Content-Type', 'application/json')

    xhr.open(method, url)
    xhr.onload = () => xhr.status >= 400 ? reject(xhr.response) : resolve(xhr.response)
    xhr.onerror = () => reject(xhr.response)
    xhr.send(JSON.stringify(body))
  })
}