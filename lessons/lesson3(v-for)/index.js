var app= new Vue({
    el:'#app',
    data:{
       todos:[
           {text: "Learn python"},
           {text: "Read about pandas"},
           {text: "Go for lunch"},
           {text: "Go for a date"}
       ]
    }
});

app.todos.push({text: "Call mum"})
