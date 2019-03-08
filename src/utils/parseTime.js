export function getDateTime (testDate) {
  var date = null
  if (typeof testDate === 'string' || typeof testDate === 'number') {
    date = new Date(parseInt(testDate) * 1000)
  } else {
    date = testDate
  }
  // Y = date.getFullYear()
  // M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
  // D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' '
  var h = (date.getHours() < 10 ? '0' + (date.getHours()) : date.getHours()) + ':'
  var m = (date.getMinutes() < 10 ? '0' + (date.getMinutes()) : date.getMinutes()) + ':'
  var s = (date.getSeconds() < 10 ? '0' + (date.getSeconds()) : date.getSeconds())
  return h + m + s
}

export function getNearlyXValue (data, x) {
  var myX = Math.round(x)
  var tmpX = null
  for (let i = 0; i < data.length; i++) {
    if (data[i]['x'] === myX) {
      tmpX = data[i]['x']
      break
    }
  }
  if (tmpX == null) {
    var larX = null
    for (let i = 0; i < data.length; i++) {
      if (data[i]['x'] > x) {
        larX = data[i]['x']
      }
      break
    }
    var smaX = null
    for (let i = data.length; i < 0; i--) {
      if (data[i]['x'] < x) {
        smaX = data[i]['x']
      }
    }

    if (larX && !smaX) {
      return larX
    } else if (smaX && !larX) {
      return smaX
    } else {
      if (x > (larX - smaX) / 2 + smaX) {
        return larX
      } else {
        return smaX
      }
    }
  } else {
    return tmpX
  }
}
