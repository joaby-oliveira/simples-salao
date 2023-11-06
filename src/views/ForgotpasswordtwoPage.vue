<template>
    <ion-page>
      <ion-content>
        <div class="p-4">
          <header class="py-8 mx-auto flex flex-col justify-center items-center">
            <ion-img src="https://ipsumutilities.com/wp-content/uploads/2021/02/01.-Ipsum-Logo-Chevron-Blue.png"
              alt="Simples Salão" class="w-[150px]"></ion-img>
            <h1 class="text-center">
              Preencha o Código 
            </h1>
            <h4 class="text-center font-normal">
              Enviamos um código de 4 dígitos pra o e-mail  {}
            </h4>
          </header>
            <ion-item>
              <ion-label>Código</ion-label>
              <ion-input type="codigo"></ion-input>
            </ion-item>
            <ion-button type="submit" expand="block" fill="solid">Receber Codigo</ion-button>
        </div>
      </ion-content>
    </ion-page>
  </template>
  