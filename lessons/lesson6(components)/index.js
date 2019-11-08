// Vue.component('item',{
//     template: '<li> Hello we created a component</li>'
// })

// var app= new Vue({
//     el:'#app'
// });

Vue.component('advanced', {
    props: ['todo'],
    template: '<li> {{ todo.text }} </li>'
})

var app2 =new Vue({
    el: '#app',
    data: {
        playersList:[
            {id: 0, text: "Wayne Rooney"},
            {id: 2, text: "Edwin Van der Ser"},
            {id: 3, text: "Christiano Ronaldo"},
            {id: 4, text: "Berbatov"},
            {id: 5, text: "Luis Nani"},
            {id: 6, text: "Patrice Evra"},
            {id: 7, text: "Robin van Persie"}
        ]
    }
})
