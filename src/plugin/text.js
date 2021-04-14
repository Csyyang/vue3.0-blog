import { getCurrentInstance } from "vue";
export default {
    loading() {
        const instance = getCurrentInstance();
        instance.proxy.$loading.show();
    },
}