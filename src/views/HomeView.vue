<template>
  <CookieBanner />
    <section class="hero">
      <img src="@/assets/images/up-homepage-pink-wave.png" alt="Delicious Cake" class="hero-image">
      <h1 class="commechef">Des pâtisseries <br>
        maison, comme<br>
        un chef !</h1>
      <p class="montserrat">
        Découvrez l'art de la pâtisserie chez<br>
        vous avec nos boxs prêtes à l'emploi.<br>
        Tout ce qu'il vous faut, des ingrédients<br>
        aux ustensiles, pour des desserts<br>
        savoureux et inoubliables.
      </p>
      <br>
      <button class="cta-button" @click="goToBoutique">découvrir nos boxs</button>
    </section>
    <section class="word-from-chefs">
      <h2 class="mot">Le mot des chefs</h2>
      <p class="wordschefs">
        À L’Atelier Sucré, notre mission est de <br>
        rendre la pâtisserie accessible à tous.<br>
        Nous avons conçu chaque recette pour<br>
        que vous puissiez savourer l’expérience<br>
        de pâtisser chez vous, sans stress.<br>
        Laissez-nous vous guider à travers des<br>
        étapes simples et créatives pour<br>
        des desserts qui enchanteront vos papilles<br>
        et celles de vos proches. À vos tabliers !
      </p>
      <div class="chefs">
        <div class="chef">
          <img src="../assets/images/sophie.png" alt="Sophie" />
          <p class="chef1">Sophie</p>
        </div>
        <div class="chef">
          <img src="../assets/images/ludovic.png" alt="Ludovic" />
          <p class="chef2">Ludovic</p>
        </div>
        <br>
      </div>
    </section>
    <!-- Why Choose Us Section -->
    <section class="why-choose-us">
      <h2 class="pourquoi">Pourquoi choisir <br>
          l'Atelier Sucré ?</h2>
        <div class="cover">
          <div class="bg-cover"></div>
          <h3 class="write"> ON VOUS DIT TOUT</h3>
        </div>
        <img class="love" src="../assets/images/f4fe5f29d96a29d6e7bd8d44796cf9f5.png" alt="">

        <div class="main">
            <div class="contenu">
                <div class="carre">
                    <h5>DES RECETTES FACILES À SUIVRE</h5>
                    <p>
                        Nos fiches recettes sont <br>
                        détaillées et conçues pour <br>
                        que tout le monde puisse <br>
                        les réaliser, même sans <br>
                        expérience en pâtisserie.
                    </p>
                    <!-- Dents en bas à gauche -->
                    <div class="dent dent1"></div>
                    <div class="dent dent2"></div>
                    <div class="whitestuff"></div>
                </div>
            </div>
        </div>

      <button class="cta-button-2" @click="goToBoutique">choisir notre box</button>
    </section>
    <section class="fraisier">
      <h2 class="labox">La box <br>
        incontournable <br>
        de l’Atelier sucré</h2>
        <div class="cover2">
          <div class="bg-cover2"></div>
          <h3 class="write2"> LA BOX FRAISIER</h3>
        </div>
        <p class="montserrat">
        Réalisez un fraisier frais et gourmand, <br>
        grâce à notre box complète. Des fraises <br>
        juteuses, une génoise légère <br>
        et une crème fondante… ce dessert <br>
        est le parfait équilibre entre tradition <br>
        et modernité.
        </p>
        <img class="fraisier1" src="../assets/images/fraisier_ac.png" alt="Fraisier">
        <p class="fr">Avec cette box, vous recréerez chez vous <br>
         ce grand classique, avec la satisfaction <br>
         de l’avoir fait de vos propres mains !</p>
        <p class="sophie">Sophie</p>
        <button class="cta-button-2" @click="goToBoutique">commander la box fraisier</button>
    </section>
    <section class="delice">
      <h2 class="nosclients">Les délices <br>
        de nos clients</h2>
      <p class="creation">Découvrez les créations gourmandes de notre communauté !</p>
      <div class="carousel-container">
        <button class="prev-btn" @click="prevSlide">&lt;</button>
          <div class="carousel" :style="{ transform: `translateX(${currentSlide * -260}px)` }">
            <div class="card2" v-for="(item, index) in items" :key="index">
              <img :src="item.image" :alt="item.alt" class="food-img">
                <div class="overlay">
                <p class="client-name">{{ item.name }}</p>
              </div>
            </div>
          </div>
        <button class="next-btn" @click="nextSlide">&gt;</button>
      </div>
    </section>
    <section class="review-carousel"
      @touchstart="startTouch"
      @touchmove="moveTouch"
      @touchend="endTouch"
    >
      <h2 class="title">Nos gourmands vous disent tout</h2>
      <p class="review-text">"{{ currentReview.text }}"</p>

      <!-- Reviewer image and details on the same level -->
        <div class="reviewer">
          <img :src="currentReview.image" alt="Reviewer Image" class="reviewer-image" />
          <div class="reviewer-details">
            <p class="reviewer-name">{{ currentReview.name }}</p>
            <div class="reviewer-stars">
              <span v-for="n in 5"
                :key="n"
                class="star"
                :class="{ active: n <= currentReview.stars }"
              >★</span>
            </div>
          </div>
        </div>
        <!-- Call to Action button -->
        <button class="cta-button-orange" @click="goToBoutique">DÉCOUVRIR NOS BOXS</button>
    </section>
    <AppNewsletter/>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import annaImage from '@/assets/images/anna-b.png';
