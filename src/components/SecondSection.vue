<template>
  <div class="second-section">
    <div class="second-container">
      <h2 class="heading">Create your cryptocurrency portfolio today</h2>
      <p class="text">
        Coinbase has a variety of features that make it the best place to start
        trading
      </p>
      <div class="dashcon">
        <div class="left">
          <div class="dash-item">
            <div class="svg">
              <svg width="30" height="32" viewBox="0 0 30 32">
                <g fill="none" fill-rule="evenodd">
                  <path fill="#F2A101" d="M10 32h10V10H10z"></path>
                  <path fill="#F2C100" d="M20 32h10V0H20z"></path>
                  <path fill="#F2C180" d="M0 32h10V19H0z"></path>
                </g>
              </svg>
            </div>
            <div class="dash-t">
              <h2>Manage your portfolio</h2>
              <p>
                Buy and sell popular digital currencies, keep track of them in
                the one place.
              </p>
            </div>
          </div>
          <div class="dash-item">
            <div class="svg">
              <svg width="36" height="38" viewBox="0 0 36 38">
                <g fill="none" fill-rule="evenodd">
                  <path
                    d="M17.813 9.5a2.375 2.375 0 002.375-2.375v-4.75a2.375 2.375 0 00-4.75 0v4.75A2.375 2.375 0 0017.811 9.5M29.688 9.5a2.375 2.375 0 002.375-2.375v-4.75a2.375 2.375 0 00-4.75 0v4.75A2.375 2.375 0 0029.688 9.5"
                    fill="#F2C180"
                  ></path>
                  <path fill="#F2C180" d="M0 38h35.625V4.75H0z"></path>
                  <path fill="#F2A101" d="M0 11.875h35.625V4.75H0z"></path>
                  <path
                    d="M5.938 9.5a2.375 2.375 0 002.375-2.375v-4.75a2.375 2.375 0 00-4.75 0v4.75A2.375 2.375 0 005.937 9.5"
                    fill="#F2C180"
                  ></path>
                  <path
                    d="M27.313 4.75v2.375a2.375 2.375 0 004.75 0V4.75h-4.75zM5.938 9.5a2.375 2.375 0 002.375-2.375V4.75h-4.75v2.375A2.375 2.375 0 005.937 9.5"
                    fill="#F2C100"
                  ></path>
                  <path
                    d="M17.813 9.5a2.375 2.375 0 002.375-2.375v-4.75a2.375 2.375 0 00-4.75 0v4.75A2.375 2.375 0 0017.811 9.5"
                    fill="#F2C180"
                  ></path>
                  <path
                    d="M17.813 9.5a2.375 2.375 0 002.375-2.375V4.75h-4.75v2.375A2.375 2.375 0 0017.811 9.5"
                    fill="#F2C100"
                  ></path>
                  <path fill="#FFF" d="M4.75 34.438h26.125V11.875H4.75z"></path>
                  <path
                    fill="#F2C100"
                    d="M12.69 26.329l3.359 3.359L26.125 19.61l-3.358-3.359z"
                  ></path>
                  <path
                    fill="#F2C140"
                    d="M16.049 29.688l3.359-3.36-6.244-6.243-3.359 3.36z"
                  ></path>
                </g>
              </svg>
            </div>
            <div class="dash-t">
              <h2>Recurring buys</h2>
              <p>
                Invest in cryptocurrency slowly over time by scheduling buys
                daily, weekly, or monthly.
              </p>
            </div>
          </div>
          <div class="dash-item">
            <div class="svg">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <path d="M36 2.25H0v31.5h36V2.25z" fill="#F2e190"></path>
                <path
                  d="M28.125 36H7.875a1.128 1.128 0 01-1.125-1.125V1.125C6.75.506 7.256 0 7.875 0h20.25c.618 0 1.125.506 1.125 1.125v33.75c0 .619-.507 1.125-1.125 1.125z"
                  fill="#F2C190"
                ></path>
                <path
                  d="M29.25 2.25H6.75v31.5h22.5V2.25z"
                  fill="#F2C150"
                ></path>
                <path
                  d="M23 15.137L21.889 14l-6.667 6.822 1.11 1.137L23 15.137z"
                  fill="#fff"
                ></path>
                <path
                  d="M16.334 22l1.11-1.137-3.333-3.411-1.11 1.137L16.333 22z"
                  fill="#fff"
                ></path>
                <path
                  d="M23.625 3.375h-11.25a1.128 1.128 0 01-1.124-1.125V1.125h13.5V2.25c0 .619-.507 1.125-1.126 1.125z"
                  fill="#F2D190"
                ></path>
                <path
                  d="M15.75 32.063c0 .337.226.562.563.562h3.375c.338 0 .563-.225.563-.562 0-.338-.226-.563-.563-.563h-3.375c-.337 0-.562.225-.562.563z"
                  fill="#fff"
                ></path>
              </svg>
            </div>
            <div class="dash-t">
              <h2>Mobile apps</h2>
              <p>
                Stay on top of the markets with the Coinbase app for
                <span> Android</span> or <span>iOS</span> .
              </p>
            </div>
          </div>
        </div>
        <div class="coin-ilustration">
          <img src="../assets/patternpad.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SecondSection",
};
</script>

<style scoped>
.second-section {
  border-bottom: 1px solid gainsboro;
  padding-bottom: 60px;
}
.second-container {
  width: 85%;
  margin: 0 auto;
}
.heading {
  text-align: center;
  font-size: 40px;
  font-weight: 800;
  color: rgb(5, 15, 25);
}
.text {
  text-align: center;
  color: rgba(91, 97, 110, 1);
  margin-top: 10px;
}
.dashcon {
  display: flex;
  margin-top: 70px;
  flex-direction: column-reverse;
}

.dash-t {
  margin-top: 15px;
}

.dashcon p {
  width: 300px;
  margin-top: 15px;
  text-align: center;
  color: rgba(91, 97, 110, 1);
}

.dashcon h2 {
  font-size: 20px;
  text-align: center;
}
.left {
  width: 100%;
}

.coin-ilustration img {
  margin: 0 0 6rem 8rem;
  width: 100%;
}

.dash-item {
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  margin-bottom: 50px;
  align-items: center;
  justify-content: center;
}

.svg {
  height: 72px;
  width: 72px;
  border-radius: 50%;
  background: white;
  box-shadow: rgb(218 225 233 / 56%) 0px 8px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  margin: auto;
}

@media only screen and (min-width: 992px) {
  .dashcon {
    flex-direction: row;
    margin-top: 70px;
  }

  .dashcon p {
    text-align: left;
  }

  .dashcon h2 {
    text-align: left;
  }
  .left {
    width: 40%;
    margin-top: 30px;
  }
  .right {
    width: 60%;
  }

  .dash-t {
    margin-top: 0;
  }
  .dash-item {
    flex-direction: row;
  }

  .svg {
    height: 72px;
    width: 72px;
    border-radius: 50%;
    background: white;
    box-shadow: rgb(218 225 233 / 56%) 0px 8px 16px;
    display: flex;
    margin-top: -5px;
  }
}
</style>