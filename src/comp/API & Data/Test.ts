import axios from "axios";

const idGen = (): string => (Math.random() + 1).toString(36).substring(6);

axios
  .request({
    method: "GET",
    url: "https://ulvis.net/API/write/get",
    params: {
      url: "https://www.netfilx.com",
      custom: idGen(),
    },
  })
  .then(res => {
    console.log(res.data);
  })
  .catch(err => {
    console.log(err);
  });
