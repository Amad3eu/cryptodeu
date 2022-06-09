<template>
  <footer>
    <div class="footer-container">
      <div class="left">
        <p class="base">© 2022 Luiz Felipe Amadeu</p>
        <p class="social">
          Github:
          <a href="https://github.com/Amad3eu/vue-crypto-coins"> Amad3eu </a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>

<style scoped>
footer {
  padding-top: 100px;
  padding-bottom: 100px;
}
.footer-container {
  display: flex;
  width: 85%;
  margin: 0 auto;
  flex-direction: column;
}
.left {
  /* width: 40%; */
  opacity: 0.7;
  font-size: 18px;
  color: rgb(17, 51, 85);
}

@media only screen and (min-width: 992px) {
  footer {
    padding-top: 100px;
    padding-bottom: 100px;
  }
  .footer-container {
    flex-direction: row;
    width: 85%;
    margin: 0 auto;
  }
  .left {
    width: 40%;
    opacity: 0.7;
    color: rgb(17, 51, 85);
  }

  img {
    width: 50%;
  }
}
</style>