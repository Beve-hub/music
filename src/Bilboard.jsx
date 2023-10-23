import axios from 'axios';

const BillboardAPI = {
  apiKey: 'a46ab7ed82msh99d6971629852b0p16c1a3jsnec10ba166c0c',
  baseURL: 'https://billboard-api2.p.rapidapi.com/year-end-chart/top-billboard-200-albums',
};

BillboardAPI.getAlbum = async () => {
  try {
    const response = await axios.get(`${BillboardAPI.baseURL}charts`, {
      params: {
        chart_name: 'hot-100',
        date: 'current',
        key: BillboardAPI.apiKey,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data from Billboard API', error);
    throw error;
  }
};

export default BillboardAPI;
