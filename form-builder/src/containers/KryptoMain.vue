<template>
  <!-- Gestion des erreurs lors du chargement -->
  <div v-if="kryptoData[0]">
    <!-- on affiche le tableau -->
    <table class="table">
      <!-- titre du tableau -->
      <caption>
        cours des Kryptos Monnaie
      </caption>
      <!-- légende du tableau -->
      <th scope="col">Nom</th>
      <th scope="col">Devise</th>
      <th scope="col">Logo</th>
      <th scope="col">Prix</th>
      <th scope="col">Evolution % sur 24h</th>
      <th scope="col">Capitalisation du marché</th>
      <th scope="col">Volume Total</th>

      <!-- 
new Intl.NumberFormat().format(
       -->

      <tr v-for="(krypto, index) in kryptoData" :key="index">
        <td >{{ krypto.name }}</td>
        <td>{{ krypto.symbol }}</td>
        <td><img :src="krypto.image" class="icon" /></td>
        <td>{{ new Intl.NumberFormat().format(krypto.current_price) }}</td>
        <td>{{ new Intl.NumberFormat().format(krypto.price_change_percentage_24h) }}</td>
        <td>{{ new Intl.NumberFormat().format(krypto.market_cap) }}</td>
        <td>{{ new Intl.NumberFormat().format(krypto.total_volume) }}</td>
      </tr>
    </table>
  </div>
  <!-- si pas chargé, on fait attendre légèrement -->
  <div v-else>en chargement ...</div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["kryptoData"]),
  },
  //   appel API avant la création
  beforeCreate() {
    this.$store.dispatch("fetchTheKryptoData");
  },
};
</script>

<style scoped>
.icon {
  width: 32px;
}
</style>
