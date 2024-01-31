export const useFetch = () => {
  let apiHost = `https://${process.env.EXPO_PUBLIC_HOST}`;
  if (__DEV__) {
    apiHost = `http://${process.env.EXPO_PUBLIC_HOST_IP}:8080`;
  }
  return {
    post: async (resource: string, body: any): Promise<Response> =>
      await goFetch('POST', `${apiHost}/${resource}`, body),
    get: async (resource: string, body?: any): Promise<Response> =>
      await goFetch('GET', `${apiHost}/${resource}`, body),
  };
};

const goFetch = async (method: string, url: string, payload?: any): Promise<Response> => {
  return await fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
};
