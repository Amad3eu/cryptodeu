<template>
  <div class="fourth-section">
    <div class="fourth-container">
      <h2 class="head">Get started in a few minutes</h2>
      <p class="para">
        Cryptodeu supports a variety of the most popular digital currencies.
      </p>
      <div class="svg-con">
        <div class="item">
          <div class="svg">
            <svg width="64" height="60" viewBox="0 0 64 60" fill="none">
              <path
                d="M32 16a8 8 0 100-16 8 8 0 000 16zM32 20c-11.05 0-20 7.16-20 16v18h40V36c0-8.84-8.95-16-20-16z"
                fill="#F2A101"
              ></path>
              <path d="M64 36H0v24h64V36z" fill="#F2E222"></path>
              <path d="M52 36H12v24h40V36z" fill="#F2C910"></path>
              <path d="M33 42h-2v12h2V42z" fill="#fff"></path>
              <path d="M38 49v-2H26v2h12z" fill="#fff"></path>
            </svg>
          </div>

          <p>Create an account</p>
        </div>
        <div class="dash"></div>
        <div class="item">
          <div class="svg">
            <svg width="65" height="56" viewBox="0 0 65 56" fill="none">
              <path d="M57.03 20h-50v24h50V20z" fill="#F2A101"></path>
              <path
                d="M60.03 52v-4h-8V16.06L64 16.1l.01-4.1L32.06 0 .01 12 0 15.9l12.03.04V48h-8v4h-4v4h64v-4h-4zm-16-4h-8V16.01l8 .03V48zm-24-32.04l8 .03V48h-8V15.96z"
                fill="#F2A901"
              ></path>
              <path d="M52.03 20h-40v24h40V20z" fill="#F2E101"></path>
              <path
                d="M36.41 34.38c0-2.34-1.42-3.12-4.17-3.5-2.03-.29-2.42-.77-2.42-1.72 0-.9.69-1.54 2.01-1.54 1.34 0 2.04.52 2.26 1.75h1.99c-.19-1.86-1.26-2.96-3.06-3.28V24h-2v2.05c-1.98.28-3.26 1.6-3.26 3.29 0 2.19 1.32 3.04 4.12 3.42 1.9.31 2.44.72 2.44 1.8s-.92 1.8-2.21 1.8c-1.98 0-2.45-.98-2.6-2.16h-2.09c.14 1.94 1.2 3.4 3.61 3.72V40h2v-2.08c2.06-.33 3.38-1.77 3.38-3.54z"
                fill="#fff"
              ></path>
            </svg>
          </div>

          <p>Link your bank account</p>
        </div>
        <div class="dash"></div>
        <div class="item">
          <div class="svg">
            <svg width="61" height="56" viewBox="0 0 61 56" fill="none">
              <path
                d="M40 40.5v-.99c0-.89-.59-1.68-1.45-1.92l-9.21-2.63a7.975 7.975 0 00-6.31.83L16 40v12h15.65c2.88 0 5.73-.52 8.43-1.53L60 43c.9-2.26-.93-4.67-3.35-4.39L40 40.5z"
                fill="#F2A101"
              ></path>
              <path d="M16 36H0v20h16V36z" fill="#F2D181"></path>
              <path d="M16 40H0v12h16V40z" fill="#F7E101"></path>
              <path
                d="M28 20c5.523 0 10-4.477 10-10S33.523 0 28 0 18 4.477 18 10s4.477 10 10 10z"
                fill="#E7E181"
              ></path>
              <path
                d="M48 36c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10z"
                fill="#F6E181"
              ></path>
              <path
                d="M32 9h-3V6h-2v3h-3v2h3v3h2v-3h3V9zM52 27v-2h-8v2h8z"
                fill="#fff"
              ></path>
            </svg>
          </div>

          <p>Start buying & selling</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Fourth",
};
</script>

<style scoped>
.fourth-section {
  background-color: rgba(245, 248, 255, 1);
  padding-top: 80px;
  padding-bottom: 100px;
}
.head {
  text-align: center;
  line-height: 48px;
  font-size: 40px;
  color: rgba(10, 11, 13, 1);
  font-weight: 800;
}
.para {
  text-align: center;
  line-height: 28px;
  font-size: 18px;
  color: rgba(91, 97, 110, 1);
  width: 350px;
  margin: 20px auto 0;
}
.svg-con {
  width: 60%;
  margin: 80px auto 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.dash {
  display: none;
}
.item {
  text-align: center;
  margin-bottom: 50px;
}
.item p {
  margin-top: 30px;
  font-size: 20px;
  color: rgba(10, 11, 13, 1);
  font-weight: 500;
}

.dash {
  width: 100px;
  height: 1px;
  background-color: rgba(91, 97, 110, 0.66);
  margin-top: -30px;
}
@media only screen and (min-width: 992px) {
  .fourth-section {
    padding-top: 100px;
  }
  .para {
    font-size: 16px;
    margin-top: 20px;
    width: 100%;
  }
  .svg-con {
    margin: 50px auto 0;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .item {
    margin-bottom: 0;
  }
  .item p {
    margin-top: 20px;
  }

  .dash {
    display: block;
  }
}
</style>