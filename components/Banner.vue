<template>
  <div class="banner_home row">
    <div class="col-lg-6" v-for="item in links" :key="item.GroupHinh">
      <a href="" title="">
        <img
          :src="`${$store.getters['config-web/getMediaUrl']}${item.GroupHinh}`"
        />
      </a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      links: [],
    };
  },
  async fetch() {
    const configs = await this.$store.getters["config-web/getConfigs"];
    const valueCauHinh = configs.find(
      (m) => m.keyCauHinh === "TH2000DF_BannerQuangCao_ID"
    ).valueCauHinh;

    this.links = JSON.parse(valueCauHinh);
  },
};
</script>