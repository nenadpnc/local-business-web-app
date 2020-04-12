import unfetch from 'isomorphic-unfetch';

const http = (url, method = 'get', data, headers = { 'Content-Type': 'application/json' }) =>
  unfetch(url, {
    method,
    body: data ? JSON.stringify(data) : undefined,
    headers
  }).then((res) => {
    if (res.status >= 400) {
      return Promise.reject(res);
    }
    return res.json();
  });

export const getPlaces = () => http(`${process.env.API_URL}/api/places`);
export const getPlaceInfo = (id) => http(`${process.env.API_URL}/api/places/${id}`);