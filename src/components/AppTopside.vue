<template>
  <div class="top">
    <img src="./../assets/Logo_principal_sans_baseline_rose.png" alt="logo" class="logo">
    <div class="nav">
      <div class="nav-icons">
        <img
          src="./../assets/Recherche.svg"
          alt="search icon"
          class="icon"
          @click="toggleSearch"
          @keydown.enter="toggleSearch"
          @keydown.space="toggleSearch"
          tabindex="0"
          role="button"
        />
      </div>
      <transition name="slide-right">
        <div v-if="isSearchOpen" class="search-container">
          <label for="down">QUE RECHERCHEZ-VOUS ?
            <input
              type="text"
              v-model="searchQuery"
              class="search-input"
              placeholder="Entrez votre recherche"
              @keydown="handleKeydown"
            />
          </label>
          <button @click="Search" class="recherche-btn">Recherche</button>
        </div>
      </transition>
      <div class="cart">
        <a href="">
          <img src="../assets/Panier.svg" alt="burger" class="icon">
          <span v-if="cartCount > 0" class="cart-counter">{{ cartCount }}</span>
        </a>
      </div>
      <div>
        <img src="../assets/Icône burger.svg" alt="burger" class="icon"
        @click="Menu" @keydown.enter="Menu" @keydownspace="Menu">
      <transition name="slide-right">
      <div v-if="isMenuOpen" class="burger-dropdown">
        <ul v-if="user">
          <li><router-link to="/shop">La Boutique</router-link>
          </li>
          <li><router-link to="/about">A Propos</router-link>
          </li>
          <li><router-link to="/faq">FAQ</router-link>
          </li>
          <li><router-link to="/Contact">Contact</router-link>
          </li>
          <li><router-link to="/PageProfile">Mon Compte</router-link>
          </li>
          <li><a href="/FormLogin" @click="logout" class="deco">Deconnexion</a></li>
        </ul>
        <ul v-else>
          <li><router-link to="/shop">La Boutique</router-link>
          </li>
          <li><router-link to="/about">A Propos</router-link>
          </li>
          <li><router-link to="/faq">FAQ</router-link>
          </li>
          <li><router-link to="/Contact">Contact</router-link>
          </li>
          <li><router-link to="/FormInscription">S'inscrire</router-link>
          </li>
          <li><router-link to="/FormLogin">Se Connecter</router-link>
          </li>
        </ul>

      </div>
    </transition>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const router = useRouter();
const isSearchOpen = ref(false);
const searchQuery = ref('');
const cartCount = ref(0);
const isMenuOpen = ref(false);

const toggleSearch = () => {
  isSearchOpen.value = !isSearchOpen.value;
};
const Menu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const Search = () => {
  if (searchQuery.value) {
    console.log(`Recherche pour : ${searchQuery.value}`);
  } else {
    console.log('Veuillez entrer une recherche');
  }
};

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Enter') {
    Search();
  }
};
const store = useStore();

const user = computed(() => store.getters.getUser);

onMounted(() => {
  store.dispatch('fetchUsers');
});

const logout = () => {
  store.dispatch('logout');
  router.push('/FormLogin');
};
</script>

<style scoped>
@media(max-width: 767px) {
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .top {
    background-color: #FFECE6;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .nav {
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    align-items: center;
  }

  .icon {
    width: 7vw;
    height: 5vh;
    margin: 0 10px;
  }

  .logo {
    width: 34vw;
    height: 10vh;
    padding: 20px 0 20px 30px;
  }

  .search-container {
    position: absolute;
    top: 80px;
    right: 0;
    width: 100vw;
    height: 25.5vh;
    background-color: #FFECE6;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 100;
  }

  .search-input {
    background-color: #FFECE6;
    width: 90%;
    padding: 10px;
    border: none;
    border-bottom: 1px solid #3A231F;
    font-size: 16px;
    margin: 20px;
    outline: none;
  }

  .recherche-btn {
    background-color: #ff7f7f;
    color: white;
    border: none;
    padding: 10px;
    font-size: 14px;
    border-radius: 5px;
    cursor: pointer;
  }

  label {
    font-weight: bolder;
  }

  .slide-right-enter-active, .slide-right-leave-active {
    transition: transform 0.5s ease;
  }

  .slide-right-enter, .slide-right-leave-to {
    transform: translateX(100%);
  }
  .burger-dropdown {
    position: absolute;
    top: 80px;
    right: 0;
    width: 100vw;
    background-color: #FFECE6;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    z-index: 101;
    height: 100%;
  }

  .burger-dropdown ul {
    list-style: none;
    padding: 0;
  }

  .burger-dropdown ul li {
    margin: 10px 0;
  }

  .burger-dropdown ul li a {
    text-decoration: none;
    color: #3A231F;
    font-weight: bold;
    font-size: 20px;
    padding: 5px 0 5px 0;
  }
  li {
    padding: 10px 0 10px 0;
  }
  .burger-dropdown .deco {
    color: #ff7f7f;
  }
}
</style>
