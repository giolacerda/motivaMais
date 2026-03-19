<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue'
import { useStore } from 'vuex';
export default defineComponent({
    name: 'HomeMotiva',

    setup() {
        const store = useStore()
        const favoritar = () => {
            alert('Frase favoritada ❤️')
        }
        const trocarFrase = () => {
            const frases = store.state.frases

            const index = Math.floor(Math.random() * frases.length)
            const frase = frases[index]

            store.commit('mudarFraseAtual', frase)
        }

        // carregar API quando entrar na tela
        onMounted(() => {
            store.dispatch('carregarFrases')
        })
        const fraseAtual = computed(() => store.state.fraseAtual)




        return {
            favoritar,
            fraseAtual,
            trocarFrase,

        }
    }


})
</script>

<template>


    <v-card class="card-principal">
        <h1 @click="favoritar">MotivaMais</h1>
        <!-- Favoritar -->
        <v-btn icon class="btn-favoritar">
            <v-icon>mdi-heart-outline</v-icon>
        </v-btn>

        <!-- Texto Motivacional -->
        <span v-if="fraseAtual">
            {{ fraseAtual.texto }}
        </span>

        <span v-else>
            Carregando frase...
        </span>

        <div class="btn-group">
            <!-- Compartilhar -->
            <v-btn icon class="btn-icon">
                <v-icon>mdi-share-variant</v-icon>
            </v-btn>
            <!-- Trocar frase -->
            <v-btn icon class="btn-icon" @click="trocarFrase">
                <v-icon>mdi-swap-horizontal</v-icon>
            </v-btn>
        </div>
    </v-card>

</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Pacifico&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');

.card-principal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 400px;
    width: 1000px;
    border-radius: 10px;
    background-color: #FAFAFA;

}

.card-principal h1 {
    color: #2C2C2C;
    font-family: "Pacifico", cursive;
    font-size: 30px;
    font-weight: 200px;
    top: 65px;
    left: 10px;
}

.card-principal span {
    display: flex;
    justify-content: center;
    align-items: center;

}


.btn-favoritar {
    background: none !important;
    box-shadow: none !important;
    min-width: 0 !important;
    padding: 0 !important;
    border: none !important;
    position: fixed;
    top: 10px;
    right: 20px;

}

.btn-group {
    position: fixed;
    bottom: 20px;
    right: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.btn-icon {
    padding: 12px;
    border-radius: 50%;
    background: transparent !important;
    box-shadow: none !important;
}

.card-principal span {
    padding: 80px;
    align-items: center;
    font-family: Arial, Helvetica, sans-serif;
}
</style>
