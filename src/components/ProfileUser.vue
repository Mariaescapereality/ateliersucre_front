<template>
  <div class="main">
    <div v-if="user" class="contenu">
      <h2>{{ user.prenom }} {{  user.nom ? user.nom.charAt(0) : ''}}</h2>
      <p>{{ user.email }}</p>
      <div id="menu">
    <div class="menu">
      <button class="menu-item" @click="info">
        <img src="../assets/Icône profil.svg" alt="">
        Vos Infos Personnelles
      </button>
    </div>
    <div class="menu">
      <button class="menu-item">
        <img src="../assets/Icône CB.svg" alt="">
        Vos Données Paiement
      </button>
      </div>
      <div class="menu">
      <button class="menu-item">
        <img src="../assets/Icône commandes.svg" alt="">
        Vos Commandes
      </button>
      </div>
      <div class="menu">
      <button class="menu-item">
        <img src="../assets/Icône favoris (espace client).svg" alt="">
        Vos Box Favoris
      </button>
      </div>
      <div class="menu">
      <button class="menu-item">
        <img src="../assets/Icône fidélité.svg" alt="">
        Votre Programme Fidélité
      </button>
      </div>
      <div>
        <div class="menu">
      <button class="menu-item">
        <img src="../assets/Icône paramètres.svg" alt="">
        Paramètres
      </button>
      </div>
    </div>
    <div class="footer">
      <button @click="logout" class="deco">Déconnexion</button>
      <button class="help-btn">BESOIN D'AIDE</button>
    </div>
    </div>
    </div>
    <div v-else>
      <p>Veuillez vous connecter</p>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const router = useRouter();
const store = useStore();

const user = computed(() => store.getters.getUser);

onMounted(() => {
  store.dispatch('fetchUsers');
});

const logout = () => {
  store.dispatch('logout');
  router.push('/FormLogin');
};

const info = () => {
  const currentUser = user.value;

  if (!currentUser) {
    console.error('Utilisateur non trouvé');
    return;
  }
  const { id } = currentUser;
  console.log('ID récupéré:', id);
  if (id) {
    router.push(`/UpdateProfile/${id}`);
  } else {
    console.error('ID utilisateur non trouvé');
  }
};

</script>

<style scoped>
@media(min-width: 320px) and (max-width: 767px)  {
    .profile-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FCEBE6;
  padding: 20px;
  border-radius: 15px;
  width: 100%;
  max-width: 400px;
  margin: auto;
}

.profile-header {
  text-align: center;
  margin-bottom: 30px;
}

.profile-header h2 {
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  font-weight: bold;
  color: #3A231F;
}

.profile-header p {
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  color: #3A231F;
}

.menu {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
}

.menu-item {
  background-color: #3A231F;
  color: #FFF3F0;
  border: none;
  border-radius: 8px;
  padding: 15px;
  font-size: 18px;
  font-weight: 600;
  text-align: left;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  width: 80vw;
}

.menu-item i {
  margin-right: 10px;
}

.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
}

.logout-btn {
  background-color: transparent;
  color: #FFF3F0;
  border: none;
  border-radius: 8px;
  padding: 10px 30px;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 10px;
}

.help-btn {
  background-color: transparent;
  color: #FF7B85;
  border: 1px solid #FF7B85;
  border-radius: 8px;
  padding: 10px 30px;
  font-size: 14px;
  font-weight: 600;
}
.contenu {
    padding: 20px 0 20px 0;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
}
#menu {
  margin-top: 20px;
}
.deco {
  background-color: #FF7B85;
  color: #FFF3F0;
  border-radius: 8px;
  border: none;
  padding: 10px 30px;
  font-size: 20px;
  font-weight: 600;
}
.footer button {
  margin-bottom: 20px;
}
h2 {
  font-size: 36px;
  font-weight: 800;
}
img{
  margin-right: 20px;
}
}
</style>
