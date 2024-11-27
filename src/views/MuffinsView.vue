<template>
  <div class="product-page">
    <div class="carousel">
      <img
        v-for="(image, index) in images" :src="image" :key="index"
        :class="{ active: index === activeIndex }" alt="Product image"/>
      <div class="dots">
        <span
          v-for="(image, index) in images"
          :key="index"
          :class="{ active: index === activeIndex }"
          @click="activeIndex = index"
          tabindex="0"
          @keyup.enter="activeIndex = index"
          @keyup.space.prevent="activeIndex = index"
        ></span>
      </div>
    </div>

    <h1>{{ productName }}</h1>
    <p class="description">{{ productDescription }}</p>
    <p class="price">{{ productPrice }} €</p>
    <button class="add-to-cart">Ajouter au panier</button>

    <div class="accordion">
      <div
        class="accordion-item"
        @click="toggleAccordion('description')"
        tabindex="0"
        @keyup.enter="toggleAccordion('description')"
        @keyup.space.prevent="toggleAccordion('description')"
      >
        <h3>Description</h3>
        <p v-if="accordionOpen.description">{{ productLongDescription }}</p>
      </div>
      <div
        class="accordion-item"
        @click="toggleAccordion('ingredients')"
        tabindex="0"
        @keyup.enter="toggleAccordion('ingredients')"
        @keyup.space.prevent="toggleAccordion('ingredients')"
      >
        <h3>Ingrédients à ajouter</h3>
        <p v-if="accordionOpen.ingredients">{{ ingredientsToAdd }}</p>
      </div>
      <div
        class="accordion-item"
        @click="toggleAccordion('allergens')"
        tabindex="0"
        @keyup.enter="toggleAccordion('allergens')"
        @keyup.space.prevent="toggleAccordion('allergens')"
      >
        <h3>Allergènes</h3>
        <p v-if="accordionOpen.allergens">{{ allergens }}</p>
      </div>
    </div>
  </div>
  <AppNewsletter/>
</template>

<script setup>
import { ref } from 'vue';

import AppNewsletter from '@/components/AppNewsletters.vue';

import MuffinsImage from '@/assets/images/Cadre-croqué-Muffins-1.png';
import MuffinsImage2 from '@/assets/images/Cadre-croqué-Muffins-2.png';
import MuffinsImage3 from '@/assets/images/Cadre-croqué-Muffins-3.png';

// Define your data
const images = [
  MuffinsImage,
  MuffinsImage2,
  MuffinsImage3,
];
const activeIndex = ref(0);
const productName = 'Les muffins tout choco';
const productDescription = 'Découvrez nos muffins tout choco spécialement conçus pour les personnes diabétiques';
const productPrice = 30;
const productLongDescription = 'Savourez nos muffins tout choco spécialement conçus pour les personnes diabétiques, sans compromis sur le goût. Riches en chocolat, ils sont idéaux pour un plaisir gourmand et sain !';
const ingredientsToAdd = 'Ingredients: Œufs, sucre, beurre, farine, crème, chocolat noir/lait/blanc, beurre, Nutella, noisette, cacahuète, beurre de cacahuète, pate au pistache, pistache, Corn Flakes';
const allergens = 'Lait, Soja, Gluten, Lactose, Œufs, Fruits à coque';

const accordionOpen = ref({
  description: false,
  ingredients: false,
  allergens: false,
});

const toggleAccordion = (section) => {
  accordionOpen.value[section] = !accordionOpen.value[section];
};
</script>

<style scoped>
@font-face {
  font-family: gelica-regular;
  src: url(../assets/fonts/gelica-regular.otf);
}
.product-page {
  padding: 20px;
  margin: auto;
  background-color: rgb(255, 236, 230);
  border-radius: 12px;
  text-align: left;
}

.carousel {
  position: relative;
  width: 100%;
  height: 350px;
  border-radius: 8px;
  margin: 20px auto;
}

.carousel img {
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.5s ease;
  position: absolute;
  left: 0;
}

.carousel img.active {
  opacity: 1;
}

.dots {
  position: absolute;
  bottom: -12px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
}

.dots span {
  width: 10px;
  height: 10px;
  background-color: #fff;
  border-radius: 50%;
  cursor: pointer;
  border: 1px solid #333;
}

.dots span.active {
  background-color: #ff6b6b;
}

h1 {
  font-size: 24px;
  font-family: gelica-regular;
  margin-bottom: 10px;
  color: #333;
  margin-top: 30px;
}

.description {
  font-size: 16px;
  color: #555;
}

.price {
  font-size: 20px;
  color: #ff6b6b;
  margin-bottom: 20px;
}

.add-to-cart {
  background-color: rgba(255, 123, 133, 1);
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.accordion {
  margin-top: 20px;
}

.accordion-item {
  margin-bottom: 10px;
  cursor: pointer;
}

.accordion-item h3 {
  background-color: transparent;
  padding: 10px;
  border-radius: 5px;
  font-size: 18px;
  border: 1px solid rgba(58, 35, 31, 1)
}

.accordion-item p {
  padding: 10px;
  background-color: transparent;
  border-radius: 5px;
  font-size: 14px;
}
</style>
