function checkrgb(){
    const img = document.getElementById('back-img');
    let colorSum = 0;

    // create canvas
    const canvas = document.createElement('canvas');
    canvas.width = '100'; canvas.height = '100';

    let ctx = canvas.getContext("2d");
    ctx.drawImage(img,0,0);

    let imageData = ctx.getImageData(0,0,canvas.width,canvas.height);
    let data = imageData.data;
    let r,g,b,avg;

    for(let x = 0, len = data.length; x < len; x+=4) {
        r = data[x];
        g = data[x+1];
        b = data[x+2];

        avg = Math.floor((r+g+b)/3);
        colorSum += avg;
    }

    let brightness = Math.floor(colorSum / (canvas.width*canvas.height));
    document.getElementById('font-color').innerHTML = brightness;
}

document.getElementById('font-color').addEventListener('click',()=>{
    checkrgb();
})