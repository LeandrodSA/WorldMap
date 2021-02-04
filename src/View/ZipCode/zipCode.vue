<template>
  <div class="main">
    <div class="form">
      <v-form>
        <h1>Entre seu CEP</h1>
        <v-text-field
          class="txt"
          v-model="zipcode"
          type="number"
          label="CEP"
          :error-messages="zipcodeError"
          :counter="8"
          required
        ></v-text-field>

        <v-btn class="mr-4" @click.prevent="submit"> submit </v-btn>
        <v-btn @click="clear"> clear </v-btn>
      </v-form>

      <div class="status">
        <li>Estado - {{ cep.estado }}</li>
        <li>Cidade - {{ cep.cidade }}</li>
        <li>Bairro - {{ cep.bairro }}</li>
        <li>Rua - {{ cep.logradouro }}</li>
      </div>
    </div>
  </div>
</template>

<script src="./form.js"></script>

<style lang="scss" src="./style.scss" scoped/>