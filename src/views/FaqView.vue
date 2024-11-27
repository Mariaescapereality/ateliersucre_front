<template>
 <section class="hero">
      <img src="@/assets/images/En-tete_FAQ.webp" alt="Framboise cake" class="hero-image">
      <h1 class="commechef">Vous avez des <br>
      questions sur <br>
      nos boxs ?</h1>
      <p class="montserrat">
        Retrouvez ici nos réponses <br>
        aux questions les plus fréquentes <br>
        à propos de nos boxs.<br>
      </p>
      <div class="accordion">
      <div v-for="(item, index) in items" :key="index" class="accordion-item">
        <div class="accordion-header"
          @click="toggle(index)"
          @keyup.enter="toggle(index)" tabindex="0">
          <span class="iconOpening" v-html="isOpen(index) ? minusIcon : plusIcon"></span>
          <h3>{{ item.title }}</h3>
        </div>
        <transition name="fade">
          <div v-if="isOpen(index)" class="accordion-content">
            <p>{{ item.content }}</p>
          </div>
        </transition>
      </div>
      </div>
      <p class="reponse">Vous n'avez pas trouvé de réponse <br>
      à votre question ?</p>
      <button class="cta-button">contacter nous</button>
      <AppNewsletter/>
 </section>
</template>

<script setup>
import { ref } from 'vue';

import AppNewsletter from '@/components/AppNewsletters.vue';

const items = ref([
  { title: 'Est-ce que c\'est un abonnement que vous proposez ?', content: 'Non, nous sommes 100% transparent avec notre famille' },
  { title: 'Fournissez-vous tous les ingrédients ?', content: 'Pour l\'instant, cette fonctionnalité n\'est pas implémentée ' },
  { title: 'C\'est quoi l\'Atelier Sucré ?', content: 'Pour l\'instant, cette fonctionnalité n\'est pas implémentée ' },
  { title: 'D\'où viennent les ingrédients ?', content: 'Ceci est un secret bien gardé !' },
  { title: 'Les produits ont-ils une date de péremption ?', content: 'Ceci est un secret bien gardé !' },
  { title: 'Dois-je retourner les ustensiles ?', content: 'Ceci est un secret bien gardé !' },
  { title: 'Puis-je annuler une commande ?', content: 'Ceci est un secret bien gardé !' },
]);

const openIndex = ref(null);

const toggle = (index) => {
  openIndex.value = openIndex.value === index ? null : index;
};

const isOpen = (index) => openIndex.value === index;

// SVG icons as strings
const plusIcon = `
  <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16.5" cy="16.5" r="16" transform="rotate(90 16.5 16.5)" fill="#FFECE6" stroke="#3A231F"/>
    <path d="M23.6342 14.215C23.7115 14.1463 23.8024 14.0926 23.9017 14.057C24.0011 14.0214 24.1069 14.0045 24.2132 14.0073C24.3195 14.0101 24.4242 14.0326 24.5212 14.0735C24.6182 14.1143 24.7058 14.1728 24.7788 14.2454C24.8518 14.3181 24.9089 14.4036 24.9468 14.497C24.9847 14.5904 25.0027 14.69 24.9997 14.7899C24.9967 14.8899 24.9728 14.9883 24.9293 15.0795C24.8859 15.1708 24.8237 15.2531 24.7464 15.3218L17.4611 21.7919C17.3108 21.9255 17.1119 22 16.905 22C16.6982 22 16.4992 21.9255 16.3489 21.7919L9.06282 15.3218C8.98385 15.2535 8.92008 15.1712 8.87521 15.0797C8.83035 14.9881 8.80528 14.889 8.80148 14.7882C8.79767 14.6874 8.81519 14.587 8.85303 14.4926C8.89087 14.3982 8.94827 14.3119 9.0219 14.2386C9.09552 14.1653 9.18391 14.1064 9.28192 14.0655C9.37992 14.0246 9.4856 14.0024 9.59282 14.0002C9.70003 13.998 9.80664 14.0158 9.90645 14.0527C10.0063 14.0896 10.0973 14.1448 10.1742 14.215L16.905 20.1919L23.6342 14.215Z" fill="#3A231F"/>
  </svg>`;

const minusIcon = `
  <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16.5" cy="16.5" r="16" transform="rotate(90 16.5 16.5)" fill="#FFECE6" stroke="#3A231F"/>
    <rect x="10" y="15" width="13" height="3" fill="#3A231F"/>
  </svg>`;
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
/* section "hero" */
.hero {
  width: 100%; /* Full width of the section */
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 236, 230, 1); /* Light pink background */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.hero h1,
.hero p {
    text-align: left; /* Выровнять текст слева */
    padding: 25px;
}

.hero-image {
  width: 100%; /* Ensure responsiveness */
  height: auto;
  object-fit: cover;
}

.commechef {
  font-size: 36px;
  font-weight: bolder;
  color: #573b2e; /* Dark brown to match the example */
  margin-bottom: 15px;
  font-family: 'gelica-regular', sans-serif;
  font-weight: 600;
}

.montserrat {
  font-family: Montserrat, sans-serif;
  font-size: 14px;
  margin-bottom: 25px;
  color: #573b2e;
  line-height: 19px;
  text-align: center;
  font-weight: 400;
}
/* accordeon */
.accordion {
    background-color: #fbeae2; /* Soft pink background */
    padding: 10px;
    border-radius: 10px;
    max-width: 600px;
    margin: 0 auto;
}

.accordion-item {
    background-color: #4a3527; /* Dark brown for the accordion headers */
    color: #fff;
    margin: 10px 0;
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
}

.accordion-header {
    display: flex;
    align-items: center;
    padding: 15px 20px;
    font-size: 16px;
}

.accordion-header h3 {
    margin: 0;
    margin-left: 15px; /* Add space between the icon and the text */
    font-weight: normal;
}

.iconOpening {
    font-size: 20px;
    margin-right: 10px; /* Add space between the icon and the text */
}

.accordion-content {
    padding: 10px 20px;
    background-color: #fff; /* White background for content */
    color: #4a3527; /* Dark brown text color */
    border-top: 2px solid #e0e0e0; /* Light border for separation */
    font-size: 14px;
    line-height: 1.5;
}

.fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0;
}
/* button */
.cta-button {
  padding: 15px 25px;
  font-size: 1rem;
  background-color: #FF7B85; /* Bright pink button */
  color: #FFF3F0DD;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-transform: uppercase;
  margin-bottom: 65px;
  margin-top: 40px;
  font-family: Montserrat;
}
/* icons */
.iconOpening {
    display: inline-block;
    width: 33px;
    height: 33px;
    margin-right: 10px; /* Add space between the icon and the text */
    vertical-align: middle;
}
.reponse {
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 400;
  line-height: 19px;
  text-align: center;
}
</style>
