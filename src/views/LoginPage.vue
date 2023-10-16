<template>
  <ion-page>
    <ion-content>
      <h1 class="text-3xl font-bold underline">
        Hello world!
      </h1>
      <form @submit.prevent="handleLoginSubmit">
        <ion-item>
          <ion-label>Email</ion-label>
          <ion-input type="email" v-model="email"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label>Password</ion-label>
          <ion-input type="password" v-model="password"></ion-input>
        </ion-item>
        <ion-button type="submit" expand="block">Submit</ion-button>
      </form>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent } from '@ionic/vue';
import { ref } from 'vue'

const email = ref('')
const password = ref('')

async function handleLoginSubmit() {
  const response = await fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email: email.value, password: password.value })
  })
  const data = await response.json()
}
</script>
