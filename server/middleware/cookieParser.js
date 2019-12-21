const parseCookies = (req, res, next) => {
  var cookieObj = {};

  if(req.headers.cookie) {
    var cookies = req.headers.cookie.split('; ')
    cookies.forEach((cookie) => {
      var split = cookie.split('=');
      cookieObj[split[0]] = split[1]
    })
  }
  req.cookies = cookieObj
  next()
};

module.exports = parseCookies;