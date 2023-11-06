<template>
    <ion-page>
      <ion-content>
        <div class="p-4">
          <header class="py-8 mx-auto flex flex-col justify-center items-center">
            <ion-img src="https://ipsumutilities.com/wp-content/uploads/2021/02/01.-Ipsum-Logo-Chevron-Blue.png"
              alt="Simples Salão" class="w-[150px]"></ion-img>
            <h1 class="text-center">
              Crie a sua Conta
            </h1>
            <h4 class="text-center font-normal">
              Comece agendar serviços!
            </h4>
          </header>
          <form @submit.prevent="handleLoginSubmit" class="flex flex-col gap-4">
            <ion-item>
              <ion-label>Nome</ion-label>
              <ion-input  placeholder="Ex.: Jose Glauber da Sila"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label>E-mail</ion-label>
              <ion-input type="email" placeholder="Ex.: nome@email.com"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label>Senha</ion-label>
              <ion-input type="password" placeholder="No mínimo 8 caracteres" :minlength="8" :required="true"
                v-model="password"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label>Confirmar Senha</ion-label>
              <ion-input type="password" placeholder="No mínimo 8 caracteres" :minlength="8" :required="true"
                v-model="password"></ion-input>
            </ion-item>
            <ion-button type="submit" expand="block" fill="solid">Criar conta</ion-button>


            <div class="flex gap-2 mt-4 mx-auto justify-center">
            <p>Ja é registrado??</p>
            </div>
            <div class="flex gap-2 mt-4 mx-auto justify-center">
            <a href="http://localhost:5173/login">Entrar</a>
            </div>
          </form>
        </div>
      </ion-content>
    </ion-page>
  </template>
 
