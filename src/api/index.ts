export const apiBaseRoute = process.env.REACT_APP_API_BASE_URL;

export const usersRouteApi = '/users';
export const userDetailRouteApi = (id: string) => {
  return `/users/${id}`;
};

export const createApiCall = async ({ method = 'GET', path = '', payload = {}, auth = false }) => {
  const headers: any = {
    "Content-Type": "application/json",
  }

  if (auth) {
    // todo handle get Cookie
  }

  return fetch(`${apiBaseRoute}${path}`, {
    headers,
    method,
    cache: "no-cache",
    body: method === 'GET' ? undefined : JSON.stringify(payload)
  })
    .then(response => response.json())
    .catch(error => error)
}