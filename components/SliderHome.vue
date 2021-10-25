<template>
  <section class="slide_home">
    <div class="carousel-wrapper">
      <client-only>
        <carousel v-bind="data.options" :navigationEnabled="true">
          <slide v-for="item in data.items" :key="item.GroupHinh" class="img-wrapper">
            <!-- <img :src="`~/assets/img/banner/${i}`" /> -->
            <div class="item">
              <img :src="`${$store.getters['config-web/getMediaUrl']}${item.GroupHinh}`" />
              <div class="cover">
                <div class="header-content">
                  <h4>
                    {{ item.GroupQCTitle }}
                  </h4>
                </div>
              </div>
            </div>
          </slide>
        </carousel>
      </client-only>
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
          perPage: 1,
          paginationEnabled: false,
          navigationNextLabel: '<i class="fa fa-angle-right"></i>',
          navigationPrevLabel: '<i class="fa fa-angle-left"></i>',
        },
      },
    };
  },
  async fetch() {
    const configs = await this.$store.getters["config-web/getConfigs"];
    const valueCauHinh = configs.find(
      (m) => m.keyCauHinh === "TH2000DF_SlideShow_ID"
    ).valueCauHinh;

    this.data.items = JSON.parse(valueCauHinh);
  },
};
</script>
<style lang="scss">
.carousel-wrapper {
  position: relative;
  height: 500px;
  overflow: hidden;
  &:hover {
    .VueCarousel-navigation-button {
      display: block;
    }
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
    // top: 40% !important;
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
}
.img-wrapper img {
  max-width: 100%;
  height: auto;
  -o-object-fit: cover;
  object-fit: cover;
}
</style>