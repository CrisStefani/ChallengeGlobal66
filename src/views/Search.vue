<template>
<div>
  <SearchBar/>
  <div class="item-list">
     {{PokemonList}}
     <ul>
       <li v-for="(name, url) of PokemonList">
         {{ name.name }}
         
       </li>
       
     </ul>
     

    
  </div>
</div>
</template>

<script>
import SearchBar from '../components/SearchBar.vue'
import axios from 'axios'
export default {
  name: 'Search',
  data(){
    return{
      PokemonList: null
    }
  },
  components: {
    SearchBar
  },
  mounted: function() {
      let direccion = 'https://pokeapi.co/api/v2/pokemon/';
      axios.get(direccion).then( data => { 
             
          this.PokemonList = data.data.results;
                    
      })
  },
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
</style>
