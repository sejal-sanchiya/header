var app = new Vue({
    el : "#app",
    data:{
        links:[
        {id:'1',name: 'HOME'},
        {id:'2',name: 'PROJECTS'},
        {id:'3',name: 'SERVICIES'},
        {id:'4',name: 'CONTACT'},
         
    ],
    selected:''
},
    methods: {
        
        choose(a) {
               this.selected = a
        }  
    } 

}); 
