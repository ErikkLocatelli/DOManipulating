const img = fetch('./img.png')

img.then(r => r.blob())
.then(body => {
    const blobUrl = URL.createObjectURL(body)
    const blobText = fetch(blobUrl)

})