<template>
   <section class="hero">
      <img src="@/assets/images/a-propos-applepie.png" alt="Tarte aux pommes" class="hero-image">
      <h1 class="commechef">Notre histoire</h1>
      <p class="montserrat">
        L'Atelier Sucré, c'est l'histoire d'une
        amitié entre nous, Sophie, une mère
        de famille passionnée de pâtisserie, et
        Ludovic, un chef pâtissier.
        <br>
        <br>
        Notre mission est de rendre accessible
        l'expertise professionnelle à domicile,
        sans la complexité et les contraintes associées à la pâtisserie.
        <br>
        <br>
        En combinant la technicité de Ludovic
        et l'approche simplifiée de Sophie, on
        a crée des boxs pratiques et
        écoresponsables, pensées pour que
        chacun puisse vivre le plaisir de la
        pâtisserie à domicile.
      </p>
      <br>
      <div class="word-from-chefs">
        <p class="wordschefs">
        “Ensemble, on a voulu partager notre <br>
        amour des desserts faits maison avec <br>
        le plus grand nombre.”
        </p>
      </div>
    <button class="cta-button">notre boutique</button>
    <div class="cover">
          <div class="bg-cover"></div>
          <h3 class="write"> NOS VALEURS </h3>
    </div>
    <section class="recipe-carousel" ref="carousel" @touchstart="startTouch"
    @touchmove="moveTouch"
    @touchend="endTouch">
    <div class="main">
      <div class="contenu"
      v-for="(slide, index) in slides"
      :key="index" v-show="currentIndex === index">
        <div class="carre">
          <h5>{{ slide.title }}</h5>
          <p>{{ slide.description }}</p>
          <!-- Decorative elements -->
          <div class="dent dent1"></div>
          <div class="dent dent2"></div>
          <div class="whitestuff"></div>
        </div>
      </div>
    </div>
    <div class="empty"></div>
    <div class="cover">
          <div class="bg-cover"></div>
          <h3 class="write"> NOTRE OBJECTIF </h3>
    </div>
    <p>Permettre aux familles de réaliser <br>
    eux-mêmes des recettes gourmandes de <br>
    qualité professionnelle sans prise de tête, <br>
    avec des produits éco-responsable.</p>
    </section>
    <button class="cta-button">contacter nous</button>
    </section>
    <AppNewsletter/>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
// import Hammer from 'hammerjs';

import AppNewsletter from '@/components/AppNewsletters.vue';
// Define slides data (you can expand this with images or other elements)
const slides = [
  {
    title: 'DES RECETTES FACILES À SUIVRE',
    description: 'Nos fiches recettes sont détaillées et conçues pour que tout le monde puisse les réaliser, même sans expérience en pâtisserie.',
  },
  {
    title: 'UN INGRÉDIENT DE QUALITÉ',
    description: 'Nos recettes utilisent des ingrédients de haute qualité pour garantir des résultats délicieux à chaque fois.',
  },
  {
    title: 'UN SUIVI PERSONNALISÉ',
    description: 'Bénéficiez d\'un suivi personnalisé pour chaque recette afin de vous aider à réussir vos créations.',
  },
];

// Current slide state
const currentIndex = ref(0);
const currentSlide = ref(slides[currentIndex.value]);

// Update current slide
const updateSlide = (newIndex) => {
  if (newIndex < 0) {
    currentIndex.value = slides.length - 1;
  } else if (newIndex >= slides.length) {
    currentIndex.value = 0;
  } else {
    currentIndex.value = newIndex;
  }
  currentSlide.value = slides[currentIndex.value]; // Update the current slide reference
};

// Swipe detection variables
let startX = 0;
let endX = 0;

// Start touch event
const startTouch = (e) => {
  startX = e.touches[0].clientX;
};

// Move touch event
const moveTouch = (e) => {
  endX = e.touches[0].clientX;
};

