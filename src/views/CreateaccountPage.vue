<template>
  <ion-page>
    <ion-content>
      <div class="p-4">
        <header class="py-8 mx-auto flex flex-col justify-center items-center">
          <ion-img
            src="https://ipsumutilities.com/wp-content/uploads/2021/02/01.-Ipsum-Logo-Chevron-Blue.png"
            alt="Simples Salão"
            class="w-[150px]"
          ></ion-img>
          <h1 class="text-center">Crie a sua Conta</h1>
          <h4 class="text-center font-normal">Comece agendar serviços!</h4>
        </header>
        <form @submit.prevent="handleLoginSubmit" class="flex flex-col gap-4">
          <ion-item>
            <default-input
              v-model="name"
              type="email"
              placeholder="Ex.: Jose Glauber da Sila"
              label-value="Nome"
              :required="true"
            ></default-input>
          </ion-item>
          <ion-item>
            <default-input
              v-model="email"
              type="email"
              placeholder="Ex.: nome@email.com"
              label-value="E-mail"
              :required="true"
            ></default-input>
          </ion-item>
          <ion-item>
            <default-input
              v-model="password"
              type="password"
              placeholder="No mínimo 8 caracteres"
              label-value="Senha"
              :minlength="8"
              :required="true"
            ></default-input>
          </ion-item>
          <!-- <ion-item>
            <ion-label>Confirmar Senha</ion-label>
            <ion-input type="password" placeholder="No mínimo 8 caracteres" :minlength="8" :required="true"
              v-model="password"></ion-input>
          </ion-item> -->
          <ion-button color="dark" type="submit">Criar conta</ion-button>
          <div class="flex gap-2 mt-4 mx-auto justify-center">
            <p>Ja é registrado? <a href="/login">Faça login</a></p>
          </div>
        </form>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import "./../styles.css";
import DefaultInput from "@/components/DefaultInput.vue";
import { IonPage, IonContent, IonButton, IonImg } from "@ionic/vue";
import { ref } from "vue";

const name = ref("Jhon");
const email = ref("john@email.com");
const password = ref("12345678");

async function handleLoginSubmit() {
  try {
    console.log(password.value);
    const client = {
      name: name.value,
      email: email.value,
      password: password.value,
    };

    const response = await fetch("http://localhost:3000/client", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ client: client }),
    });
    if (response.ok) {
      location.href = "/login";
    }
  } catch (error: any) {
    console.log(error);
  }
}
</script>
