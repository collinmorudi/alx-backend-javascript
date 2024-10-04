/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable quotes */
import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const [photo, user] = await Promise.all([uploadPhoto(), createUser()]);
    return {
      photo,
      user,
    };
  } catch (error) {
    console.error("Error during async operations:", error); // Debug log to see the error
    return {
      photo: null,
      user: null,
    };
  }
}
