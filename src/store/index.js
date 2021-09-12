import { createStore } from 'vuex'

export default createStore({
  state: {
    pokemons: []
    
  },
  mutations: {
    setPokemons(state, payload){
      state.pokemons = payload
      console.log(state.pokemons) 
    }
  },
  actions: {
    async fetchData({commit}){
      try{
        const res = await fetch('https://pokeapi.co/api/v2/pokemon')
        const data = await res.json()
        commit('setPokemons', data.results)
      } catch (error){
        console.log(error)
      }
    }
  },
  modules: {
  }
})
