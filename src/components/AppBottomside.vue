<template>
    <div class="bottom">
    <div class="bot">
        <img src="../assets/Logo_principal_sans_baseline_blanc.png" alt="logo" class="logo">
        <p>Pâtissez chez vous comme un chef</p>
            <p>et régalez vos proches avec des desserts gourmands, sans effort.</p>
    </div>
    <div class="bot2">
        <h2>Une Question ?</h2>
        <h2>Besoin d'aide ?</h2>
        <button>Contactez-nous</button>
    </div>
    <div class="bot3">
        <h2 class="join">Rejoingnez-nous</h2>
        <a href=""><img src="../assets/Instagram.svg" alt="insta"></a>
        <a href=""><img src="../assets/Tiktok.svg" alt="tiktok"></a>
        <a href=""><img src="../assets/Pinterest.svg" alt="pinterest" class="Pint"></a>
    </div>
    <div class="bot4">
        <router-link to="/cgv">Conditions Générales de Vente</router-link>
        <router-link to="/cgu">Conditions Générales d'Utilisation</router-link>
        <router-link to="/PolitiqueConfidentialite">Politique confidentialité</router-link>
        <router-link to="/MentionsLegales">Mentions légales</router-link>
    </div>
    <div class="bot5">
        <p>&copy;Tous droits réservés</p>
        <p>L'Atelier Sucré-2024</p>
    </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
@media(min-width: 320px) and (max-width: 767px)  {
    * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family:'Montserrat';
  position: relative;
  bottom: 0;
}
    .bottom {
        background-color: #3A231F;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        bottom: 0;
    }
    .bottom p {
        color: #ffff;
        width: 70vw;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        text-align: center;
    }
    .logo {
        width: 100px;
        height: 40px;
        margin-bottom: 40px;
    }
    h2{
        text-transform: uppercase;
        color: #ffff;
        line-height: 17px;
        font-size: 16px;
        width: 70vw;
    }
    button {
        background-color: #FFECE6;
        text-transform: uppercase;
        margin-top: 20px;
        border-radius: 20px;
        width: 60vw;
        height: 4vh;
        font-weight:900;
        size: large;
    }
    .bot4 {
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
    .bot4 a{
        text-decoration: none;
        color:#ffff;
        padding: 5px;
        font-weight: 100;
        width: 90vw;
        line-height: 16px;
        font-size: 16px;
    }
    .bot5 {
        padding-bottom: 40px;
    }
    .bot, .bot2, .bot3, .bot4, .bot5 {
        padding: 40px;
    }
    a {
        padding: 0px 20px 0 10px;
    }
    .Pint {
        width: 26px;
    }
    .join {
        padding-bottom: 20px;
    }
}
</style>
