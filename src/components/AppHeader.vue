<template>
  <div class="con">
    <header>
      <nav id="nav" @mouseleave="hideLinks">
        <router-link class="link" to="/">
          <h4><i class="fi fi-brands-bitcoin"></i> Cryptodeu</h4>
        </router-link>
        <ul class="link-wrapper">
          <li>
            <router-link to="/prices">View More Prices</router-link>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

 <script>
export default {
  data() {
    return {
      show: false,
      showLearn: false,
      showIndi: false,
      showBusiness: false,
    };
  },
  methods: {
    toggleShow() {
      this.show = !this.show;
    },
    toggleShowLearn() {
      this.showLearn = true;
      this.showIndi = false;
      this.showBusiness = false;
    },
    toggleShowIndi() {
      this.showIndi = true;
      this.showBusiness = false;
      this.showLearn = false;
    },
    toggleShowBus() {
      this.showBusiness = true;
      this.showIndi = false;
      this.showLearn = false;
    },
    hideLinks() {
      this.showLearn = false;
      this.showIndi = false;
      this.showBusiness = false;
    },
  },
};
</script>


<style scoped>
/* <style scoped> */
.con {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 1;
  width: 100%;
}
header {
  height: 60px;
  background-color: white;
  border-bottom: 1px solid rgb(236, 239, 241);
}

#nav {
  display: flex;
  width: 90%;
  height: 60px;
  margin: 0 auto;
  align-items: center;
}

#nav a {
  text-decoration: none;
  color: rgb(5, 15, 25);
  font-weight: 900;
  font-size: 1.2rem;
  color: #d59030;
}

.link {
  display: block;
  width: 100%;
}

.link-wrapper {
  display: none;
}

.link-wrapper li {
  list-style-type: none;
  margin-left: 20px;
  font-size: 15px;
  height: 56px;
  display: flex;
  align-items: center;
  border-bottom: 4px solid white;
}

li:hover {
  border-bottom: 4px solid #e89030;
}

@media only screen and (min-width: 992px) {
  .con {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 1;
    width: 100%;
  }
  header {
    height: 60px;
    background-color: white;
    border-bottom: 1px solid rgb(236, 239, 241);
  }

  #nav {
    display: flex;
    justify-content: space-between;
    width: 90%;
    height: 60px;
    margin: 0 auto;
    align-items: center;
  }

  #nav a {
    text-decoration: none;
    color: rgb(5, 15, 25);
    font-weight: 900;
    color: #d59030;
  }

  .link {
    width: 20%;
  }

  .link-wrapper {
    display: flex;
    margin-left: 120px;
  }

  .link-wrapper li {
    list-style-type: none;
    margin-left: 20px;
    font-size: 15px;
    height: 56px;
    display: flex;
    align-items: center;
    border-bottom: 4px solid white;
  }

  li:hover {
    border-bottom: 4px solid #e89030;
  }
}
</style>