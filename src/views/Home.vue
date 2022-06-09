<template>
  <div>
    <Hero />
    <FirstSection />
    <SecondSection />

    <Fourth />
  </div>
</template>

<script>
import Hero from "@/components/Hero.vue";
import FirstSection from "@/components/FirstSection.vue";
import SecondSection from "@/components/SecondSection.vue";

import Fourth from "@/components/Fourth.vue";

export default {
  name: "Home",
  components: {
    Hero,
    FirstSection,
    SecondSection,
    Fourth,
  },
};
</script>
