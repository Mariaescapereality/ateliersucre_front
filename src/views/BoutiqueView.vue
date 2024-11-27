<template>
  <section class="hero">
    <img src="@/assets/images/En-tete_Boutique.webp" alt="Framboise cake" class="hero-image">
    <h1 class="commechef">La boutique</h1>
    <p class="montserrat">
      Explorez notre sélection de boxs
      pâtisserie, chacune conçue pour vous
      faire vivre une expérience sucrée
      unique et délicieuse.
    </p>
    <div class="container-filter">
      <div>
       <label for="sort-select" class="sort-label">
      <select v-model="sortOption" class="sort-select">
        <option value="name">Filtrer</option>
        <option value="priceAsc">Price: Low to High</option>
        <option value="priceDesc">Price: High to Low</option>
      </select>
      </label>
      </div>
      <div>
       <label for="sort-select" class="sort-label">
      <select v-model="sortOption" class="sort-select">
        <option value="name">Trier</option>
        <option value="priceAsc">Price: Low to High</option>
        <option value="priceDesc">Price: High to Low</option>
      </select>
      </label>
      </div>
    </div>
    <!-- Product List -->
<div class="container">
  <div class="product-grid">
    <div v-for="product in filteredAndSortedProducts"
         :key="product.id"
         class="product-card"
         @click="goToProductPage(product.id)"
         tabindex="0"
         @keyup.enter="goToProductPage(product.id)"
         @keyup.space.prevent="goToProductPage(product.id)">
      <img :src="product.image" :alt="product.name" class="product-image" />
      <h5 class="namepr">{{ product.name }}</h5>
      <p class="price">{{ product.price }}€</p>
      <button class="add-to-cart">Ajouter au Panier</button>
    </div>
  </div>
</div>
  </section>
  <AppNewsletter/>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

import AppNewsletter from '@/components/AppNewsletters.vue';

import Fraisier from '@/assets/images/boutique-fraisier.png';
import Muffins from '@/assets/images/boutique-muffins.png';
import Donuts from '@/assets/images/boutique-donuts.png';
import Eclairs from '@/assets/images/boutique-eclairs.png';
import Brownie from '@/assets/images/boutique-brownie.png';
import Cookies from '@/assets/images/boutique-cookies.png';
import TarteCitron from '@/assets/images/boutique-tarte-citron.png';
import Cheesecake from '@/assets/images/boutique-cheesecake.png';

const products = ref([
  {
    id: 1,
    name: 'Fraisier Délice',
    price: 30,
    image: Fraisier,
    description:
      'Réalisez un fraisier frais et gourmand. Des fraises juteuses, une génoise légère et une crème fondante... le parfait équilibre entre tradition et modernité.',
  },
  {
    id: 2,
    name: 'Muffins Tout Choco',
    price: 20,
    image: Muffins,
    description: 'Diabète friendly! Savourez nos délicieux muffins tout chocolat.',
  },
  {
    id: 3,
    name: 'Donuts Vanille-Framboise',
    price: 10,
    image: Donuts,
    description: 'Délicieux donuts à la vanille avec un glaçage à la framboise.',
  },
  {
    id: 4,
    name: 'Éclairs Choco-Café',
    price: 40,
    image: Eclairs,
    description: 'Éclairs moelleux avec une garniture au chocolat et café.',
  },
  {
    id: 5,
    name: 'Brownie Vegan Croquant',
    price: 20,
    image: Brownie,
    description: 'Brownie vegan croquant et fondant, un délice chocolaté.',
  },
  {
    id: 6,
    name: 'Cookies Aux 3 Chocolats',
    price: 10,
    image: Cookies,
    description: 'Cookies gourmands avec trois types de chocolat.',
  },
  {
    id: 7,
    name: 'Les tartelettes au citron meringué',
    price: 20,
    image: TarteCitron,
    description: 'Nos tartelettes au citron meringué, un dessert frais et acidulé.',
  },
  {
    id: 8,
    name: 'Le cheesecake fruits des bois',
    price: 30,
    image: Cheesecake,
    description: 'Découvrez notre cheesecake aux fruits des bois, un dessert crémeux et léger.',
  },
]);

