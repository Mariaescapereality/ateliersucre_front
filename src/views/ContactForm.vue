<template>
  <div class="contact-form">
    <h1>Contact</h1>
    <p>
      Une question ou besoin d'aide ? Remplissez le formulaire ci-dessous et
      nous reviendrons vers vous rapidement.
    </p>

    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="firstName">Prénom</label>
        <input
          type="text"
          id="firstName"
          v-model="firstName"
          placeholder="Prénom"
          required
        />

        <label for="lastName">Nom</label>
        <input
          type="text"
          id="lastName"
          v-model="lastName"
          placeholder="Nom"
          required
        />
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          v-model="email"
          placeholder="Email"
          required
        />
      </div>

      <div class="form-group">
        <label for="subject">Sujet du message</label>
        <select id="subject" v-model="subject" required>
          <option disabled value="">Sélectionner le sujet</option>
          <option value="support">Support</option>
          <option value="feedback">Feedback</option>
          <option value="other">Autre</option>
        </select>
      </div>

      <div class="form-group">
        <label for="message">Message</label>
        <textarea
          id="message"
          v-model="message"
          placeholder="Message"
          rows="5"
          required
        ></textarea>
      </div>

      <div class="form-group checkbox-group">
        <input
          type="checkbox"
          v-model="acceptPolicy"
          id="policy"
          required
        />
        <label for="policy">
          En cochant cette case, vous acceptez notre politique de
          confidentialité
        </label>
      </div>

      <button
        type="submit"
        :disabled="!acceptPolicy"
        class="submit-btn"
      >
        Envoyer
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const firstName = ref('');
const lastName = ref('');
const email = ref('');
const subject = ref('');
const message = ref('');
const acceptPolicy = ref(false);
/* eslint-disable */
const submitForm = () => {
  if (acceptPolicy.value) {
    console.log({
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      subject: subject.value,
      message: message.value,
    });
    alert('Form submitted successfully!');
  } else {
    alert('Please accept the privacy policy.');
  }
};
/* eslint-disable */
</script>

<style scoped>
.contact-form {
  max-width: 450px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fdf0eb;
  border-radius: 12px;
  font-family: 'Arial', sans-serif;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  color: #50372c;
}

p {
  text-align: center;
  font-size: 14px;
  color: #50372c;
  margin-bottom: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
}

.half-width {
  width: 48%;
  display: inline-block;
  margin-bottom: 10px;
}

.half-width + .half-width {
  margin-left: 4%;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 12px;
  margin-bottom: 10px;
  border: 1px solid #d5b3ac;
  border-radius: 6px;
  background-color: #fef6f4;
  font-size: 14px;
  font-weight: 400;
}

.form-group select {
  background-color: white;
}

.form-group textarea {
  resize: vertical;
}

input::placeholder,
textarea::placeholder {
  color: #8d6a62;
  font-size: 14px;
  text-transform: uppercase;
}

.checkbox-group {
  display: flex;
  align-items: center;
  font-size: 14px;
}

.checkbox-group input {
  margin-right: 8px;
}

.submit-btn {
  width: 100%;
  background-color: #89c9b8;
  color: white;
  padding: 12px 0;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-btn:disabled {
  background-color: #ccc;
}

.submit-btn:not(:disabled):hover {
  background-color: #79b5a4;
}

.hidden-label {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
</style>
