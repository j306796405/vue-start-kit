(function (win, doc) {
  const docEl = doc.documentElement
  const resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
  const refresh = function () {
    const w = docEl.clientWidth

    docEl.style.fontSize = 100 * (w / 375) + 'px'

    function setBodyFontSize () {
      if (doc.body) {
        doc.body.style.fontSize = '16px'
      } else {
        doc.addEventListener('DOMContentLoaded', refresh)
      }
    }

    setBodyFontSize()
  }
  refresh()

  if (!doc.addEventListener) return
  win.addEventListener(resizeEvt, refresh, false)
})(window, document)
