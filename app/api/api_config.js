const apiConfig = {
    baseUrlWS: "ws://localhost",
    baseUrl: "http://localhost",
    port: 8000,
    endpoints: {
      rooms: "/rooms",
    },
    headers: {
      "Content-Type": "application/json",
    },
    timeout: 5000,
  };
  
  export default apiConfig;