// End touch event
const endTouch = () => {
  if (startX > endX + 50) {
    // Swipe left (next slide)
    updateSlide(currentIndex.value + 1);
  } else if (startX < endX - 50) {
    // Swipe right (previous slide)
    updateSlide(currentIndex.value - 1);
  }
};

// Auto-slide function
let autoSlideInterval = null;

const startAutoSlide = () => {
  autoSlideInterval = setInterval(() => {
    updateSlide(currentIndex.value + 1);
  }, 5000); // Slide every 5 seconds
};

const stopAutoSlide = () => {
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval);
  }
};

// On mounted and unmounted lifecycle hooks
onMounted(() => {
  startAutoSlide(); // Start automatic sliding
});

onUnmounted(() => {
  stopAutoSlide(); // Stop auto sliding on component unmount
});
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
  font-family: 'gelica-bolditalic', sans-serif;
}

.montserrat {
  font-family: Montserrat, sans-serif;
  font-weight: bolder;
  font-size: 14px;
  margin-bottom: 25px;
  color: #573b2e;
  line-height: 19px;
  text-align: left;
}
/* green div */
.word-from-chefs {
  background: rgba(131, 195, 168, 1);
  width: 100%;
  height: 209px;
  display: flex;
  align-items: center;
}
.wordschefs {
  color: rgba(255, 243, 240, 0.87);
  font-family: Montserrat;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  font-style: italic;
}
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
/* orange */
.cover {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center; /* Center horizontally */
  justify-content: center; /* Center vertically */
  width: fit-content;
  margin: 0 auto 30px auto; /* Center horizontally on the page */
}

.bg-cover {
  width: 100%;
  height: 10px;
  background-color: #FF9966;
  position: absolute;
  top: 6px;
  padding: 8px;
}

.write {
  position: relative;
  top: 0;
  padding-bottom: 10px;
  font-family: Montserrat, sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 19.5px;
  letter-spacing: 0.05em;
  text-align: center;
  z-index: 1; /* Ensures it stays on top of the background */
}

.empty {
  width: 100%;
  height: 75px;
}
/* bited caroussel */
.recipe-carousel {
  max-width: 600px;
  background-color: rgb(255, 236, 230);
  padding: 20px;
  border-radius: 15px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.main {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: rgb(255, 236, 230);
}

.contenu {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.carre {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border: 2px solid rgb(0, 0, 0);
  border-radius: 20px;
  background-color: rgb(255, 236, 230);
  width: 300px;
  height: 200px;
  text-align: center;
}

.whitestuff {
  background-color: rgb(255, 236, 230);
  height: 60px;
  width: 10px;
  position: absolute;
  bottom: 0;
  left: -12px;
}

h5, p {
  width: 100%;
  padding-top: 20px;
}

.dent {
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: rgb(255, 236, 230);
}

.dent1 {
  width: 30px;
  height: 60px;
  bottom: -3px;
  left: -3px;
  border-radius: 0 100px 50px 0;
  border: 3px solid rgb(0, 0, 0);
}

.dent2 {
  width: 60px;
  height: 30px;
  border: 3px solid black;
  bottom: -3px;
  left: -3px;
  border-radius: 50px 50px 0 0;
}

.carre::before {
  border: none;
  content: "";
  position: absolute;
  bottom: -36px;
  left: -2px;
  border-radius: 50%;
  width: 57px;
  height: 60px;
  background-color: rgb(255, 236, 230);
  z-index: 1;
}

.carre::after {
  content: "";
  position: absolute;
  bottom: -6px;
  left: -5px;
  border-radius: 0 100px 50px 0;
  width: 30px;
  height: 61px;
  background-color: rgb(255, 236, 230);
  z-index: 1;
}

/* Navigation buttons */
.nav-button {
  background-color: rgba(255, 255, 255, 0.7);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  font-size: 24px;
  padding: 10px;
  transition: background-color 0.3s;
}

.left {
  left: 10px;
}

.right {
  right: 10px;
}

.nav-button:hover {
  background-color: rgba(255, 255, 255, 1);
}
</style>
