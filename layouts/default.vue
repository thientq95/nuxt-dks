<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
export default {
  data() {
    return {
      configs: null,
    };
  },

  async asyncData({ $http, store }) {
    const response = await $http.post("http://gatewaycms.tks.edu.vn/api/v1/CMS/Websites/GetCauHinhForWeb", {
      cultureId: 1
    }).then(res => res.json());

    store.dispatch('config-web/storeConfig', response.result); 
  },

  async fetch() {
    const response = await this.$http.post("http://gatewaycms.tks.edu.vn/api/v1/CMS/Websites/GetCauHinhForWeb", {
      cultureId: 1
    }).then(res => res.json());

    this.$store.dispatch('config-web/storeConfig', response.result); 
  },

  computed: {
    authenticated() {
      return this.$store.getters.authenticated;
    },
    user() {
      return {
        userName: "Trần Quốc Thiện",
      };
    },
  },
};
</script>