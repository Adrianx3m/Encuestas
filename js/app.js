var da=2;
Vue.component('ls-encuestas',{
data:function(){
        return{
            enc:[
                     {id:0,opcion:"",votos:0},
                     {id:1,opcion:"",votos:0}
                    ],
            pregunta:"",
            options:[],
            valor:true
        }
    },
template:`<div>
<div >
    <h1 style="font-size:2em; float:left; width:100%;" class="bg-primary text-white">Generador de encuestas</h1>
    <br />
	<button class="btn btn-danger" style="float:right;">Crear Encuesta</button>
    <br />
<br />
</div>

<p>Ingrese la pregunta</p>
<div>
    <input type="text" v-model="pregunta" class="form-control" style="width:70%; float:left;">
<button class="btn btn-success" style="width:30%; float:right;" @click="guardar">Agregar</button>
</div>
    <br />
    <br />
<div><center>
<label style="width:50%; float:left;">Pregunta abierta<input type="radio" name="que" @click="cambio(0)" class="form-control"></label>
<label style="width:50%; float:right;">Opción múltiple<input type="radio" name="que" @click="cambio(1)" checked="checked" class="form-control"></label>
</center>
</div>
<div v-if="valor==1">
<div v-for="op in enc" :key="op.id" v-if="valor">
    <input type="text" placeholder="Opción" v-model="op.opcion" class="form-control">
<br />
</div>
<button class="btn btn-success btn-block" @click="newoption">Nueva Opción</button>
</div>
<br />
<br />
<div v-for="ask in options" :key="ask.quiz">
<h3>{{ask.quiz}}</h3>
<div v-if="ask.tipe">
<label v-for="abc in ask.answer" :key="abc.id">
{{abc.opcion}}
<input type="radio" disabled="true">
</label>
</div>
<div v-else-if="!ask.tipe">
<input type="text" disabled="true">
</div>
</div>
</div>`,
methods:{
         newoption(){
    var aux={id:da, opcion:"",votos:0};
this.enc.push(aux);
     da=da+1;
},
        guardar(){
     var dicho = {quiz:this.pregunta,tipe:this.valor,answer:this.enc};
this.options.push(dicho);
this.pregunta="";
this.enc=[
                     {id:0,opcion:"",votos:0},
                     {id:1,opcion:"",votos:0}
                    ];
da=2;
},
cambio(val){
if(val==1){
this.valor=true;
da=2;
this.enc=[
                     {id:0,opcion:"",votos:0},
                     {id:1,opcion:"",votos:0}
                    ];
}else if(val==0){
this.enc=[{id:0,opcion:"", respuesta:""}];
this.valor=false;
}
}
}
})
new Vue({
el:"#app",
data:{
},
})