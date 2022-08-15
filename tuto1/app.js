const app = Vue.createApp({
    //data, functions
    data(){
        return {
            showBooks: true,
            title: 'Final Empire',
            author: 'aku',
            age: 42,
            x: 0,
            y: 0
        }
    },
    methods: {
        changeTitle(title){
            // this.title= 'Elden Ring'
            this.title = title
        },
        toggleBooks(){
            this.showBooks = !this.showBooks
        },
        handleEvent(e,data){
            console.log(e,e.type)
            if(data){
                console.log(data)
            }
        },
        handleMouseMove(e){
            this.x = e.offsetX;
            this.y = e.offsetY;
        }
    },
});

app.mount('#app');