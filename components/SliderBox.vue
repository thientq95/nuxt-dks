<template>
  <section class="utility_menu">
    <div class="container">
      <div class="carousel-wrapper-box">
        <client-only>
          <carousel v-bind="data.options" :navigationEnabled="true">
            <slide v-for="item in data.items" :key="item.GroupHinh" class="img-wrapper">
              <div class="item">
                  <div class="card">
                    <div class="card-body">
                      <a href="" title="">
                        <img :src="`${$store.getters['config-web/getMediaUrl']}${item.GroupHinh}`" />
                        <h4>{{ item.GroupQCTitle }}</h4>
                      </a>
                    </div>
                  </div>
                </div>
            </slide>
          </carousel>
        </client-only>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      data: {
        items: [],
        options: {
          loop: true,
          perPage: 5,
          paginationEnabled: false,
        },
      },
    };
  },
  async fetch() {
    const configs = await this.$store.getters["config-web/getConfigs"];
    const valueCauHinh = configs.find((m) => m.keyCauHinh === "TH2000DF_GroupFunctions01_ID"
    ).valueCauHinh;

    this.data.items = JSON.parse(valueCauHinh);
  }
};
</script>