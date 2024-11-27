<template>
  <section class="hero">
    <h1 class="commechef">Votre Panier</h1>
    <div class="container">
      <div v-if="cart.length === 0" class="empty-cart">
        <p class="montserrat">Votre panier est vide.</p>
      </div>

      <div v-else class="cart-list">
        <div v-for="item in cart" :key="item.id" class="cart-item">
          <img :src="item.image" :alt="item.name" class="cart-image" />
          <div class="item-details">
            <h3 class="item-name">{{ item.name }}</h3>
            <p class="item-price">{{ item.price }}€</p>
            <div class="quantity-control">
              <button @click="decreaseQuantity(item)" class="quantity-btn">-</button>
              <input type="number"
                      v-model.number="item.quantity"
                      class="quantity-input"
                      aria-label="number">
              <button @click="increaseQuantity(item)" class="quantity-btn">+</button>
            </div>
            <button @click="removeFromCart(item)" class="remove-btn">Supprimer</button>
          </div>
        </div>
        <div class="cart-total">
          <h2>Total: {{ cartTotal }}€</h2>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
/* eslint-disable */
import { ref, computed, watch } from 'vue';
// Retrieve cart from localStorage or create an empty array
const cart = ref(JSON.parse(localStorage.getItem('cart')) || []);
// Watch for changes in the cart and sync them with localStorage\n
watch(cart, (newCart) => {
  localStorage.setItem('cart', JSON.stringify(newCart));
}, { deep: true });
// Calculate total price
const cartTotal = computed(() => cart.value.reduce((total, item) => total + item.price * item.quantity, 0));
// Remove item from cart
const removeFromCart = (product) => {
  cart.value = cart.value.filter(item => item.id !== product.id);
};
// Increase item quantity
const increaseQuantity = (product) => {
  product.quantity += 1;
};
// Decrease item quantity, ensuring it doesn’t go below 1
const decreaseQuantity = (product) => {
  if (product.quantity > 1) {
    product.quantity -= 1;
  }
};
/* eslint-disable */
</script>

<style scoped>
.hero {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffece6;
  color: rgb(55, 55, 55);
  padding: 20px;
}

.commechef {
  font-family: Gelica;
  font-size: 36px;
  font-weight: 600;
  letter-spacing: -0.02em;
  text-align: center;
  color: rgb(55, 55, 55);
  margin-bottom: 20px;
}

.montserrat {
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
}

.container {
  width: 90%;
  max-width: 800px;
  margin: 0 auto;
}

.cart-list {
  width: 100%;
}

.cart-item {
  display: flex;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 20px;
  background: white;
}

.cart-image {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 8px 0 0 8px;
}

.item-details {
  flex: 1;
  padding: 10px;
}

.item-name {
  font-size: 18px;
  margin: 5px 0;
}

.item-price {
  font-size: 16px;
  color: rgb(55, 55, 55);
}

.quantity-control {
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.quantity-input {
  width: 50px;
  text-align: center;
}

.quantity-btn {
  background-color: #ff6978;
  color: white;
  border: none;
  padding: 5px;
  cursor: pointer;
}

.quantity-btn:hover {
  background-color: #ff4a56;
}

.remove-btn {
  background-color: #d9534f;
  color: white;
  border: none;
  padding: 8px;
  cursor: pointer;
  margin-top: 10px;
}

.remove-btn:hover {
  background-color: #c9302c;
}

.cart-total {
  text-align: center;
  font-size: 22px;
  font-weight: bold;
  margin-top: 20px;
}
</style>
