import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);


const state = {
    a: '123'
}


const mutations = {
    //项目下文件路径
    attachmentUrl(url, width = false){
        if (url && width) {
            const ext = /\.[^\.]+$/.exec(url);
            url = url.replace(/_thumb_(\d+)(.[jpg|png|gif|bmp|jpeg]+)/i, "");
            url += '_thumb_' + width + ext;
        }
        return process.env.BASE_PATH + url;
    },
    apiUrl(path = '') {
        return process.env.BASE_PATH + path;
    }
}

export default  new Vuex.Store({
    state,
    mutations
})
