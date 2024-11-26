module.exports.alldown = (url) => 
  new Promise(async (resolve, reject) => {
    const { alldown } = require("rana-all-media-downloader");

    try {
      const { data, msg } = await alldown(url);

      resolve({
        status: true,
        dev: "Mohammad Rana",
        devfb: "https://www./facebook.com/rana.is.busy.okay",
        devwp: "wa.me/+8801752865115", 
        data: data || msg,
      });
    } catch (error) {
      reject({ 
        status: false, 
        error: error.message || "An unexpected error occurred" 
      });
    }
  });
