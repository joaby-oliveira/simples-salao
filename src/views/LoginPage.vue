<template>
  <ion-page>
    <ion-content>
      <div class="p-4">
        <header class="py-8 mx-auto flex flex-col justify-center items-center">
          <ion-img src="https://ipsumutilities.com/wp-content/uploads/2021/02/01.-Ipsum-Logo-Chevron-Blue.png"
            alt="Simples Salão" class="w-[150px]"></ion-img>
          <h1 class="text-center">
            Bem-vindo de volta
          </h1>
          <h4 class="text-center font-normal">
            Volte a agendar serviços!
          </h4>
        </header>
        <form @submit.prevent="handleLoginSubmit" class="flex flex-col gap-4">
          <ion-item>
            <ion-label>E-mail</ion-label>
            <ion-input type="email" placeholder="Ex.: nome@email.com" v-model="email"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label>Senha</ion-label>
            <ion-input type="password" placeholder="No mínimo 8 caracteres" :minlength="8" :required="true"
              v-model="password"></ion-input>
          </ion-item>
          <ion-button type="submit" expand="block" fill="solid">Entrar</ion-button>
        </form>

        <div class="flex gap-2 mt-4 mx-auto justify-center">
          <p>Esqueceu a senha?</p>
          <a href="">Redefinir senha</a>
        </div>

        <div class="w-full mt-16">
          <p class="text-center pb-2">Não tem uma conta?</p>
          <ion-button expand="block">Cadastre-se</ion-button>
        </div>
      </div>
      <ion-toast :is-open="isOpen" :message="loginResponse" :duration="5000"
        @didDismiss="hideLoginResponse()"></ion-toast>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent, IonInput, IonButton, IonToast, IonImg } from '@ionic/vue';
import { ref } from 'vue'

const email = ref('john@email.com')
const password = ref('12345678')
const isOpen = ref(false)
const loginResponse = ref('')

function showLoginResponse(value: boolean, message: string) {
  isOpen.value = value
  loginResponse.value = message
}

function hideLoginResponse() {
  isOpen.value = false
}

async function handleLoginSubmit() {
  try {
    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: email.value, password: password.value })
    })
    const data: { jwt: string, message: string } = await response.json()
    showLoginResponse(true, data.message)
    if (data.jwt) {
      localStorage.setItem('jwt', data.jwt)
    }
  } catch (error: any) {
    console.log(error.message)
    showLoginResponse(true, JSON.stringify(error))
  }

}
</script>
