//took the concept of emoji rain from this code: https://code.sololearn.com/W9MqcRPiaQfe/?ref=app

var ctx, cvs
var emojis=[]
window.onload=function(){
    //document.getElementById("audio").play()
    cvs = document.getElementsByTagName("canvas")[0]
    cvs.width= window.innerWidth
    cvs.height= window.innerHeight
    ctx = cvs.getContext("2d")
    draw()

    var imageSources = [
    "/img/chinyere3.jpg", "/img/chinyere4.jpg", "/img/chinyere5.jpg",
    "/img/chinyere7.png", "/img/chinyere8.png", "/img/chinyere10.jpg", 
    "/img/chinyere11.jpg", "/img/chinyere12.jpg", "/img/chinyere13.jpg"]
    var index = 0;
    setInterval (function(){
        if (index === imageSources.length) {
            index = 0;
        }
        document.getElementsByTagName("img")[0].src = imageSources[index];
        index++;
    } , 3000);
}
function draw(){
    requestAnimationFrame(draw)
    ctx.clearRect(0,0,cvs.width,cvs.height)
    emojis.push(new emo_rain(Math.random()*cvs.width,-50,Math.random()*1))
    emojis.forEach(n=>n.show())
}
function emo_rain(x,y,s) {
    this.x = x
    this.y = y
    this.s = s
    this.emojies= ['🥳','🎂','🤗','🎉','🍔','💕','🥰','🤪','🥳',
    '❤️','💓','💞','💥','💋','💯','🔥','✨','🌠','🧁','🍭','🍮',
    '🍰','🥧','🍩','🍻','🥂','🍾','🍷','🍹','😛','😝']
    this.el = this.emojies[Math.floor(Math.random()*this.emojies.length)]
    this.show= function(){
        ctx.fillText(this.el,this.x,this.y)
        this.update()
        this.empty()
    }
    this.update=function(){
        this.s+=0.005
        this.y+=this.s
    } 
    this.empty=function(){
        if(this.y>cvs.height+100){
            emojis.splice(this,1)
        }
    }
}