<template>
    <div class="main">
        <div class="contenu">
            <h1>Inscription</h1>
            <form action="submit" class="registration">
                <div class="up">
                    <div class="form-group1">
                        <label for="nom" class="taille">Nom</label>
                        <input type="text" required v-model="nom" id="nom" class="small">
                    </div>
                    <div class="form-group1">
                        <label for="prenom" class="taille">Prénom</label>
                        <input type="text" v-model="prenom" id="prenom" class="small">
                    </div>
                </div>
                <div class="up2">
                    <div class="form-group">
                        <label for="email" class="taille">E-mail</label>
                        <input type="email" required v-model="email" id="email" class="big">
                    </div>
                    <div class="form-group">
                        <label for="motdepasse" class="taille">Mot De Passe</label>
                        <input type="password" required v-model="motdepasse"
                         id="motdepasse" class="big">
                    </div>
                </div>
                <button type="button" @click="verify">Créer un compte</button>
            </form>
            <div class="connect">
              <p>Déjà un compte? </p>
              <router-link to="/login">Connectez-vous.</router-link>
            </div>
            <div class="help">
              <a href="">Obetenir de l'aide pour la connexion.</a>
            </div>
        </div>
    </div>
    <RouterView />
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const nom = ref('');
const prenom = ref('');
const email = ref('');
const motdepasse = ref('');
const register = async () => {
  const data = {
    nom: nom.value,
    prenom: prenom.value,
    email: email.value,
    motdepasse: motdepasse.value,
  };
  try {
    const response = await fetch('http://localhost:3000/api/users/register', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      console.error('Erreur lors de l\'enregistrement');
      return;
    }
    router.push('/FormLogin');
  } catch (err) {
    console.error('Erreur durant la connexion: ', err);
  }
};
const verify = () => {
  if (nom.value.length >= 2) {
    register();
  } else {
    console.error('Username trop court!');
  }
};
</script>

<style scoped>
@media(min-width: 320px) and (max-width: 767px)  {
  .main {
    display: flex;
    justify-content: center;
    color: #3A231F;
    background-color: #FFF3F0;
}
.contenu {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-top: 10px;
    width: 80vw;
    margin: 8px 0;
}
.registration {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.big {
    width: 60vw;
    height: 4vh;
}

.registration button {
    background-color: #FF7B85;
    color: #FFF3F0;
    border-radius: 10px;
    padding: 10px 0 10px 0;
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 500;
    width: 60%;
    border: none;
    margin-bottom: 20px;
}
.small {
  width: 30vw;
  height: 4vh;
}

label {
  width: 100%;
  text-align: start;
}

.up, .up2 {
  display: flex;
  width: 100%;
  padding-bottom: 10px;
}

.up label, .up2 label {
  display: block;
  width: 80%;
}

.up2 label {
  width: 100%;
}

.up2 input {
  width: 100%;
  border-radius: 10px;
  border: 1px solid #3A231F;
  background-color: #FFF3F0;
}
.up input{
  width: 80%;
  border-radius: 10px;
  border: 1px solid #3A231F;
  background-color: #FFF3F0;
}
.up2 {
  flex-direction: column;
  width: 70vw;
}
.taille {
  font-weight:600;
  font-size: 14px;
  padding-bottom: 5px;
  text-transform: uppercase;
  line-height: 14px;
}
.form-group1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
}
.form-group {
  margin-bottom: 10px;
}
h1 {
  padding-bottom: 30px;
}
.connect {
  display: flex;
  justify-content: center;
  padding: 10px 0 10px 0;
  font-size: 14px;
  font-weight: 400;
}
p{
  padding-right: 5px;
}
a{
  text-decoration-color: #3A231F;
  color: #3A231F;
}
.help {
  margin-bottom: 20px;
  font-size: 14px;
  font-weight: 400;
}
input:focus {
  outline: none;
  border: 1px solid #3A231F;
}
}
</style>
