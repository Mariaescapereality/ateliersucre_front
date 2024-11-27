<template>
    <ProfileUser v-if="User"/>
    <ProfileAdmin v-if="Admin"/>
</template>
<script setup>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import ProfileAdmin from '@/components/ProfileAdmin.vue';
import ProfileUser from '@/components/ProfileUser.vue';

const store = useStore();

const user = computed(() => store.getters.getUser);

const Admin = computed(() => user.value && user.value.role === 'admin');
const User = computed(() => user.value && user.value.role === 'user');

onMounted(() => {
  store.dispatch('fetchUsers');
});
</script>
