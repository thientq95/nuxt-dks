<template>
  <div class="carousel-wrapper-box">
    <client-only>
      <carousel v-bind="options" :navigationEnabled="true">
        <slide v-for="item in items" :key="item.id">
          <div class="item">
            <a href="" title="">
              <div _ngcontent-oma-c66="" class="card">
                <div _ngcontent-oma-c66="" class="img-cover">
                  <img
                  :src="`${$store.getters['config-web/getMediaUrl']}${item.path}`"
                />
                </div>
                <div class="card-body">
                  <h3 class="item_tieude">
                    {{ item.tenAnh }}
                  </h3>
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
      (m) => m.keyCauHinh === "TH2000DF_ThuVienAnh_ID"
    ).valueCauHinh;

    this.items = await this.$http
      .post(
        `http://gatewaycms.tks.edu.vn/api/v1/CMS/WebThuVienAnhs/GetListThuVienAnh`,
        {
          cultureId: 1,
          pageNumber: 1,
          pageSize: 10,
          arrIdsAlbum: valueCauHinh ? [valueCauHinh] : [],
        }
      )
      .then((res) => res.json())
      .then((res) => res.result.items);
  },
};
</script>
<style lang="scss">
.carousel-wrapper-box {
  position: relative;
  //   height: 200px;
  //   overflow: hidden;
  .item {
      padding: 10px;
  }
  .VueCarousel-slide {
    text-align: center;
  }
  .VueCarousel-navigation-button {
    transition: all 0.4s ease-out;
    background: rgba(0, 0, 0, 0.5) !important;
    width: 40px;
    cursor: pointer;
    height: 40px;
    position: absolute;
    display: none;
    z-index: 1000;
    margin: auto 5px;
    top: 0;
    bottom: 0;
    border: none;
    border-radius: 3px;
    animation: sliderAnimation 0.2s linear;
    i {
      color: #fff;
    }
  }
  .VueCarousel-navigation-prev {
    left: 40px !important;
  }
  .VueCarousel-navigation-next {
    right: 40px !important;
  }
  &:hover {
    .VueCarousel-navigation-button {
      display: block;
    }
  }
}
</style>