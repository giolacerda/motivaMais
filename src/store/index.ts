import { createStore } from 'vuex'
import { Frase } from '..'

export default createStore({
  state: {
    frases: [] as Frase[],
    fraseAtual: null,
    
  },
  mutations: {
    salvarFrases(state , frases){
     state.frases = frases
    },
    mudarFraseAtual(state, frases){
    state.fraseAtual = frases
    }
  
    
  },
  actions: {
    async carregarFrases({commit}){
      try{
        const response = await fetch('https://raw.githubusercontent.com/giolacerda/MotivaMais-API/refs/heads/main/frases.json')
        const data = await response.json()
        commit('salvarFrases', data)
      } catch(error){
        console.error('Erro ao buscar frase', error)
      }
    }
  },
  
})
