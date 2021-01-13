<template>
    <div>
    <hr />
    <h2>Login de usuário</h2>
    <hr />

    <div class="columns is-centered">
     
       <div class="column is-half">
        
        <p>Nome</p>
        <input type="text" placeholder="Nome do usuário" class="input" v-model="name" />
        <hr />
        <p>Trabalho</p>

        <input type="text" placeholder="Trabalho ou Ocupação" class="input" v-model="job"/>
        <hr>
         <button class="button is-success" @click="login()">Logar</button>
        <hr>
         <p>Ou</p>
         <br>
      <router-link :to="{name: 'Register'}"><button class="button is-danger">Cadastre-se</button></router-link>  
       </div>
      </div>
    
     
    </div>
  
</template>

<script>
    import axios from "axios"

export default {
     data(){
      return{
          
          name: '',
          job: '',
         

      }  
    },

    methods: {

        login(){
            axios.post("https://reqres.in/api/users?page=1", {
                name: this.name,
                job: this.job
            }).then(res => {
                    console.log(res)
                    this.$router.push({name: 'User'})
            }).catch(err => {
                console.log(err)
            })
        
        }

    }
}
</script>

<style>

</style>