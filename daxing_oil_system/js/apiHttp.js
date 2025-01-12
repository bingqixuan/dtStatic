const HTTP_BASE_URL = window.location.protocol + "//" + window.location.host;
const WS_BASE_URL =
  (window.location.protocol.toUpperCase() == "HTTPS:" ? "wss:" : "ws:") +
  "//" +   window.location.host;
const PRO_ENV = "./";
var ajaxUrl = "./";
var stomp = Stomp.over(new WebSocket(WS_BASE_URL + "/dxws/admin/websocket"));

// const PRO_ENV = "./";
// var ajaxUrl = "https://dx.oil.bamtechnology.cn/dxapi/";
// var stomp = Stomp.over(
//   new WebSocket("wss://dx.oil.bamtechnology.cn" + "/dxws/admin/websocket")
// );
