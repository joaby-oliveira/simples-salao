<template>
  <ion-page>
    <ion-content>
      <div class="container flex-col p-8">
        <header class="py-8 mx-auto">
          <ion-img src="https://ipsumutilities.com/wp-content/uploads/2021/02/01.-Ipsum-Logo-Chevron-Blue.png"
            alt="Simples Salão" class="w-[150px]"></ion-img>
          <ion-header>
            <ion-logo></ion-logo>
            <ion-text>Olá Maria, seja bem-vinda!</ion-text>
          </ion-header>
        </header>
        <ion-item>
          <ion-thumbnail slot="start">
            
          </ion-thumbnail>
          <ion-label class="flag"> 
            <ion-icon name="cut"></ion-icon>
            <div>
              <p>R$ 50 | 01/12/2023</p>
              <p>Cortar cabelo</p>
            </div>
          </ion-label>
        </ion-item>
      </div>
    </ion-content>
  </ion-page>
</template>

<style scoped>
  .flag {
    display: flex;
    width: auto;
  }
  .flag div {
    margin-left: 10px;
  }
</style>