<template>

    <div>
       <router-link :to="{name: 'Login'}"><button class="button is-danger">Sair</button></router-link> 
    


           

            <table class="table center is-fullwidth">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Imagem</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in users" :key="user.id">
                        <td>{{user.id}}</td>
                        <td>{{user.first_name}}</td>
                        <td>{{user.email}}</td>
                        <td><img :src="user.avatar" alt=""></td>
                        <td><router-link :to="{name: 'Edit'}"><button class="button is-success">Editar</button></router-link></td>    
                        <td><button class="button is-danger" @click="showModalUser(user.id)">Deletar</button></td> 
                    </tr>

                </tbody>

            </table>

                    <div :class="{modal: true, 'is-active': showModal}">
                <div class="modal-background"></div>
                <div class="modal-content">
                   <div class="card">
                       <header class="card-header">
                           <div class="card-header-title">
                               Você quer realmente deletar?
                           </div>
                       </header>
                       <div class="card-content">
                           <div class="content">
                               <p>Deletar mesmo assim</p>
                           </div>
                       </div>
                       <footer class="card-footer">
                           <a href="#" class="card-footer-item" @click="hideModal()">Cancelar</a>
                            <a href="#" class="card-footer-item" @click="deleteUser()">Deletar</a>
                       </footer>
                   </div>
                </div>
                <button class="modal-close is-large" aria-label="close" @click="hideModal()"></button>
                </div>



               </div>
          

  
</template>

<script>

import axios from "axios"

export default {

        created(){
            axios.get("https://reqres.in/api/users?page=1").then(res => {
                this.users = res.data.data
            }).catch(err => {
                console.log(err)
            })
        },

        methods: {
            hideModal(){
                this.showModal = false
            },
            showModalUser(id){
                this.deleteUserId = id
                this.showModal = true
            },
            deleteUser(){
                    axios.delete("https://reqres.in/api/users?page=1" + this.deleteUserId).then(res => {
                        console.log(res)
                        this.showmodal = false
                    })
            }
        },

    data(){

        return {
            users: {

            },
            showModal: false,
            deleteUserId: -1
        }



    }


}
</script>

<style>

</style>