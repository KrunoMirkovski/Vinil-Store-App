function GetImgUrl(name) {
  return new URL(`../assets/vinyls/${name}`, import.meta.url);
}

export default GetImgUrl;
