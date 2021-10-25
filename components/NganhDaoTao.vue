<template>
  <section class="nganh_daotao">
    <div class="container">
      <div class="section_title text-center">Ngành đào tạo</div>
      <b-tabs pills content-class="mt-3">
        <b-tab
          v-for="(group, index) in nganhDaoTaos"
          :key="group.id"
          :title="group.tenNhom"
          :active="index === 0"
        >
          <div class="carousel-wrapper-nganhdaotao">
            <client-only>
              <carousel v-if="group.items.length" v-bind="options" :navigationEnabled="true">
                <slide
                  v-for="item in group.items"
                  :key="item.id"
                  class="img-wrapper"
                >
                  <div class="item">
                    <div class="card">
                      <div class="card-body">
                        <h5>{{ item.tenNganh }}</h5>
                      </div>
                      <div class="card-footer">
                        <a :href="item.url" title=""
                          >Xem thêm <i class="fas fa-caret-circle-right"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                </slide>
              </carousel>
            </client-only>
          </div>
        </b-tab>
      </b-tabs>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      nganhDaoTaos: [],
      options: {
        loop: true,
        perPage: 5,
        paginationEnabled: false,
        navigationNextLabel: '<i class="fa fa-angle-right"></i>',
        navigationPrevLabel: '<i class="fa fa-angle-left"></i>',
      },
    };
  },
  async fetch() {
    const configs = this.$store.getters["config-web/getConfigs"];
    const valueCauHinh = configs.find(
      (m) => m.keyCauHinh === "TH2000DF_NganhDaoTao_ID"
    ).valueCauHinh;
    const pIds = valueCauHinh.split(",").map((x) => Number.parseInt(x));

    this.nganhDaoTaos = await this.$http
      .post(
        `http://gatewaycms.tks.edu.vn/api/v1/CMS/WebNganhDaoTaos/GetListForDanhMuc`,
        {
          arrIdsNhom: pIds,
          cultureId: 1,
          pageNumber: 1,
          pageSize: 10,
        }
      )
      .then((res) => res.json())
      .then((res) => res.result.items)
      .then((res) => {
        return pIds.map((x) => {
          return {
            id: x,
            tenNhom: res.find((news) => news.idNhom === x)?.tenNhom,
            items: res.filter((news) => news.idNhom === x),
          };
        });
      });
  },
};
</script>
<style lang="scss" scoped>
.VueCarousel-slide {
visibility: visible;
flex-basis: calc(100% / 5) !important;
}
</style>