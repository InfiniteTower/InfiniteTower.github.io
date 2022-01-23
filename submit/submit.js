Vue.createApp({
    data() {
        return {
            nameinput: '',
            selectinput: '',
            linkinput: ''
        }
    }
}).mount('#v-model-basic')

console.log(nameinput, selectinput, linkinput);