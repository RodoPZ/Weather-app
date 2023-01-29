import { Handler, HandlerEvent } from "@netlify/functions";
import axios from "axios";
export const handler: Handler = async (event: HandlerEvent) => {
  const selection = event.queryStringParameters?.selection;
  const location = event.queryStringParameters?.location;
  const days = event.queryStringParameters?.days;
  const airquality = event.queryStringParameters?.airquality;
  const alerts = event.queryStringParameters?.alerts;
  const APIKEY = process.env.VITE_API;

  const Url = `https://api.weatherapi.com/v1/${selection}?key=${APIKEY}&q=${location}&days=${days}&aqi=${airquality}&alerts=${alerts}`;

  try {
    const { data } = await axios.get(Url);
    return {
      statusCode: 200,
      body: JSON.stringify({ data }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error }),
    };
  }
};