import userImage from '@/assets/images/ludovic.png';
import brownieImage from '@/assets/images/Brownie.png';
import fraisierImage from '@/assets/images/Fraisier.png';

import CookieBanner from '@/components/AppCookiesBanner.vue';
import AppNewsletter from '@/components/AppNewsletters.vue';

const currentSlide = ref(0);
const items = ref([
  {
    image: brownieImage,
    alt: 'Brownies',
    name: 'Johanna M.',
  },
  {
    image: fraisierImage,
    alt: 'Cake',
    name: 'Julien D.',
  },
]);

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % items.value.length;
};

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + items.value.length) % items.value.length;
};

const reviews = [
  {
    name: 'Anna B.',
    text: "Je n'avais jamais fait de fraisier avant, et avec cette box, c'était un jeu d’enfant ! Les ingrédients sont de qualité et le résultat, délicieux.",
    stars: 5,
    image: annaImage,
  },
  {
    name: 'Julien D.',
    text: "La box m'a permis de réaliser une superbe tarte. J'ai adoré la simplicité et la qualité des produits.",
    stars: 4,
    image: userImage,
  },
  {
    name: 'Marie C.',
    text: "Un vrai régal ! J'ai pu préparer des brownies fondants en suivant la recette.",
    stars: 5,
    image: annaImage,
  },
];

// Current review state
const currentIndex = ref(0);
const currentReview = ref(reviews[currentIndex.value]);

// Update current review
const updateReview = (newIndex) => {
  if (newIndex < 0) {
    currentIndex.value = reviews.length - 1;
  } else if (newIndex >= reviews.length) {
    currentIndex.value = 0;
  } else {
    currentIndex.value = newIndex;
  }
  currentReview.value = reviews[currentIndex.value];
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
    // Swipe left (next review)
    updateReview(currentIndex.value + 1);
  } else if (startX < endX - 50) {
    // Swipe right (previous review)
    updateReview(currentIndex.value - 1);
  }
};

const router = useRouter();

