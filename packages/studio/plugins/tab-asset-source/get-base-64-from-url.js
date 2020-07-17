export async function getBase64ImageFromUrl(imageUrl) {
  const res = await fetch(imageUrl);
  const blob = await res.blob();

  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener(
      'load',
      () => {
        resolve(reader.result);
      },
      false
    );

    reader.onerror = () => {
      // eslint-disable-next-line prefer-promise-reject-errors
      return reject(this);
    };
    reader.readAsDataURL(blob);
  });
}
