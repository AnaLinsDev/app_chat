import apiConfig from "./api_config.js";

async function apiRequest(endpoint, method, bodyData, errorMessage) {
  try {
    let url = `${apiConfig.baseUrl}:${apiConfig.port}${endpoint}`;

    const headers = {
      "Content-Type": "application/json",
    };

    const request = {
      method: method,
      headers: headers,
    };

    if (bodyData !== "") {
      request.body = JSON.stringify(bodyData);
    }

    const response = await fetch(url, request);

    const responseData = await response.json();

    if (response.status !== 200) {
      window.alert(`Error: ${errorMessage}`);
    }

    return {
      status: response.status,
      data: responseData,
    };
  } catch (error) {
    console.error(`${errorMessage}:`, error);
    throw error;
  }
}

export default apiRequest;
