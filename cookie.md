Local Storage, Session Storage, Cookie

Local Storage
  - Web Storage API
  - Store data as key/value pair at local browser
  - Data is stored by domain
  - Only be accessed by client
  - Expired time: lifetime, until user clears browser data
  - Limit: ~ 5 to 10MB
  - Actions:
    + set: localStorage.setItem('greet', 'hello')
    + set object: localStorage.setItem('greetgreet', JSON.stringify(myObj))
    + get: localStorage.getItem('greet')
    + delete: localStorage.removeItem('greet')
    + delete all: localStorage.clear()

Session Storage
  - Web Storage API
  - Store data as key/value pair at local browser
  - Data is stored by tab
  - Only be accessed by client
  - Expired time: until user close tab / browser
  - Limit: ~ 5 to 10MB
  - Actions: the same as these actions above

Cookie
  - Store data as key/value pair at local browser
  - Data is stored by domain
  - Can be accessed by both client and server
    + when http request is triggered, cookie is attached to the request header
  - Expired time: vary, set by the web application (max-age | expires)
  - Limit: 4KB
  - Actions:
    + set: document.cookie = 'username=Ted Mosby; max-age=9000'
    + get: document.cookie