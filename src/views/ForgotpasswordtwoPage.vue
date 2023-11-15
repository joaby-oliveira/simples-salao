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
          <h1 class="text-center">Preencha o Código</h1>
          <h4 class="text-center font-normal">
            Enviamos um código de 6 dígitos pra o e-mail {}
          </h4>
        </header>
        <form @submit.prevent="verifyForgotCode" class="flex flex-col gap-4">
          <ion-item>
            <default-input
              v-model="code"
              type="number"
              placeholder="XXXXXX"
              label-value="Código enviado"
              :required="true"
            ></default-input>
          </ion-item>
          <ion-button type="submit" color="dark" expand="block"
            >Prosseguir</ion-button
          >
        </form>
        <div class="flex gap-2 mt-4 mx-auto justify-center">
          <p>Não recebi nenhum codigo,</p>
          <a href="http://localhost:5173/forgotpassword"
            >Escolher outro e-mail</a
          >
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import "./../styles.css";
import DefaultInput from "@/components/DefaultInput.vue";
import { IonPage, IonContent, IonButton, IonImg } from "@ionic/vue";
</script>
