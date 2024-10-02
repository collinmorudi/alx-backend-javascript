/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

/* eslint-disable no-undef */
export default function handleProfileSignup(firstName, lastName, fileName) {
  const signUpPromise = signUpUser(firstName, lastName);
  const uploadPromise = uploadPhoto(fileName);

  return Promise.allSettled([signUpPromise, uploadPromise])
    .then((results) => results.map((result) => ({
      status: result.status,
      value: result.status === 'fulfilled' ? result.value : result.reason,
    })));
}
