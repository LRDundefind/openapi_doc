export const applicationHelper = {
    data() {
        return {}
    },
    methods: {
        authFilter(permission = '') {
            const _rolesMenu = this.$store.state.user.rolesMenu;
            //alert(_rolesMenu);
            const type = permission.indexOf('||') != -1 ? '||' : '&&';

            const _permission = permission.split(type);
            let auth = 0;
            _permission.forEach(function (value, index, array) {
                if (_rolesMenu.indexOf(value.replace(/(^\s*)|(\s*$)/g, "")) != -1) {
                    auth++;
                }
            });
            if (type == '&&') {
                return auth == _permission.length;
            } else {
                return auth > 0;
            }

        },
        //项目下文件路径
        attachmentUrl(url, width = false){
            if (url && width) {
                const ext = /\.[^\.]+$/.exec(url);
                url = url.replace(/_thumb_(\d+)(.[jpg|png|gif|bmp|jpeg]+)/i, "");
                url += '_thumb_' + width + ext;
            }
            return process.env.BASE_PATH + url;
        },
        confirmDelete(config, confirmFunction, catchFunction){
            const _this = this;
            const h = this.$createElement;
            const defaultConfig = {
                type: 'warning',
                title: _this.$i18n.t('eleMessageBox.title'),
                message: _this.$i18n.t('eleMessageBox.message'),
                showCancelButton: true,
                confirmButtonText: _this.$i18n.t('eleMessageBox.confirmButtonText'),
                cancelButtonText: _this.$i18n.t('eleMessageBox.cancelButtonText'),
            };
            config = {
                ...defaultConfig,
                ...config
            };
            this.$msgbox({
                type: 'warning',
                title: config.title,
                message: h('p', null, config.message),
                showCancelButton: true,
                confirmButtonText: config.confirmButtonText,
                cancelButtonText: config.cancelButtonText,
                beforeClose: (action, instance, done) => {
                    if (action === 'confirm') {
                        instance.confirmButtonLoading = true;
                        instance.confirmButtonText = config.confirmButtonTextRunning;
                        confirmFunction(action, instance, done);
                        // confirmFunction(function(){
                        //     instance.confirmButtonLoading = false;
                        //     done();
                        // });
                    } else {
                        done();
                    }
                }
            }).then(action => {

            }).catch(() => {

            });


        }
    }
}
Date.prototype.Format = function (fmt) { //author: wchao
  var o = {
    "M+": this.getMonth() + 1, //月份
    "d+": this.getDate(), //日
    "H+": this.getHours(), //小时
    "m+": this.getMinutes(), //分
    "s+": this.getSeconds(), //秒
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度
    "S": this.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}
