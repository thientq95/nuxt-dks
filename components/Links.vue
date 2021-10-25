<template>
    <section class="links">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-xl-3" v-for="item in links" :key="item.GroupHinh">
            <div class="card">
              <div class="card-body">
                <a href="" title="" class="row align-items-center">
                  <div class="image pr-0 col-3">
                    <img :src="`${$store.getters['config-web/getMediaUrl']}${item.GroupHinh}`" />
                  </div>
                  <div class="content col-9">{{ item.GroupQCTitle }}</div>
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
</template>
<script>
export default {
  data() {
    return {
      links: []
    }
  },
  async fetch() {
    const configs = await this.$store.getters["config-web/getConfigs"];
    const valueCauHinh = configs.find(
      (m) => m.keyCauHinh === "TH2000DF_GroupFunctions02_ID"
    ).valueCauHinh;

    this.links = JSON.parse(valueCauHinh);
  },
}
</script>