const RSS_URL = `https://codepen.io/picks/feed/`;
var headers={};

fetch(RSS_URL, {
    method : "GET",
    mode: 'cors',
    headers: "Access-Control-Allow-Origin",
})
  .then(response => response.text())
  .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
  .then(data => console.log(data))