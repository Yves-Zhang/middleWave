export default function(url, needRemove){

  return new Promise(function(resolve, reject){
    const script = document.createElement('script');

    script.type = 'text/javascript';
    script.src = url;
    script.onload = () => {
      resolve(true);
      needRemove && document.body.removeChild(script);
    };
    script.onerror = () => {
      reject(new Error('load script error'));
      needRemove && document.body.removeChild(script);
    };
    document.body.appendChild(script);
  });

}
