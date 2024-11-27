<template>
<Topside/>
<router-view/>
<Bottomside/>
</template>

<script setup>
import Topside from '@/components/AppTopside.vue';
import Bottomside from '@/components/AppBottomside.vue';

</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,100..900;1,9..144,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
:root {
  --font-fraunces: 'Fraunces, sans-serif';
  --font-montserrat: 'Montserrat, sans-serif'
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
h1, h2 {
  font-family: var(--font-fraunces);
}
p, label, button, a {
  font-family: var(--font-montserrat);
}
</style>