const sortOption = ref('name');
/* eslint-disable */
// Computed property for filtering and sorting products
const filteredAndSortedProducts = computed(() => {
  let filtered = products.value;

  // Sort logic
  if (sortOption.value === 'name') {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortOption.value === 'priceAsc') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortOption.value === 'priceDesc') {
    filtered.sort((a, b) => b.price - a.price);
  }

  return filtered;
});
/* eslint-disable */
// Use router for navigation
const router = useRouter();

// Function to navigate to the product page
const goToProductPage = (productId) => {

  switch (productId) {
  case 1:
    router.push(`/fraisier`, { name: 'Fraisier', params: { id: 1 } });
    break;
    case 2:
    router.push(`/muffins`, { name: 'Muffins', params: { id: 2 } });
    break;
    case 3:
    router.push(`/donuts`, { name: 'Donuts', params: { id: 3 } });
    break;
    case 4:
    router.push(`/eclairs`, { name: 'Eclairs', params: { id: 4 } });
    break;
    case 5:
    router.push(`/brownie`, { name: 'Brownie', params: { id: 5 } });
    break;
    case 6:
    router.push(`/cookies`, { name: 'Cookies', params: { id: 6 } });
    break;
    case 7:
    router.push(`/tartelettecitron`, { name: 'tartelettes', params: { id: 7 } });
    break;
    case 8:
    router.push(`/cheesecake`, { name: 'Cheesecake', params: { id: 8 } });
    break;
}

};
</script>

<style scoped>
*,
::before,
::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
@font-face {
  font-family: MrsSaintDelafield;
  src: url(../assets/fonts/MrsSaintDelafield-Regular.ttf);
}
@font-face {
  font-family: gelica-bolditalic;
  src: url(../assets/fonts/gelica-bolditalic.otf);
}
@font-face {
  font-family: Montserrat;
  src: url(../assets/fonts/Montserrat-Regular.ttf);
}
@font-face {
  font-family: gelica-regular;
  src: url(../assets/fonts/gelica-regular.otf);
}
@font-face {
  font-family: licorice;
  src: url(../assets/fonts/Licorice-Regular.ttf);
}
.hero {
  width: 100%; /* Full width of the section */
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #FFECE6; /* Light pink background */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  color: rgb(55, 55, 55);
}
.hero-image {
  width: 100%;
  height: auto;
  object-fit: cover
}
.commechef {
  font-family: Gelica;
  font-size: 36px;
  font-weight: 600;
  line-height: 42.66px;
  letter-spacing: -0.02em;
  text-align: center;
  color: rgb(55, 55, 55);
}
.montserrat {
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;
  line-height: 19px;
  text-align: center;
  width: 90%;
  margin: 20px auto;
  color: rgb(55, 55, 55);
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px; /* Added some padding for better spacing */
  margin-bottom: 45px;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px; /* Space between grid items */
  width: 100%;
  max-width: 1200px; /* Limit the maximum width of the grid */
  margin: 0 auto; /* Center the grid */
}

.product-card {
  border: 1px solid #eee;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  background-color: #FFECE6;
  transition: transform 0.2s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.namepr {
  text-align: left;
  margin: 5px 0;
  font-size: 1em;
  margin-left: 5px;
  color: rgb(55, 55, 55);
}
.price {
  text-align: left;
  margin-left: 5px;
  font-size: 0.9em;
  color: rgb(55, 55, 55);
}
.product-card:hover {
  transform: scale(1.05); /* Slightly scale up on hover */
}

.product-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.add-to-cart {
  margin-top: 10px;
  background-color: #ff6978;
  color: white;
  border: none;
  padding: 15px 12px;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
}

.add-to-cart:hover {
  background-color: #ff4a56;
}
/*-----sort----*/
.container-filter {
  display: flex;
  gap: 10px;
}

.sort-label {
  margin-bottom: 8px; /* Add some space below the label */
  font-weight: bold; /* Optional: Make the label bold */
}

.sort-select {
  background-color: rgb(255, 153, 102);
  padding: 10px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  color: rgb(255, 236, 230);
}

/* Optional: Change styles on focus for better UX */
.sort-select:focus {
  outline: none; /* Remove default focus outline */
  box-shadow: 0 0 5px rgba(255, 165, 0, 0.5); /* Add a subtle glow effect */
}
</style>
