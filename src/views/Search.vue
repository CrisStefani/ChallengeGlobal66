<template>
<div>
  <SearchBar/>
</div>
<div >   
 
     <ul >       
       <li 
       v-for="pokemon of pokemons" :key="pokemons.id" :pokemon = 'pokemon'
        class="list">
         <button class="button" @click="showModal = true">
         <p >{{ pokemon.name }}</p>
         </button>  
         <transition name="fade">
         <div class="modal-overlay" v-if="showModal"></div>
         </transition>

         <transition name="fade">
         <div class="modal" v-if="showModal">
           <div>
             <button class="close" @click="showModal = false"><img src="../assets/close.png" alt=""></button>
             <img class="image-modal" src="../assets/background-image.png" alt="">
             <div class="information">
                <p >{{ pokemon.name }}</p>
             </div>

            </div>

         </div>
         </transition>
        
         

                
         
         
              
         <img  src="../assets/starinactive.png" alt="" >
                 
     
       </li> 
         
     </ul>
       
  </div>
<div>
  <AllButton/>
</div>
</template>

<script>
import {useStore} from  'vuex'
import SearchBar from '../components/SearchBar.vue'
import AllButton from '../components/AllButton.vue';

import { computed, onMounted } from 'vue'




export default {
  name: 'Search',
  data(){
    return{
      pokemonList: null,
      showModal: false,
     
         
    }
    
  },

  
  components: {
    SearchBar,
    AllButton
  },
 
  setup() {
    const store = useStore()
    onMounted(() => {
      store.dispatch('fetchData')
    })
    const pokemons = computed(() => store.state.pokemons) 
  return {pokemons}
  }
  
}

</script>

<style>
.itemlist{
position: absolute;
left: 0%;
right: 0%;
top: 0%;
bottom: 0%;

background: #FFFFFF;
border-radius: 5px;
}
.list{
  align-items: center;
    background-color: #ffffff;
    border-radius: 5px;
    box-shadow: 0px 2px 10px #0000000a;
    display: flex;
    height: 50px;
    overflow: hidden;
    padding: 0 15px;
    width: 570px;
    margin-left: 17%;
    margin-top: 1%;
    

display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: auto;
  align-content: start
}
.btn{
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: auto;
  align-content: start
}
.button {     
    background-color: Transparent;
    background-repeat:no-repeat;
    border: none;
    cursor:pointer;
    overflow: hidden;
    font-family: Lato;
font-style: normal;
font-weight: 500;
font-size: 22px;
    margin: -2%;        
}
.modal-overlay{
   position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 100;
  background: rgba(83, 78, 78, 0.027);
  width: 100%;
}
.modal{
 position: fixed;
 top: 40%;
 left: 45%;
 transform: translate(-50%,-50%);
 background: #FFFFFF; 
 z-index: 101;
 
}
.image-modal{
    width: 550px;
    height: 200px;
    
    
}
.close{
  z-index: 102;
    position: fixed;
    background-color: Transparent;
    background-repeat:no-repeat;
    border: none;
    cursor:pointer;
    overflow: hidden;
    padding: 3%;
    left: 89%;
}
.information{
  width: 550px;
  height: 300px;
  background: #FFFFFF;
  
}
</style>
