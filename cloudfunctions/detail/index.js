// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
// 功能：发送ajax请求获取豆瓣电影详情内容
var rp = require("request-promise")
// 引入第三方库 request0promise
exports.main = async (event, context) => {
  var url ="";
  return rp(url).then(res => {
    return res;
  }).catch(err => {
    return err;
  })
}