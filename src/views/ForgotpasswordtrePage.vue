<template>
    <ion-page>
      <ion-content>
        <div class="p-4">
          <header class="py-8 mx-auto flex flex-col justify-center items-center">
            <ion-img src="https://ipsumutilities.com/wp-content/uploads/2021/02/01.-Ipsum-Logo-Chevron-Blue.png"
              alt="Simples Salão" class="w-[150px]"></ion-img>
            <h1 class="text-center">
              Não recebi nenhum codigo, escolher outro e-mail
            </h1>
            <h4 class="text-center font-normal">
              Preencha uma senha com pelo menos 8 dígitos
            </h4>
          </header>
            <ion-item class="flex flex-col gap-4">
              <ion-label>Senha</ion-label>
              <ion-input type="password" placeholder="No mínimo 8 caracteres" :minlength="8" :required="true"
              v-model="password"></ion-input>
            </ion-item>
            <ion-item class="flex flex-col gap-4">
              <ion-label>Confirmar Senha</ion-label>
              <ion-input type="password" placeholder="No mínimo 8 caracteres" :minlength="8" :required="true"
              v-model="password"></ion-input>
            </ion-item>
            <ion-button type="submit" expand="block" fill="solid">Definir Senha</ion-button>
          </div>
      </ion-content>
    </ion-page>
  </template>