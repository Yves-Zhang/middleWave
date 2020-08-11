import WSLib from '@tencent/weishi-lib';

export async function loadzzConfig(key, flag2){
  const querys = WSLib.wsUtil.url.getQueryObj(location.href);

  const flag = flag2 || querys.flag || 3;
  const uin = querys.uin || '';

  try {
    const ret = await WSLib.wsUtil.ajax.request({
      url: `https://qzonestyle.gtimg.cn/qzone/qzactStatics/configSystem/data/${key}/config${flag}.js?uin=${uin ||
          ''}`,
      method: 'jsonp',
      timeout: 2000,
      jsonpCallback: `callback_${key}_config${flag}`
    });

    return ret;
  } catch (err){
    console.log('err', err);

    return {isError: true, msg: '配置获取失败, 请稍后再试'};
  }

}

export function webapp(opts) {
  opts = {
    params: {},
    method: 'GET',
    responseType: 'json',
    withCredentials: true,
    ...opts
  };

  if (opts.method.toLocaleUpperCase() === 'POST') {
    opts.headers = opts.headers || {};
    opts.data = opts.data || {};
    opts.headers = {
      'Content-Type': 'application/json; charset=UTF-8',
      ...opts.headers
    };
    opts.data = JSON.stringify(opts.data);
  }

  opts.url = `//h5.weishi.qq.com/webapp/json/${opts.param1}/${opts.param2}`;

  return new Promise(function(resolve, reject) {
    WSLib.wsUtil.cookie.del('access_token', 'qq.com');
    WSLib.wsUtil.cookie.del('access_token', 'qq.com', location.pathname);
    WSLib.wsUtil.ajax
      .request(opts)
      .then(function(res) {
        if (res.ret === 0) {
          resolve(res.data);
        } else {
          // 处理逻辑错误
          // eslint-disable-next-line prefer-promise-reject-errors
          reject({
            code: res.code,
            msg: res.msg,
            ret: res.ret
          });
        }
      })
      .catch(function(e) {
        console.log(e);
        // 超时等其它网络异常统一用-10000处理
        // eslint-disable-next-line prefer-promise-reject-errors
        reject({
          code: -10000,
          msg: '网络请求失败，请稍后再试'
        });
      });
  });
}
export function cgi(opts){
  opts = {
    params: {},
    responseType: 'json',
    withCredentials: true,
    ...opts
  };

  opts.headers = opts.headers || {};
  opts.data = opts.data || {};
  opts.headers = {
    'Content-type': 'application/json',
    ...opts.headers
  };

  let cgiHost;
  const data = JSON.stringify(opts.data);

  opts.data = JSON.stringify({msg: data});
  opts.method = 'POST';
  if (location.host === 'isee.weishi.qq.com'){
    cgiHost = '//api.weishi.qq.com/trpc.weishi.weishi_h5_proxy.weishi_h5_proxy/';
  } else {
    cgiHost = '//testapi.weishi.qq.com/trpc.weishi.weishi_h5_proxy.weishi_h5_proxy/';
  }
  opts.url = `${cgiHost}${opts.key}`;
  delete opts.key;

  return new Promise(function(resolve, reject) {
    WSLib.wsUtil.cookie.del('access_token', 'qq.com');
    WSLib.wsUtil.cookie.del('access_token', 'qq.com', location.pathname);
    WSLib.wsUtil.ajax
      .request(opts)
      .then(function(res) {
        if (res.ret === 0) {
          let val = null;

          try {
            val = JSON.parse(res.msg);
          } catch (e){
            val = res.msg;
          }
          console.log(val);
          resolve(val);
        } else {
          // 处理逻辑错误
          const err = {
            code: res.code,
            msg: res.msg,
            ret: res.ret
          };

          console.log(err);
          // eslint-disable-next-line prefer-promise-reject-errors
          reject(err);
        }
      })
      .catch(function(e) {
        console.log(e);
        // 超时等其它网络异常统一用-10000处理
        // eslint-disable-next-line prefer-promise-reject-errors
        reject({
          code: -10000,
          msg: '网络请求失败，请稍后再试'
        });
      });
  });
}
