import loadScript from './loadScript';
import { wsUtil } from '@tencent/weishi-lib';
// ieg的角色选择器封装，hack了一些cookie的问题
// 必录 gameId qqappid wxappid
// 王者参数：yxzj 1104466820 wx95a3a4d7c627e07d
// 如果type为html，则需要录systemContentId channelContentId areaContentId roleContentId confirmButtonId
export async function initMilo(miloConfig = {}){
  if (!window.milo){
    const loadSucc = await loadScript('//ossweb-img.qq.com/images/js/mobile_bundle/milo.js');

    if (!loadSucc){
      return;
    }
  }
  let roleSelector = null;
  // 设置角色选择器所需要的cookie值

  initGameAuth();
  // 角色选择器 初始化
  window.iUseQQConnect = 1;

  return new Promise(function(resolve){
    // eslint-disable-next-line no-undef
    milo.ready(function(){
      // eslint-disable-next-line no-undef
      need(['biz.roleselector'], function(Roleselector){
        const iAuthType = wsUtil.cookie.get('iAuthType');

        Roleselector.init({
          type: miloConfig.type || 'float',
          'gameId': miloConfig.gameId,
          'isQueryRole': true,
          systemContentId: miloConfig.systemContentId,
          channelContentId: miloConfig.channelContentId,
          areaContentId: miloConfig.areaContentId,
          roleContentId: miloConfig.roleContentId,
          confirmButtonId: miloConfig.confirmButtonId,
          openToOpen: {
            'ams_targetappid': iAuthType === '1' ? miloConfig.qqappid : miloConfig.wxappid, //要转的游戏业务appid
            'sAMSTrusteeship': 1 // 如果为1则走微信/QQ托管，为0则不走微信/QQ托管。默认为0(不走托管)
          },
          onLoginError: function(arg){
            hackRefreshGameAuth();
            miloConfig.error && miloConfig.error(arg);
          },
          onErrorEvent: function(arg){
            hackRefreshGameAuth();
            miloConfig.error && miloConfig.error(arg);
          },
          closeEvent: function(){
            stopRefreshGameAuth();
          },
          openEvent: function(){
            startRefreshGameAuth();
          },
          queryRoleEvent: function(){
            hackRefreshGameAuth();
          },
          submitEvent: function(arg){
            stopRefreshGameAuth();
            hackRefreshGameAuth();
            const {submitData} = arg;

            miloConfig.success && miloConfig.success(submitData);
          }
        });
        roleSelector = Roleselector;
        resolve(roleSelector);
      });
    });
  });
}
const gameAuth = {};
let gameAuthTimer = null;

function hackRefreshGameAuth(){
  // hack方案：ios手Q账号，原来的openid不行，删掉再调refreshGameAuth就可以了
  wsUtil.cookie.del('openid');
  wsUtil.cookie.del('wxnickname'); // 角色选择器种上的种的cookie值，删掉也不报错，不删的话会造成wslogin，灯塔库报错
  refreshGameAuth();
  console.log('gameAuth', gameAuth);
  console.log('document.cookie', document.cookie);
}
function initGameAuth(){
  const iAuthType = wsUtil.cookie.get('iAuthType');
  let appid;
  let acctype;
  let accessToken;
  let openid;
  const innerCookie = parseCookie(document.cookie);

  if (iAuthType === '1'){
    // qq要重到当前域名下，不然会被清除掉
    appid = 1101083114;
    acctype = 'qc';
    accessToken = wsUtil.cookie.get('sSessionKey');
    openid = wsUtil.cookie.get('openid');
  } else {
    appid = 'wx5dfbe0a95623607b';
    acctype = 'wx';
    accessToken = innerCookie.accessToken;
    openid = wsUtil.cookie.get('openid');
  }
  gameAuth.openid = openid;
  gameAuth.appid = appid;
  gameAuth.acctype = acctype;
  gameAuth.access_token = accessToken;
  console.log('gameAuth', gameAuth);
}
function startRefreshGameAuth(){
  stopRefreshGameAuth();
  wsUtil.cookie.set('appid', gameAuth.appid, 'qq.com', location.pathname);
  wsUtil.cookie.set('access_token', gameAuth.access_token, 'qq.com', location.pathname);
  wsUtil.cookie.set('acctype', gameAuth.acctype, 'qq.com', location.pathname);
  wsUtil.cookie.set('openid', gameAuth.openid, 'qq.com');

  gameAuthTimer = setInterval(() => {
    // milo角色选择器 手Q下请求互娱接口都会清掉openid，需要用定时器回种
    refreshGameAuth();
  }, 100);
}
function stopRefreshGameAuth(){
  clearInterval(gameAuthTimer);
  gameAuthTimer = null;
}
function refreshGameAuth(){
  setGameCookie('openid', gameAuth.openid, 'qq.com');
  setGameCookie('access_token', gameAuth.access_token, 'qq.com', location.pathname);
}
function setGameCookie(key, value, domain, path){
  const val = wsUtil.cookie.get(key);

  if ( !val && value){
    // cookie回种只针对cookie被删掉的场景，因此本身就有cookie值的场景不处理
    wsUtil.cookie.set(key, value, (domain || ''), (path || '') );
  }
}
function parseCookie(str) {
  // ios平台上会偶现cookie上有两个accessToken的情况，一个有值，一个没值
  // wslib的那个cookie库没法适配这种情况，所以单独写了这个方法来读accessToken
  return str.split(';').map(v => v.split('=')).reduce((acc, v) => {
    // eslint-disable-next-line no-mixed-operators
    acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1] && v[1].trim() || '');

    return acc;
  }, {});
}
