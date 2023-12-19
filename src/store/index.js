import Vue from "vue";
import Vuex from "vuex"
Vue.use(Vuex)
const state={
    isShow:true,
}
export default new Vuex.Store({
    state,
    mutations:{
        changeisShow(state){
            state.isShow == true;
        }
    }
})