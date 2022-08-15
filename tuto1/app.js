const app = Vue.createApp({
    //data, functions
    data(){
        return {
            showBooks: true,
            title: 'Final Empire',
            author: 'aku',
            age: 42
        }
    },
    methods: {
        changeTitle(title){
            // this.title= 'Elden Ring'
            this.title = title
        },
        toggleBooks(){
            this.showBooks = !this.showBooks
        }
    },
});

app.mount('#app');