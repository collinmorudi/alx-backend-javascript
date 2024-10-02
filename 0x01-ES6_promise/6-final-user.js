/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

/* eslint-disable no-undef */
export default async function handleProfileSignup(firstName, lastName, fileName) {
  const signUpPromise = signUpUser(firstName, lastName);
  const uploadPromise = uploadPhoto(fileName);

  const results = await Promise.allSettled([signUpPromise, uploadPromise]);
    return results.map((result) => ({
        status: result.status,
        value: result.status === 'fulfilled' ? result.value : result.reason,
    }));
}
