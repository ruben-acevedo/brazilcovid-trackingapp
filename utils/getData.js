const fetch = require("node-fetch");

const getData = async uf => {
  try {
    const json = await fetch("https://covid19-brazil-api.now.sh/api/report/v1")
      .then(res => res.json())
      .catch(error => console.log(error));

    return json.data.find(data => data.uf === uf.toUpperCase());
  } catch (e) {
    console.log(e);
  }
};

module.exports = getData;
