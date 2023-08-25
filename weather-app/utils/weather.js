const axios = require("axios");

const getForeCast = async (lat, long) => {
    let sUrl = process.env.URL + lat + "&" + long + "&" + process.env.URL2
    console.log(sUrl)
    let res;
    var config = {
        method: "GET",
        url: sUrl
      };
    try {
        res = await axios(config);
      } catch (e) {
        return {
            err:{
                code: "Request error",
                status: 500,
                message: e
            }
        };
      }
      return res.data;
};
module.exports = {getForeCast};

