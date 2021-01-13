<template>
  <div>
    <hr />
    <h2>Registro de usuário</h2>
    <hr />

    <div class="columns is-centered">
      <div class="column is-half">
          <div v-if="err != undefined">
              <div class="notification is-danger">
                 
                <p>{{err}}</p>
              </div>
       
          </div>
        <p>Nome</p>
        <input type="text" placeholder="Nome do usuário" class="input" v-model="name" />
        <hr />
        <p>Trabalho</p>

        <input type="text" placeholder="Trabalho ou Ocupação" class="input" v-model="job"/>
        <hr>
         <button class="button is-success" @click="register()">Cadastrar</button>
      </div>
     
    </div>
  </div>
</template>

<script>
import axios from 'axios'


export default {

    data(){
      return{
          
          name: '',
          job: '',
          err: undefined

      }  
    },

    methods: {

        register(){
            axios.post("https://reqres.in/api/users", {
                name: this.name,
                job: this.job
            }).then(res => {
                    console.log(res)
                    this.$router.push({name: 'User'})
            }).catch(err => {
                let msgErro = err.response.data.err
                this.err = msgErro
            })
        
        }

    }




};
</script>



<style>
</style>