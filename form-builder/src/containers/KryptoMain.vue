<template>
  <!-- Gestion des erreurs lors du chargement -->
  <div v-if="kryptoData[0]">
    <!-- on affiche le tableau -->
    <table>
      <!-- titre du tableau -->
      <caption>
        cours des Kryptos Monnaie
      </caption>
      <!-- légende du tableau -->
      <th>Nom</th>
      <th>Devise</th>
      <th>Logo</th>
      <th>Prix</th>
      <th>Evolution % sur 24h</th>
      <th>Capitalisation du marché</th>
      <th>Volume Total</th>

      <tr v-for="(krypto, index) in kryptoData" :key="index">
        <td>{{ krypto.name }}</td>
        <td>{{ krypto.symbol }}</td>
        <td><img :src="krypto.image" class="icon" /></td>
        <td>{{ krypto.current_price }}</td>
        <td>{{ krypto.price_change_percentage_24h }}</td>
        <td>{{ krypto.market_cap }}</td>
        <td>{{ krypto.total_volume }}</td>
      </tr>
    </table>

    {{ kryptoData[0].image }}
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
