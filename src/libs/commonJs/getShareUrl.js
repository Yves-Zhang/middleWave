// 针对微信被封
export default function(prefix, randomMax, obj){
  const arr = location.pathname.split('/');
  // 如果空传obj，location.pathname是/ws/wact/tv_vip_v3/index.html 则target是 tv_vip_v3
  const target = obj || arr[arr.length - 2];
  const hour = innerGetHours();
  const random = innerGetRandom(randomMax);
  const newTarget = `${target}_${prefix}_${hour}_${random}`;

  arr[arr.length - 2] = newTarget;

  return location.origin + arr.join('/');
}
function innerGetHours(){
  let hour = 0;

  try {
    // 增加一个兜底，防止getHours报错
    hour = new Date().getHours();
    if (hour >= 24){
      hour = 0;
    }
  } catch (e){
    hour = 0;
  }

  return hour;
}
function innerGetRandom(max){
  let ret = Math.round(Math.random(0, max) * 100);

  if ( (ret < 0) || (ret > max)) {
    // 增加一个兜底
    ret = 1;
  }

  return ret;
}
