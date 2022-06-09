<template>
  <div class="table-section">
    <div class="table-container">
      <div class="bub">
        <div class="sets">
          <p class="assets">All assets</p>
        </div>
      </div>
      <div class="price-tbl">
        <table id="price-table">
          <thead class="desk">
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Change</th>
              <th>Price Chart</th>
              <th>Volume(24h)</th>
              <th>Market Cap</th>
              <th>Supply</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="crypto in getCrypto.slice(10, 30)" :key="crypto.id">
              <td>
                <div class="tab">
                  <figure>
                    <img :src="crypto.image" alt="" class="crypt-img" />
                  </figure>

                  <p>{{ crypto.name }}</p>
                  <p class="symbol">{{ crypto.symbol.toUpperCase() }}</p>
                </div>
              </td>
              <td class="price">USD {{ crypto.current_price.toFixed(2) }}</td>
              <td>
                <div
                  class="percent"
                  :class="{ red: crypto.price_change_percentage_24h < 0 }"
                >
                  <p>
                    {{ crypto.price_change_percentage_24h.toFixed(2) }}
                  </p>
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
              <td>USD {{ crypto.high_24h.toFixed(2) }}M</td>
              <td>USD {{ crypto.low_24h.toFixed(2) }}</td>
              <td>{{ crypto.ath.toFixed(2) }}M</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- mobile table -->
      <div class="mobi">
        <div
          class="mobi-con"
          v-for="crypto in getCrypto.slice(30, 40)"
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
            <p class="cash">USD {{ crypto.current_price.toFixed(2) }}</p>
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
  name: "TableSection",
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
.price-tbl {
  display: none;
}
.time {
  display: none;
}
.bub {
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
  font-size: 15px;
  font-weight: 500;
}
.sets {
  display: flex;
}
.sets p {
  padding: 2px 10px;
  cursor: pointer;
  margin-left: 10px;
  font-size: 14px;
}

.mobi {
  padding-top: -50px;
  padding-bottom: 20px;
}
.mobi-con {
  display: flex;
  border-top: 1px solid gainsboro;
  width: 102%;
  margin-left: -8px;
  padding: 15px;
}
.mobi-left {
  display: flex;
}
.mobi-left figure {
  width: 10%;
}
.mobi-left img {
  width: 100%;
}
.mobi-cry {
  margin-left: 10px;
}
.percent {
  display: flex;
  align-items: center;
}
.percent p {
  font-size: 14px;
  text-align: right;
}
.pp {
  color: #098551;
}
.cash {
  width: 100px;
}
.mobi-right {
  display: flex;
  text-align: right;
}
.red {
  color: red;
}
@media only screen and (min-width: 992px) {
  .table-container {
    width: 85%;
    margin: 0 auto;
  }
  .price-tbl {
    display: block;
  }

  #price-table {
    font-family: inherit;
    border-collapse: collapse;
    width: 100%;
    border: 1px solid gainsboro;
    margin-bottom: 80px;
    border-radius: 40px;
  }
  /* .tabl {
    display: block;
  } */

  #price-table td,
  #price-table th {
    /* border: 1px solid #ddd; */
    padding: 15px;
  }

  #price-table tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  #price-table tr:hover {
    background-color: rgb(247, 247, 247);
  }

  #price-table th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    /* background-color: #04aa6d; */
    /* color: white; */
  }

  .mobi {
    display: none;
  }
  figure {
    width: 8%;
  }
  .crypt-img {
    width: 100%;
  }
  th {
    background: #e58840;
    color: rgb(255, 255, 255);
    font-weight: 200;
    font-size: 14px;
  }
  tr {
    border-bottom: 1px solid gainsboro;
    font-size: 14px;
  }
  .tab {
    display: flex;
    align-items: center;
  }
  .tab p {
    margin-left: 10px;
    font-size: 16px;
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
    font-size: 16px;
  }
  .price {
    font-size: 16px;
    font-weight: 400;
  }
  .sparkline {
    stroke: #098551;
    fill: none;
  }
  .sparkred {
    stroke: red;
    fill: none;
  }

  .bub {
    display: flex;
    justify-content: space-between;
    margin: 15px 0;
    font-size: 15px;
    font-weight: 500;
  }
  .sets {
    display: flex;
  }
  .sets p {
    padding: 2px 15px;
    cursor: pointer;
    margin-left: 0;
    font-size: 16px;
  }
  .assets {
    background-color: rgba(223, 145, 28, 0.178);
    border-radius: 10px;
    color: #f29b00;
    font-weight: 600;
  }
  .time {
    display: flex;
  }
  .time p {
    margin-left: 30px;
    color: rgb(139, 138, 138);
  }
  .red {
    color: red;
  }
  .day {
    color: rgb(0, 82, 255) !important;
  }
}
</style>