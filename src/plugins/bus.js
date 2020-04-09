/**
 * author:wastelands
 * Date:2020-04-10 00:13
 * introduce:
 */
import Bus from 'vue';
let install = function (Vue) {
    // 设置eventBus
    Vue.prototype.bus = new Bus();
};
export default {install};