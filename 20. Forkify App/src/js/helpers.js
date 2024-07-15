// Functions that are used again and again are store here
export const getJSON = async function (url) {
  try {
    // API Request
    const res = await fetch(
      `${url}`
      // `https://forkify-api.herokuapp.com/api/v2/recipes/664c8f193e7aa067e94e863b`
    );

    // Convert to Js Object
    const data = await res.json();

    // Check Response
    if (!res.ok) {
      throw new Error(`${data.message}(${res.status})`);
    }

    // Return the JSON Data
    return data;
  } catch (err) {
    throw err;
  }
};
