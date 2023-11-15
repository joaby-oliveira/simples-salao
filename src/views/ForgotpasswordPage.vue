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
          <h1 class="text-center">Esqueceu a Senha</h1>
          <h4 class="text-center font-normal">
            É possível recuperá-la, basta apenas preencher seu e-mail
          </h4>
        </header>
        <form @submit.prevent="sendForgotCode" class="flex flex-col gap-4">
          <ion-item>
            <default-input
              v-model="email"
              type="email"
              placeholder="Ex.: nome@email.com"
              label-value="E-mail"
              :required="true"
            ></default-input>
          </ion-item>
          <ion-button color="dark" expand="block" type="submit"
            >Receber Codigo</ion-button
          >
          <div class="flex gap-2 mt-4 mx-auto justify-center">
            <a href="/createaccount">Cadastre-se</a> ou
            <a href="/login">faça login</a>
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

const email = ref("john@email.com");

async function sendForgotCode() {
  try {
    const emailToSend = email.value;
    location.href = "/forgotpasswordtwo?email=" + emailToSend;
  } catch (error: any) {
    console.log(error);
  }
}
</script>
