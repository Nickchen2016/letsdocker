const img = document.getElementById('back-img');
const img_src = img.src;

window.onload = () => {
        console.log('hello', img_src)

    const canvas = document.createElement('canvas');
    canvas.width = '200'; canvas.height = '200';

    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, canvas.width, canvas.height);
    const imageData = ctx.getImageData(0,0,canvas.width,canvas.height);
    const data = imageData.data;
    console.log('_____', data)
}