var app= new Vue({
    el:'#app',
    data:{
       text: "Mandela was a hero"
    },
    methods: {
        reverseStatement: function() {
            this.text = this.text.split('').reverse().join('');
        }
    },
});
