const canvas = wx.createCanvas()

const image = wx.createImage()
const imgX = canvas.width / 2 - 50
let imgY = 400


const context = canvas.getContext('2d') // 创建一个 2d context
context.fillStyle = '#1aad19' // 矩形颜色

const { windowWidth, windowHeight } = wx.getSystemInfoSync()
function drawRect(x, y){
  context.clearRect(0, 0, windowWidth, windowHeight)
  context.fillRect(x, y, 100, 100)
}
// drawRect(canvas.width / 2 - 50, 0)
const rectX = canvas.width / 2 - 50
let rectY = 0

let touchX = imgX
let touchY = imgY
wx.onTouchMove(function (res) {
  context.clearRect(touchX, touchY, 100, 100); // 清除画布上原有的飞机
  touchX = res.changedTouches[0].clientX // 重新判断当前触摸点x坐标
  touchY = res.changedTouches[0].clientY // 重新判断当前触摸点x坐标
  context.drawImage(image, touchX, touchY);
})

setInterval(function(){
  image.onload = function () {
    // context.drawImage(image, imgX, imgY)
    context.drawImage(image, touchX, touchY)
  }
  image.src = 'images/plane.png'
  drawRect(rectX, rectY++)
}, 16)