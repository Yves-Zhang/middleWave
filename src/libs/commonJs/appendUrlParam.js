export default function appendUrlParam(url, key, val){
  if (!val){
    return url;
  }
  if (url.indexOf('?') >= 0){
    url = `${url}&${key}=${val}`;
  } else {
    url = `${url}?${key}=${val}`;
  }

  return url;
}
