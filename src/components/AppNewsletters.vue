<template>
  <div class="objet">
    <div class="cercle">
      <div class="half-circle top-left"></div>
      <div class="half-circle top-middle-left"></div>
      <div class="half-circle top-middle-right"></div>
      <div class="half-circle top-right"></div>
    </div>
    <div class="form-container">
      <h2>Rejoignez notre team gourmande</h2>
      <p>
        Rejoignez notre team gourmande pour découvrir des recettes exclusives, des astuces de chef,
        et des offres alléchantes.
      </p>
      <form @submit.prevent="soumettreFormulaire">
        <label for="nom">Nom
          <input type="text" v-model="nom" placeholder="Nom" id="nom" name="nom" required />
        </label>
        <label for="email">Email
          <input type="email" v-model="email" placeholder="Email"
          id="email" name="email" autocomplete="off" required />
        </label>
        <button type="submit">S'inscrire</button>
      </form>
    </div>
    <div class="cercle2">
      <div class="half-circle2 bot-left"></div>
      <div class="half-circle2 bot-middle-left"></div>
      <div class="half-circle2 bot-middle-right"></div>
      <div class="half-circle2 bot-right"></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const nom = ref('');
const email = ref('');

const soumettreFormulaire = () => {
  console.log('Formulaire soumis avec :', {
    nom: nom.value,
    email: email.value,
  });
  nom.value = '';
  email.value = '';
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
* {
  position: relative;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
  bottom: 20%;
}
.objet {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #FFECE6;
  /* height: 100vh; */
}

.cercle,
.cercle2 {
  width: 90vw;
  display: flex;
  justify-content: center;
  margin:0;
}
.cercle2 {
  margin-bottom: 10vh;
}
.half-circle,
.half-circle2 {
  width: 22.5vw;
  height: 7vh;
  background-color: #FF7B85;
}

.half-circle {
  border-radius: 50px 50px 0 0;
}

.half-circle2 {
  border-radius: 0 0 50px 50px;
}

.form-container {
  background-color: #FF7B85;
  width: 90vw;
  height: auto;
  padding: 20px;
  margin: 0;
}

h2 {
  font-size: 26px;
  color: #FFF3F0;
  margin-bottom: 10px;
  padding: 10px;
}

p {
  font-size: 14px;
  color: #FFF3F0;
  margin-bottom: 20px;
  padding: 0 20px;
}

input {
  display: block;
  width: 100%;
  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: #FFECE6;
  margin: 10px 0;
}

button {
  background-color: #FFECE6;
  color: #3A231F;
  border: none;
  padding: 10px;
  margin: 40px 0 10px 0;
  border-radius: 5px;
  cursor: pointer;
  width: 40vw;
}

button:hover {
  background-color: #ffd1d1;
}

label {
  color: #FFECE6;
  display: block;
  text-align: left;
  margin: 10px 20px;
}
</style>
