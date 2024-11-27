<template>
    <div class="main">
        <div class="contenu">
            <h1>Connexion</h1>
            <form action="submit" class="registration">
                <div class="up">
                    <div class="form-group">
                        <label for="email" class="taille">E-mail</label>
                        <input type="email" required v-model="email" id="email" class="big">
                    </div>
                    <div class="form-group2">
                        <label for="motdepasse" class="taille">Mot De Passe
                        </label>
                        <input type="password" required v-model="motdepasse"
                        id="motdepasse" class="big">
                    </div>
                </div>
                <div class="form-group1">
                    <input type="checkbox" id="rememberMe" v-model="rememberMe">
                    <label for="rememberMe" class="taille">
                        Se souvenir de moi</label>
                </div>
                <button type="button" @click="login">Connexion</button>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore();
const email = ref('');
const motdepasse = ref('');
const rememberMe = ref(false);
const router = useRouter();

onMounted(() => {
  const savedEmail = localStorage.getItem('email');
  const savedPassword = localStorage.getItem('motdepasse');
  if (savedEmail && savedPassword) {
    email.value = savedEmail;
    motdepasse.value = savedPassword;
    rememberMe.value = true;
  }
});
const setTokenStore = (result) => {
  if (result && result.token) {
    try {
      const user = JSON.parse(atob(result.token.split('.')[1]));

      console.log('Utilisateur récupéré:', user);
      store.commit('setUser', user);
      store.commit('setToken', result.token);
      localStorage.setItem('token', result.token);
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('id_user', user.id);

      if (rememberMe.value) {
        localStorage.setItem('email', email.value);
        localStorage.setItem('motdepasse', motdepasse.value);
      } else {
        localStorage.removeItem('email');
        localStorage.removeItem('motdepasse');
      }
      router.push('/PageProfile');
    } catch (error) {
      console.error('Erreur lors du traitement du token:', error);
    }
  }
};

const login = async () => {
  if (!email.value || !motdepasse.value) {
    console.error('Veuillez entrer un email et un mot de passe.');
    return;
  }

  const data = {
    email: email.value,
    motdepasse: motdepasse.value,
  };

  try {
    const response = await fetch('http://localhost:3000/api/users/login', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      console.error('Erreur lors de la connexion:', errorResponse.message || response.statusText);
      return;
    }

    const result = await response.json();
    console.log('Résultat de l\'API:', result);
    if (result && result.token) {
      setTokenStore(result);
    } else {
      console.error('Réponse de l\'API invalide:', result);
    }
  } catch (err) {
    console.error('Erreur durant la connexion: ', err);
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
    margin: 10px 0 10px 0;
}
.registration {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

.up{
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80vw;
  padding-bottom: 10px;
}

.up input{
  width: 80vw;
  border-radius: 10px;
  border: 1px solid #3A231F;
  background-color: #FFF3F0;
  padding: 15px 0 15px 0;
}
.taille {
  font-weight:600;
  font-size: 14px;
  padding-bottom: 5px;
  text-transform: uppercase;
  line-height: 14px;
}
.form-group {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80vw;
}
.form-group2 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80vw;
  margin-bottom: 10px;
}
h1 {
  padding-bottom: 30px;
}
label {
    text-align: start;
}
.form-group1 {
    text-align: start;
    width: 80vw;
    margin-bottom: 20px;
}
#rememberMe {
    width: 15px;
    height: 15px;
}
.form-group1 label {
    font-weight: 400;
    text-transform: none;
    font-size: 18px;
}
input:focus {
  outline: none;
  border: 1px solid #3A231F;
}
}
</style>
