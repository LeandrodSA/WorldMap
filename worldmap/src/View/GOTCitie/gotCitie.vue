<template>
  <div class="main">
    <h1 class="title">Cidades GoT</h1>

    <div class="list-item" v-for="id in ct" :key="id.name">

      <div class="panel">
        <div class="panel-container">

          <v-btn :href="id.link" target="black">{{ id.name }} </v-btn>

        </div>
      </div>
    </div>
  </div>
</template>

<script src="./cities.js"></script>


<style lang="scss" src="./style.scss">