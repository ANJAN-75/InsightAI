import {tavily} from "@tavily/core"

const tvly = tavily({ apiKey: process.env.TAVILY_API_KEY });


export const searchInternet = async ({ query }) => {
  try {
    const response = await tvly.search(query, {
      maxResults: 5,
    });

    return JSON.stringify(response);
  } catch (err) {
    console.error(err);
    return `Search failed: ${err.message}`;
  }
};