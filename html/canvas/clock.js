(function( win, doc ) {
  'use strict'

  function init() {
    clock();
    setInterval(clock, 100)
  }

  function clock() {
    var now = new Date()
    var ctx = doc.querySelector('canvas').getContext('2d')

    ctx.save()
    ctx.clearRect(10, 10, 190, 190)
    ctx.translate(120, 120)
    ctx.scale(0.4, 0.4)
    ctx.rotate(-Math.PI/2)
    ctx.strokeStyle = 'black'
    ctx.fillStyle = 'white'
    ctx.lineWidth = 1
    ctx.lineCap = 'round'
    
    ctx.save()
    for( var i = 0; i < 8; i++ ) {
      ctx.beginPath()
      ctx.rotate(Math.PI/4)
      ctx.moveTo(290, 0)
      ctx.lineTo(240, 0)
      ctx.stroke()
    }
    ctx.restore()

    var sec = now.getSeconds()
    var min = now.getMinutes()
    var hr = now.getHours()
    hr = hr >= 12 ? hr - 12 : hr

    //write Hours
    ctx.save()
    ctx.rotate( hr * (Math.PI/6) +
      (Math.PI/360) * min + (Math.PI/21600) * sec )
    ctx.lineWidth = 1
    ctx.beginPath()
    ctx.moveTo(0, 0)
    ctx.lineTo(180, 0)
    ctx.stroke()
    ctx.restore()

    //write minutes
    ctx.save()
    ctx.rotate( (Math.PI/30) * min + (Math.PI/1800) * sec )
    ctx.lineWidth = 1
    ctx.beginPath()
    ctx.moveTo(0, 0)
    ctx.lineTo(120, 0)
    ctx.stroke()
    ctx.restore()

    // write seconds
    ctx.save()
    ctx.rotate( sec * Math.PI/30 )
    ctx.strokeStyle = 'black'
    ctx.lineWidth = 1
    ctx.beginPath()
    ctx.moveTo(0, 0)
    ctx.lineTo(200, 0)
    ctx.stroke()
    ctx.beginPath()
    ctx.fill()
    ctx.beginPath()

    ctx.restore()

    ctx.beginPath()
    ctx.lineWidth = 10
    ctx.strokeStyle = '#325FA2'

    ctx.arc(0, 0, 290, 0, Math.PI * 2, true)
    ctx.stroke()

    ctx.restore()

  }
  init()
})(window, document)
