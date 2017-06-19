/**
 * Default function to call the fetch data when currentuser token is required
 * @param  {[action]} action [action to be executed]
 * @param  {[url]} url    [url for the fetch]
 * @return {[int]}        [Returns the error code]
 */
export const defaultFecthGet = (action, url, method, body) => (dispatch, getState) => {

  const token = getState().currentuser.token;
  let config = {
    method: method,
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  if (body){
    config.body = JSON.stringify(body);
    config.headers['Content-type'] = 'application/json';
  }

  return fetch(url, config)
    .then(res => {
      if (res.status === 200) return res.json();
        return res.status;
    })
    .then(obj => {
      if (obj !== false) dispatch(action(obj));
    })
    .catch(err => {
          console.log('error: ', err);
      });
}
