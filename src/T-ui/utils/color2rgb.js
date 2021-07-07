/**
 * 16进制颜色转换成RGB
 * @param {String} oldColor 转换前的颜色 必须是#FFFFFF 格式
 * @param {*} transparent  转换后透明度 0-1
 * @param {*} errorFunc 颜色传入错误回调
 * @returns 
 */
function toRGB(oldColor, transparent, errorFunc) {
  // 16进制颜色值的正则
  let reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  // 把颜色值变成小写
  let color = oldColor.toLowerCase();
  if (reg.test(color)) {
    // 如果只有三位的值，需变成六位，如：#fff => #ffffff
    if (color.length === 4) {
      let colorNew = "#";
      for (let i = 1; i < 4; i += 1) {
        colorNew += color.slice(i, i + 1).concat(color.slice(i, i + 1));
      }
      color = colorNew;
    }
    // 处理六位的颜色值，转为RGB
    let colorChange = [];
    for (let i = 1; i < 7; i += 2) {
      colorChange.push(parseInt("0x" + color.slice(i, i + 2)));
    }
    return "rgba(" + colorChange.join(",") + "," + transparent + ")";
  } else {
    errorFunc && errorFunc()
  }
}

export default toRGB