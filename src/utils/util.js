import {json2html} from '@/utils/service/json-viewer.js';

export default{
  install(Vue,options)
  {
    Vue.prototype.apiUrl = function(path = '') {
        return process.env.BASE_PATH + path;
    }

      Vue.prototype.json2html = json2html;
  }
}