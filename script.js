// Set your keys
const RAPID_PLATFORM_ANALYTICS_URL = '';
const RAPID_CONSUMER_KEY = '';
const RAPID_PLATFORM_ANALYTICS_HOST = '';

const headers = {
  'X-RapidAPI-Key': RAPID_CONSUMER_KEY,
  'X-RapidAPI-Host': RAPID_PLATFORM_ANALYTICS_HOST,
  'Content-Type': 'application/json',
};

// Get log attributes
const timestamp = Math.round(
  Number(context.getVariable('client.received.start.timestamp')) / 1000
);
const messageContent = context.getVariable('message.content');
const httpStatusCode = context.getVariable('message.status.code');
const path = context.getVariable('proxy.basepath');
const endpoint =  context.getVariable('proxy.pathsuffix');
const httpMethod = context.getVariable('request_msg.verb');
const networkClientIP = context.getVariable('client.ip');

const request_start_time = context.getVariable('client.received.start.timestamp');
const request_end_time = context.getVariable('client.received.end.timestamp');
const system_timestamp = context.getVariable('system.timestamp');
const target_start_time = context.getVariable('target.sent.start.timestamp');
const target_end_time = context.getVariable('target.received.end.timestamp');
const total_request_time = system_timestamp - request_start_time;

const req_host = context.getVariable('request_msg.header.host');

const bodyData = [
  {
    apiBaseUrl: context.getVariable("client.scheme") + '://' + req_host + path,
    endpoint: endpoint,
    method: httpMethod,
    status: Number(httpStatusCode),
    timestamp: timestamp,
    originIp: networkClientIP,
    apiLatency:total_request_time,
  },
];

const logRequest = new Request(
  RAPID_PLATFORM_ANALYTICS_URL,
  'POST',
  headers,
  JSON.stringify(bodyData)
);

// Send log record to RapidAPI
httpClient.send(logRequest);