import WSLib from '@tencent/weishi-lib';

export async function loadzzConfig(key, flag2){
  const querys = WSLib.wsUtil.url.getQueryObj(location.href);

  const flag = querys.flag || flag2 || 3;
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
