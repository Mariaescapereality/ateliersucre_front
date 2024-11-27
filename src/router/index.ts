import { createRouter, createWebHashHistory } from 'vue-router';
import MentionsLegales from '@/views/MentionsLegales.vue';
import PolitiqueConfidentialite from '@/views/PolitiqueConfidentialité.vue';
import FormInscription from '@/views/FormInscription.vue';
import FormLogin from '@/views/FormLogin.vue';
import PageProfile from '@/views/PageProfile.vue';
import UpdateProfile from '@/views/UpdateProfile.vue';
import HomeView from '@/views/HomeView.vue';
import BoutiqueView from '@/views/BoutiqueView.vue';
import FraisierBox from '@/views/FraisierBox.vue';
import MuffinsView from '@/views/MuffinsView.vue';
import DonutsBox from '@/views/DonutsBox.vue';
import EclairsBox from '@/views/EclairsBox.vue';
import BrownieBox from '@/views/BrownieBox.vue';
import CookiesBox from '@/views/CookiesBox.vue';
import CitrontarteBox from '@/views/CitrontarteBox.vue';
import CheesecakeBox from '@/views/CheesecakeBox.vue';
import AboutView from '@/views/AboutView.vue';
import FaqView from '@/views/FaqView.vue';
import ContactForm from '@/views/ContactForm.vue';
import PanierView from '@/views/PanierView.vue';

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: MentionsLegales,
  // },
  {
    path: '/',
    name: 'Accueil',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'A propos',
    component: AboutView,
  },
  {
    path: '/shop',
    name: 'Shop',
    component: BoutiqueView,
  },
  {
    path: '/panier',
    name: 'Panier',
    component: PanierView,
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: FaqView,
  },
  {
    path: '/contact',
    name: 'Contact form',
    component: ContactForm,
  },
  {
    path: '/fraisier',
    name: 'Fraisier',
    component: FraisierBox,
  },
  {
    path: '/muffins',
    name: 'Muffins',
    component: MuffinsView,
  },
  {
    path: '/donuts',
    name: 'Donuts',
    component: DonutsBox,
  },
  {
    path: '/eclairs',
    name: 'Eclairs',
    component: EclairsBox,
  },
  {
    path: '/brownie',
    name: 'Brownie',
    component: BrownieBox,
  },
  {
    path: '/cookies',
    name: 'Cookies',
    component: CookiesBox,
  },
  {
    path: '/tartelettecitron',
    name: 'Tartelettes',
    component: CitrontarteBox,
  },
  {
    path: '/cheesecake',
    name: 'Cheesecake',
    component: CheesecakeBox,
  },
  {
    path: '/MentionsLegales',
    name: 'mentionslegales',
    component: MentionsLegales,
  },
  {
    path: '/PolitiqueConfidentialite',
    name: 'politiqueconfidentialite',
    component: PolitiqueConfidentialite,
  },
  {
    path: '/FormInscription',
    name: 'forminscription',
    component: FormInscription,
  },
  {
    path: '/FormLogin',
    name: 'formlogin',
    component: FormLogin,
  },
  {
    path: '/PageProfile',
    name: 'pageprofile',
    component: PageProfile,
  },
  {
    path: '/UpdateProfile/:id',
    name: 'updateprofile',
    component: UpdateProfile,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
