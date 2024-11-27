<template>
  <div class="main">
    <div class="contenu">
        <h1>Dashbord</h1>
        <div>
            <h2>Les Ventes</h2>
            <div class="blog">
            <div class="bloc"></div>
            <div class="bloc"></div>
            </div>
        </div>
        <div class="contain">
            <h2>Paniers</h2>
            <div class="blog2">
            <div class="bloc2"></div>
            <div class="bloc2"></div>
            <div class="bloc2"></div>
            <div class="bloc2"></div>
            </div>
        </div>
        <div>
            <h2>Le Best-seller</h2>
        </div>
        <div>
            <h2>Carte des ventes</h2>
        </div>
    </div>
    <button @click="logout" class="deco">Gérer les produits</button>
  </div>
</template>
<script setup>
import { onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();

onMounted(() => {
  store.dispatch('fetchUsers');
});

const logout = () => {
  router.push('/ListeBox');
};
</script>

<style scoped>
@media(min-width: 320px) and (max-width: 767px)  {
  .main {
    color: #3A231F;
    background-color: #FFF3F0;
    padding: 10px 0 10px 0;
}
    button{
        background-color: #FF7B85;
        color: #FFF3F0;
        border-radius: 10px;
        border: none;
        padding: 10px 30px;
        font-size: 20px;
        font-weight: 600;
    }
    .blog {
      display: flex;
      justify-content: space-around;
    }
    .bloc {
      width: 35vw ;
      height: 45vw;
      border: 1px solid black;
      margin: 10px 0 10px 0;
      border-radius: 10px;
    }
    h2 {
      margin: 10px 0 10px 0;
    }
    .bloc2 {
      flex: 0 1 calc(50% - 20px);
      width: 25vw ;
      height: 22.5vw;
      border: 1px solid black;
      margin: 10px 0 10px 0;
      border-radius: 10px;
    }
    .blog2 {
      display: flex;
      align-items: center;
      justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
  }
}
</style>
