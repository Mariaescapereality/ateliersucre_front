<template>
<div v-if="showCookieBanner" class="cookie-banner-overlay">
      <div class="cookie-popup">
        <h4 class="cookie-title">🍪 Nos cookies sont aussi <br>
        délicieux que ceux de votre <br>
        navigateur ! 🍪</h4>
        <p class="cookie-text">
          Pour améliorer votre expérience <br>
          sur notre site et vous offrir des <br>
          recettes sur mesure, nous utilisons <br>
          des "cookies" (ceux qui stockent <br>
          des infos, pas ceux à croquer). En <br>
          continuant, vous acceptez leur utilisation.
        </p>
        <div class="cookie-buttons">
          <button @click="refuseCookies" class="refuse-btn">Refuser</button>
          <button @click="acceptCookies" class="accept-btn">Accepter</button>
        </div>
      </div>
</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
// Reactive variable to control the visibility of the cookie banner
const showCookieBanner = ref(false);
/* eslint-disable consistent-return */
// Function to check if a cookie exists
const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
};
/* eslint-disable consistent-return */
// Function to set the 'acceptCookies' cookie and hide the banner
const acceptCookies = () => {
  const d = new Date();
  d.setTime(d.getTime() + 365 * 24 * 60 * 60 * 1000); // Set for 1 year
  const expires = `expires=${d.toUTCString()}`;
  document.cookie = `acceptCookies=true; ${expires}; path=/`;
  showCookieBanner.value = false;
};

// Function to handle the refusal of cookies
const refuseCookies = () => {
  document.cookie = 'acceptCookies=false; path=/';
  showCookieBanner.value = false;
};

// When the component is mounted, check if the cookie exists
onMounted(() => {
  if (!getCookie('acceptCookies')) {
    showCookieBanner.value = true;
  }
});
</script>

<style scoped>
/* cookie banner */
/* Full page overlay with 60% opacity */
.cookie-banner-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6); /* 60% opacity for background */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

/* Pop-up styling to match the provided design */
.cookie-popup {
  background-color: #8BC6AF; /* Greenish background */
  padding: 30px;
  border-radius: 20px;
  max-width: 400px;
  text-align: center;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.5);
  font-family: 'Arial', sans-serif;
  position: relative;
}

/* Text style for title */
.cookie-title {
  color: #2F4858;
  margin-bottom: 15px;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 600;
  line-height: 17.07px;
  letter-spacing: 0.05em;
  text-align: left;

}

/* Regular text for cookie description */
.cookie-text {
  font-size: 14px;
  color: #2F4858;
  margin-bottom: 20px;
  font-family: Montserrat;
  font-weight: 400;
  line-height: 19px;
  text-align: left;
}

/* Button container */
.cookie-buttons {
  display: flex;
  justify-content: space-evenly;
}

/* Styling for refuse and accept buttons */
.cookie-popup button {
  border: none;
  cursor: pointer;
  font-size: 14px;
  padding: 10px 20px;
  border-radius: 8px;
}

/* Refuse button styling */
.refuse-btn {
  background-color: #2F4858;
  color: white;
  font-weight: bold;
}

/* Accept button styling */
.accept-btn {
  background-color: #F8E9E7;
  color: #2F4858;
  font-weight: bold;
}

/* Button hover effects */
.refuse-btn:hover {
  background-color: #21343F;
  width: 121px;
  height: 35px;
  padding: 10px 25px 10px 25px;
  gap: 3px;
  border-radius: 10px 0px 0px 0px;
  border: 1px 0px 0px 0px;
  opacity: 0px;

}

.accept-btn:hover {
  background-color: #F1D4D0;
  width: 121px;
  height: 35px;
  padding: 10px 25px 10px 25px;
  gap: 3px;
  border-radius: 10px 0px 0px 0px;
  opacity: 0px;
}
</style>
