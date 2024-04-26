/*
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

function handleProfileSignup(firstName, lastName, fileName) {
  const userp = signUpUser(firstName, lastName);
  const photp = uploadPhoto(fileName);

  return Promise.allSettled([userp, photp])
    .then((results) => ({ status: 'fulfilled', value: results.value }))
    .catch((error) => ({ status: 'rejected', value: error.reason }));
}

export default handleProfileSignup;
*/
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

function handleProfileSignup(firstName, lastName, fileName) {
  const userPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);

  return Promise.allSettled([userPromise, photoPromise]).then((results) => results.map((result) => {
    if (result.status === 'fulfilled') {
      return {
        status: 'fulfilled',
        value: result.value,
      };
    }
    return {
      status: 'rejected',
      value: result.reason,
    };
  }));
}

export default handleProfileSignup;
