<template>
  <div class="first-section">
    <div class="first-container">
      <div class="tabl">
        <table id="crypto-table">
          <thead class="desk">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
              <th>Change</th>
              <th>Chart</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(crypto, id) in getCrypto.slice(0, 4)" :key="crypto.id">
              <td class="id">{{ id + 1 }}</td>
              <td>
                <div class="tab">
                  <figure>
                    <img :src="crypto.image" alt="" class="crypt-img" />
                  </figure>

                  <p>{{ crypto.name }}</p>
                  <p class="symbol">{{ crypto.symbol.toUpperCase() }}</p>
                </div>
              </td>
              <td class="price">USD {{ crypto.current_price }}</td>
              <td>
                <div
                  class="percent"
                  :class="{ red: crypto.price_change_percentage_24h < 0 }"
                >
                  <p>{{ crypto.price_change_percentage_24h.toFixed(2) }}</p>
                  <i class="fas fa-percent fa-sm"></i>
                </div>
              </td>
              <td>
                <svg
                  :class="{ sparkred: crypto.price_change_percentage_24h < 0 }"
                  class="sparkline"
                  width="100"
                  height="30"
                  stroke-width="2"
                ></svg>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- mobile table -->
      <div class="mobi">
        <div
          class="mobi-con"
          v-for="crypto in getCrypto.slice(0, 4)"
          :key="crypto.id"
        >
          <div class="mobi-left">
            <figure>
              <img :src="crypto.image" alt="" />
            </figure>
            <div class="mobi-cry">
              <p>{{ crypto.name }}</p>
              <p class="symbol">{{ crypto.symbol.toUpperCase() }}</p>
            </div>
          </div>
          <div class="mobi-rigth">
            <p class="cash">USD {{ crypto.current_price }}</p>
            <div
              class="percent pp"
              :class="{ red: crypto.price_change_percentage_24h < 0 }"
            >
              <p>
                {{ crypto.price_change_percentage_24h.toFixed(2) }}
              </p>
              <i class="fas fa-percent fa-sm"></i>
            </div>
          </div>
        </div>
      </div>
      <!-- end of mobile table -->
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import sparkline from "@fnando/sparkline";

export default {
  name: "FirstSection",
  methods: {
    ...mapActions(["fetchCrypto"]),
  },
  mounted() {
    this.fetchCrypto();
  },
  beforeUpdate() {
    this.$nextTick(function () {
      function randNumbers() {
        let numbers = [];

        for (let i = 0; i < 20; i += 1) {
          numbers.push(Math.random() * 50);
        }
        return numbers;
      }
      document.querySelectorAll(".sparkline").forEach((svg) => {
        sparkline(svg, randNumbers());
      });
    });
  },
  computed: {
    ...mapGetters(["getCrypto"]),
  },
};
</script>

<style scoped>
.first-section {
  padding-bottom: 60px;
}
.first-container {
  width: 85%;
  margin: 0 auto;
}

.tabl {
  display: none;
}
/*  */
.right-con {
  display: flex;
  align-items: center;
  border: 1px solid gainsboro;
  margin-top: 20px;
}
.crypto {
  display: flex;
  padding: 10px;
}
.crypto h3 {
  margin-left: 20px;
  width: 100px;
  font-size: 22px;
}

span {
  display: none;
}

.fas {
  margin-left: 5px;
}
.mobi {
  padding-top: -50px;
  padding-bottom: 20px;
}
.mobi-con {
  display: flex;
  border-top: 1px solid gainsboro;
  width: 117%;
  margin-left: -26px;
  padding: 15px;
}
.mobi-left {
  display: flex;
}
.mobi-left figure {
  width: 15%;
}
.mobi-left img {
  width: 100%;
}
.mobi-cry {
  margin-left: 15px;
}

.mobi-right {
  display: flex;
  text-align: right;
}
.cash {
  width: 100px;
}
.percent {
  display: flex;
  align-items: center;
}

@media only screen and (min-width: 992px) {
  .mobi {
    display: none;
  }
  .first-section {
    padding-bottom: 80px;
  }
  .astro-text {
    width: 400px;
  }

  .base {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
  }
  .left {
    width: 40%;
  }
  .right {
    width: 50%;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }
  .right-con {
    display: flex;
    align-items: center;
    border: none;
    margin-top: 0;
  }
  .crypto {
    display: flex;
    align-items: center;
    padding: 0;
  }
  .crypto h3 {
    margin-left: 20px;
    width: 220px;
    font-size: 22px;
  }

  span {
    display: inline;
  }
  #crypto-table {
    font-family: inherit;
    border-collapse: collapse;
    width: 100%;
    border: 1px solid gainsboro;
    border-radius: 4px;
  }
  .tabl {
    display: block;
  }

  #crypto-table td,
  #crypto-table th {
    /* border: 1px solid #ddd; */
    padding: 15px;
  }

  #crypto-table tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  #crypto-table tr:hover {
    background-color: rgb(247, 247, 247);
  }

  #crypto-table th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #f29150;
    color: white;
  }
  figure {
    width: 7%;
  }
  .crypt-img {
    width: 100%;
  }
  th {
    color: grey;
    font-weight: 200;
    font-size: 16px;
  }
  tr {
    border-bottom: 1px solid gainsboro;
  }
  .tab {
    display: flex;
    align-items: center;
  }
  .tab p {
    margin-left: 10px;
    font-size: 20px;
  }
  .id {
    color: grey;
  }

  .symbol {
    color: grey;
    font-weight: 400;
  }
  .percent {
    display: flex;
    align-items: center;
    color: #098551;
  }
  .percent p {
    font-size: 18px;
  }
  .price {
    font-size: 18px;
    font-weight: 400;
  }
}
.sparkline {
  stroke: #098551;
  fill: none;
}
.sparkred {
  stroke: red;
  fill: none;
}
.red {
  color: red;
}
</style>