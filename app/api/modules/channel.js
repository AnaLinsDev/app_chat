import apiConfig from "../api_config.js";
import apiRequest from "../api_request.js";

async function getChannelsAPI() {
  const errorMessage = "Read Rooms List failed.";
  const method = "GET";
  const bodyData = "";
  return apiRequest(apiConfig.endpoints.rooms, method, bodyData, errorMessage);
}

async function createChannelAPI(channelName) {
  const errorMessage = "Create Room failed.";
  const method = "POST";
  const bodyData = {
    name: channelName,
    password: "",
  };
  return apiRequest(apiConfig.endpoints.rooms, method, bodyData, errorMessage);
}

async function joinChannelWS(channelName, userName) {
  const ws = new WebSocket(`${apiConfig.baseUrlWS}/ws/${channelName}?username=${encodeURIComponent(userName)}`);
  
}

export { getChannelsAPI, createChannelAPI, joinChannelWS };
