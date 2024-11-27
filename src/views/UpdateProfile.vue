<template>
  <div class="main">
  <div class="update-profile">
    <h2>votre profil</h2>
    <form @submit.prevent="updateProfile">
      <div v-if="user">
        <div class="bloc">
        <div class="form-group1">
          <label for="nom">Nom</label>
          <input type="text" id="nom" v-model="user.nom" required />
        </div>
        <div class="form-group1">
          <label for="prenom">Prénom</label>
          <input type="text" id="prenom" v-model="user.prenom" required />
        </div>
      </div>
        <div class="form-group">
          <label for="adresse">Adresse</label>
          <input type="text" id="adresse" v-model="user.adresse" required />
        </div>
      <div class="bloc">
        <div class="form-group1">
          <label for="ville">Ville</label>
          <input type="text" id="ville" v-model="user.ville" />
        </div>
        <div class="form-group1">
          <label for="codePostal">Code Postal</label>
          <input type="text" id="codePostal" v-model="user.code_postal" required />
        </div>
      </div>
        <div class="form-group">
          <label for="telephone">Téléphone</label>
          <input type="text" id="telephone" v-model="user.telephone" required />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="user.email" required />
        </div>
        <div class="form-group">
          <label for="motdepasse">Mot de passe</label>
          <input type="password" id="motdepasse" v-model="user.motdepasse" />
        </div>
        <button type="submit">Modifier</button>
      </div>
      <div v-else>
        <p>Chargement des données utilisateur...</p>
      </div>
    </form>
  </div>
</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const router = useRouter();
const store = useStore();
const user = ref(null); // Changez initialement en null pour vérifier le chargement

const updateProfile = async () => {
  try {
    const userId = store.getters.getUser?.id; // Utilisez id au lieu de id_user
    console.log('ID de l’utilisateur pour la mise à jour:', userId);
    if (!userId) {
      throw new Error("L'ID de l'utilisateur n'est pas défini pour la mise à jour");
    }

    const userData = {
      ...user.value,
      id: userId, // Référencez l'id directement
    };
    if (!user.value.motdepasse) {
      delete userData.motdepasse; // Supprimez le mot de passe si non modifié
    }

    console.log('Données utilisateur à envoyer:', userData);
    /* eslint-disable */
    await store.dispatch('updateUserProfile', userData);
    alert('Profil mis à jour avec succès');
    router.push('/PageProfile');
  } catch (error) {
    console.error('Erreur dans updateProfile:', error);
    alert('Erreur lors de la mise à jour du profil');
  }
};
/* eslint-disable */
onMounted(async () => {
  try {
    console.log('Début de la récupération du profil utilisateur');
    await store.dispatch('restoreSession'); // Restaurez la session avant de récupérer le profil
    const userFromStore = store.getters.getUser;

    if (!userFromStore || !userFromStore.id) { // Vérifiez l'ID de l'utilisateur
      console.error("L'ID de l'utilisateur est manquant ou les informations utilisateur ne sont pas encore chargées.");
      throw new Error("L'ID de l'utilisateur est manquant.");
    }

    // Récupérer le profil utilisateur après restauration de la session
    user.value = { ...userFromStore };
  } catch (err) {
    console.error('Erreur durant la récupération du profil utilisateur:', err);
  }
});

</script>

<style scoped>
@media(min-width: 320px) and (max-width: 767px)  {
  .main {
    display: flex;
    justify-content: center;
    color: #3A231F;
    background-color: #FFF3F0;
    padding: 10px 0 10px 0;
}
.update-profile {
  width: 60%;
  margin: 0 auto;
}
.form-group {
  margin-bottom: 15px;
}
.form-group label {
  display: block;
  text-transform: uppercase;
  font-size: 14px;
  text-align: start;
}
.form-group input {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border-radius: 10px;
  border: 1px solid #3A231F;
}
button {
  padding: 10px 20px;
  background-color: #FF7B85;
  color: #FFF3F0;
  border: 1px solid #FF7B85;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  text-transform: uppercase;
}
.bloc {
  display: flex;
  width: 100%;
}
.form-group1 input {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border-radius: 5px;
  border: 1px solid #3A231F;
  margin-bottom: 15px;
  border-radius: 10px;
}
.form-group1 {
  margin: 0 4px 0 4px;
}
.form-group1 label {
  display: block;
  text-transform: uppercase;
  font-size: 14px;
  text-align: start;
}
h2 {
  margin: 10px 0 10px 0;
  background-color: #FFF3F0;
}
}
</style>
