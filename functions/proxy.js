const axios = require("axios");

exports.handler = async (event, context) => {
  const targetURL = "http://16.171.133.40:3001";

  try {
    const response = await axios({
      method: event.httpMethod,
      url: `${targetURL}${event.path}`,
      headers: event.headers,
      data: event.body,
    });

    return {
      statusCode: response.status,
      headers: response.headers,
      body: response.data,
    };
  } catch (error) {
    return {
      statusCode: error.response ? error.response.status : 500,
      body: error.response ? error.response.data : "Internal Server Error",
    };
  }
};
