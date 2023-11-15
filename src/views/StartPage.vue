<template>
    <ion-page>
        <ion-content>
            <div class="h-screen flex flex-col p-8">
                <ion-img
                    style="width: 100%"
                    src="https://docs-demo.ionic.io/assets/madison.jpg"
                    alt="The Wisconsin State Capitol building in Madison, WI at night"
                    class="flex-1"
                ></ion-img>
                <a href="/login">
                    <ion-button
                        type="submit"
                        expand="block"
                        class="custom-button"
                        >Começar a agendar Serviços</ion-button
                    >
                </a>
                <a href="/login">
                    <ion-button
                        fill="outline"
                        type="submit"
                        expand="block"
                        class="custom-button"
                        >Já sou Registrado</ion-button
                    >
                </a>
            </div>
        </ion-content>
    </ion-page>
</template>

<style>
.custom-button {
    margin: 10px 0;
}
</style>
