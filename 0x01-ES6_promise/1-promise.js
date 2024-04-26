function getFullResponseFromAPI(success) {
  const myPromise = new Promise((resolved, rejected) => {
    if (success) {
      resolved({ status: 200, body: 'Succces' });
    } else {
      rejected(new Error('The fake API is not working currently'));
    }
  });
  return (myPromise);
}

export default getFullResponseFromAPI;
