<template>
  <div class="carousel-wrapper-box">
    <client-only>
      <carousel v-bind="options" :navigationEnabled="true">
        <slide v-for="item in items" :key="item.id" class="img-wrapper">
          <div class="item">
            <a :href="item.linkVideo" :title="item.tieuDe" target="_blank">
              <div class="card">
                <iframe
                  :src="`${item.linkVideo}`"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <div class="card-body">
                  <h3 class="item_tieude">{{ item.tieuDe }}</h3>
                </div>
              </div>
            </a>
          </div>
        </slide>
      </carousel>
    </client-only>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [],
      options: {
        loop: true,
        perPage: 3,
        paginationEnabled: false,
        navigationNextLabel: '<i class="fa fa-angle-right"></i>',
        navigationPrevLabel: '<i class="fa fa-angle-left"></i>',
      },
    };
  },
  async fetch() {
    const configs = await this.$store.getters["config-web/getConfigs"];
    const valueCauHinh = configs.find(
      (m) => m.keyCauHinh === "TH2000DF_ThuVienVideo_ID"
    ).valueCauHinh;

    this.items = await this.$http
      .post(
        `http://tk.apicms-gateway.epmt.com.vn:2051/api/v1/CMS/WebVideos/GetList`,
        {
          cultureId: 1,
          pageNumber: 1,
          pageSize: 10,
          arrIdsLoai: valueCauHinh ? [valueCauHinh] : [],
        }
      )
      .then((res) => res.json())
      .then((res) => res.result.items);
  },
};
</script>
<style lang="scss" scoped>
.VueCarousel-slide {
visibility: visible;
flex-basis: cacl(100% / 3) !important;
}
</style>