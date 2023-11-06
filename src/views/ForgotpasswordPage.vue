<template>
  <ion-page>
    <ion-content>
      <div class="p-4">
        <header class="py-8 mx-auto flex flex-col justify-center items-center">
          <ion-img src="https://ipsumutilities.com/wp-content/uploads/2021/02/01.-Ipsum-Logo-Chevron-Blue.png"
            alt="Simples Salão" class="w-[150px]"></ion-img>
          <h1 class="text-center">
            Esqueceu a Senha
          </h1>
          <h4 class="text-center font-normal">
            É possível recuperá-la, basta apenas preencher seu e-mail
          </h4>
        </header>
          <ion-item class="flex flex-col gap-4">
            <ion-label>E-mail</ion-label>
            <ion-input  type="email" placeholder="Ex.: nome@email.com" v-model="email"></ion-input>
          </ion-item>
          <a href="http://localhost:5173/forgotpasswordtwo">
          <ion-button type="submit" expand="block" fill="solid">Receber Codigo</ion-button>
          </a>
        </div>
    </ion-content>
  </ion-page>
</template>
