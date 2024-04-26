function handleResponseFromAPI(promise) {
  promise.then(() => {
    console.log('Got a response from the API');
  }).catch(() => {});

  return promise.then(() => ({
    status: 200,
    body: 'success',
  })).catch(() => new Error());
}

export default handleResponseFromAPI;
