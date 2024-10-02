export default async function asyncUploadUser() {
  try {
    // eslint-disable-next-line no-undef
    const [photo, user] = await Promise.all([uploadPhoto(), createUser()]);
    return {
      photo,
      user,
    };
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }
}
