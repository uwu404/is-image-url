# is-image-url
a module to check if a string is an image url

# Usage 
```
const isImageURL = require("is-image-url")

const res1 = await isImageURL("https://www.youtube.com/") 
console.log(res1) // expected output: false

const res2 = await isImageURL("https://cdn.discordapp.com/avatars/746092663517872239/100fd96c0db5f6a0cf18f420d2901ac5.png")
console.log(res2) // expected output: true
```