const goToBoutique = () => {
  router.push('/shop', { name: 'Boutique' });
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
.chef1 {
  font-family: MrsSaintDelafield;
  color: #ffe6e6;
  font-size: 25px;
  font-weight: 400;
  line-height: 38.13px;
  text-align: center;

}
.chef2 {
  font-family: licorice;
  color: #ffe6e6;
  font-size: 25px;
  font-weight: 400;
  line-height: 38.13px;
  text-align: center;
}
/* Up pink page*/
.hero {
  width: 100%; /* Full width of the section */
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #FFECE6; /* Light pink background */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.hero-image {
  width: 100%; /* Ensure responsiveness */
  height: 450px;
  object-fit: cover;
}

.main-text {
  padding: 20px;
  text-align: center;
  background-color: #ffe6e6; /* Background for text content */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */
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
}
.main-text p {
  font-size: 1.1rem;
  color: #573b2e; /* Dark brown text */
  line-height: 1.5;
  margin-bottom: 20px;
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
  margin-bottom: 45px;
  font-family: Montserrat;
}

.cta-button:hover {
  background-color: #e65a50; /* Slightly darker on hover */
}

.cta-button-2 {
  padding: 15px 25px;
  font-size: 1rem;
  background-color: #FF7B85; /* Bright pink button */
  color: #FFF3F0DD;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-transform: uppercase;
  margin-bottom: 45px;
  font-family: Montserrat;
  margin-top: 45px;
}
/* Chefs */
.chefs {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding-bottom: 50px;
}

.commechef {
  color: #3A231F;
  font-family: Gelica;
  font-size: 36px;
  font-weight: 600;
  line-height: 40px;
  letter-spacing: -0.02em;
  text-align: center;
}

.chef img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
.word-from-chefs {
  background-color: #FF7B85;
}
/* Why Choose Us Section */
.why-choose-us {
  padding: 40px 20px;
  background-color: rgba(255, 243, 240, 0.87);
; /* Off-white */
  text-align: center;
}

.mot {
  font-family: gelica-regular;
  font-style: normal;
  font-size: 32px;
  font-weight: 600;
  color: #FFF3F0DD;
  padding-top: 60px;
}

.wordschefs {
  margin-top: 10px;
  font-size: 16px;
  color: #FFF3F0DD;
  padding-top: 30px;
  padding-bottom: 45px;
  font-family: Montserrat;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
}
/*orange line */
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
.pourquoi {
  padding-top: 30px;
  text-align: center;
  font-size: 30px;
  font-family: gelica-bolditalic;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: -0.01em;
  margin-bottom: 20px;
}
.love {
  margin-bottom: 30px;
  width: 296px;
  height: 230px;
  gap: 0px;
  opacity: 0px;

}
/*bited cookie */
.main {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: rgba(255, 236, 230, 1);
}

.contenu {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: rgb(255, 243, 240);
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
    background-color: rgba(255, 236, 230, 1);
;
    width: 300px;
    height: 200px;
    text-align: center;
}
.whitestuff {
  background-color: #fff4f2;
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
    background-color: #FFF3F0DD;
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
    background-color: #fff4f2;
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
    background-color: #fff4f2;
    z-index: 1;
}
/* fraisier section*/
.fraisier {
  text-align: center;
  background: rgba(255, 236, 230, 1);
;
}
.labox{
  padding-top: 60px;
  text-align: center;
  font-size: 30px;
  font-family: gelica-bolditalic;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: -0.01em;
  margin-bottom: 25px;
}
.fr {
  text-align: center;
  padding-bottom: 25px;
  font-family: Montserrat;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
}
/*orange line */
.cover2 {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center; /* Center horizontally */
  justify-content: center; /* Center vertically */
  width: fit-content;
  margin: 0 auto 30px auto; /* Center horizontally on the page */
}

.bg-cover2 {
  width: 100%;
  height: 10px;
  background-color: rgba(255, 123, 133, 1);
  position: absolute;
  top: 6px;
  padding: 8px;
}

.write2 {
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
.fraisier1 {
  height: 231px;
  width: 297px;
  margin-bottom: 30px;
}
.sophie {
  font-family: MrsSaintDelafield;
  color: rgba(58, 35, 31, 1);
  font-size: 25px;
  font-weight: 400;
  line-height: 38.13px;
  text-align: center;
  margin-top: 20px;
}
/* section orange delice de clients */
.delice {
  background: rgba(255, 153, 102, 1);
}
.nosclients {
  padding-top: 60px;
  text-align: center;
  font-family: gelica-regular;
  font-weight: 600;
  font-size: 30px;
  line-height: 32px;
  letter-spacing: -0.01em;
}
.creation {
  font-family: Montserrat, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  padding-top: 20px;
}
/*caroussel delices de clients */
.carousel-container {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.carousel {
  display: flex;
  transition: transform 0.3s ease-in-out;
  margin-top: 35px;
  padding-bottom: 60px;
  justify-content: space-evenly;
}

.card2 {
  width: 154px;
  height: 189px;
  position: relative;
  border-radius: 20px;
  overflow: hidden;
}

.food-img {
  width: 100%;
  height: 100%;
}

.overlay {
  position: absolute;
  bottom: 0;
  width: 99px;
  height: 23px;
  background-color: white;
  padding: 10px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  border-radius: 50px;
  margin-left: 28px;
  margin-bottom: 15px;
}
.client-name {
  text-align: center;
  font-family: Montserrat;
  font-weight: 400;
  font-size: 12px;
  line-height: 19px;
  color: #555;
  margin-top: -27px;
  width: auto;
  height: auto;
}
.arrow {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  font-size: 24px;
  color: white;
}

.prev-btn,
.next-btn {
  border: 1px solid #5a3c33;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 20px;
  color: #5a3c33;
  cursor: pointer;
  position: absolute;
  top: 40%;
  z-index: 10;
  background-color: white;
}

.prev-btn {
  left: 0;
}

.next-btn {
  right: 0;
}

button:focus {
  outline: none;
}
/* avis client */
.review-carousel {
  max-width: 100%;
  background-color: #ffe6dc;
  padding: 20px;
  text-align: center;
}

.title {
  font-size: 24px;
  color: #5a3c33;
  margin-bottom: 20px;
  padding-top: 60px;
}

.review-text {
  font-size: 16px;
  color: #6b5652;
  margin-bottom: 20px;
}

.reviewer {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

.reviewer-image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
}

.reviewer-details {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.reviewer-name {
  font-size: 16px;
  font-weight: bold;
  color: #5a3c33;
  margin-bottom: 5px;
}

.reviewer-stars {
  font-size: 18px;
  color: #ffa500;
}

.star {
  color: #ccc;
}

.star.active {
  color: #ffa500;
}

.cta-button-orange {
  background-color: #ff8b52;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-bottom: 50px;
}

.cta-button:hover {
  background-color: #ff7330;
}

</style>
