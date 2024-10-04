/* eslint-disable no-nested-ternary */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signUpPromise = signUpUser(firstName, lastName);
  const uploadPromise = uploadPhoto(fileName);

  return Promise.allSettled([signUpPromise, uploadPromise])
    .then((results) => results.map((result) => ({
      status: result.status,
      value: result.status === 'fulfilled'
        ? result.value
        : (result.reason instanceof Error ? result.reason.toString() : result.reason),
    })));
}
