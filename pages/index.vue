<template>
  <section>
    <!-- <template>{{ $store.getters['config-web/getConfigs'] }}</template> -->
    <SliderHome />
    <SliderBox />
    <section class="hot_news">
      <div class="container">
        <div class="sitewidth">
          <div class="br-title">Tin tức mới cập nhật</div>
          <marquee>
            <ul>
              <li v-for="item in hotNews" :key="item.id">
                <a :href="item.url">{{ item.tieuDe }}</a>
              </li>
            </ul>
          </marquee>
        </div>
      </div>
    </section>
    <section class="news_home">
      <div class="container">
        <div class="row">
          <div class="col-lg-9">
            <b-tabs pills content-class="mt-3">
              <b-tab
                v-for="(group, index) in lefTopNews"
                :key="group.id"
                :title="group.tenDanhMuc"
                :class="{ active: index === 0 }"
              >
                <div class="row">
                  <div class="col-lg-6">
                    <div
                      class="item"
                      v-for="(item, iNews) in group.items.slice(0, 4)"
                      :key="item.id"
                    >
                      <a :href="`/tin-tuc/${item.seoAlias}`" class="row">
                        <div
                          class="image"
                          :class="iNews === 0 ? 'col-12' : 'col-5'"
                        >
                          <img
                            @error="setFallbackImageUrl"
                            :src="
                              `${$store.getters['config-web/getMediaUrl']}${item.pathHinhDaiDien}`
                            "
                          />
                        </div>
                        <div
                          class="content"
                          :class="iNews === 0 ? 'col-12' : 'col-7'"
                        >
                          <h3 class="item_tieude">
                            {{ item.tieuDe }}
                            <span class="item_date_time d-block"
                              >24/5/2021</span
                            >
                          </h3>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div
                      class="item"
                      v-for="item in group.items.slice(4, 10)"
                      :key="item.id"
                    >
                      <a :href="`/tin-tuc/${item.seoAlias}`" class="row">
                        <div class="image col-5">
                          <img
                            @error="setFallbackImageUrl"
                            :src="
                              `${$store.getters['config-web/getMediaUrl']}${item.pathHinhDaiDien}`
                            "
                          />
                        </div>
                        <div class="content col-7">
                          <h3 class="item_tieude">
                            {{ item.tieuDe }}
                          </h3>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </b-tab>
            </b-tabs>
          </div>
          <div class="col-lg-3">
            <TuyenSinhBanner />
          </div>
        </div>
      </div>
    </section>
    <Links />
    <section class="news_home">
      <div class="container">
        <div class="row">
          <div class="col-lg-4" v-for="group in bottomNews" :key="group.id">
            <div class="card">
              <div class="card-header">{{ group.tenDanhMuc }}</div>
              <div class="card-body">
                <div class="news_content">
                  <div
                    class="item"
                    v-for="(item, iNews) in group.items"
                    :key="item.id"
                  >
                    <a href="" title="" class="row">
                      <div
                        class="image"
                        :class="iNews === 0 ? 'col-12' : 'col-5'"
                      >
                        <img
                          @error="setFallbackImageUrl"
                          :src="
                            `${$store.getters['config-web/getMediaUrl']}${item.pathHinhDaiDien}`
                          "
                        />
                      </div>
                      <div
                        class="content"
                        :class="iNews === 0 ? 'col-12' : 'col-7'"
                      >
                        <h3 class="item_tieude">
                          {{ item.tieuDe }}
                          <span class="item_date_time d-block">24/5/2021</span>
                        </h3>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card">
              <div class="card-header">Văn bản pháp luật</div>
              <div class="card-body">
                <div class="news_content">
                  <div
                    class="item"
                    v-for="item in vanBanPhapLuats"
                    :key="item.id"
                  >
                    <a href="javascript:void(0)" :title="item.tenTaiLieu"
                      ><div class="item_content">
                        <h3 class="item_tieude">
                          <strong style="color: #e3393c">{{
                            item.kyHieuVanBan
                          }}</strong>
                          {{ item.tenTaiLieu }}
                        </h3>
                      </div></a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <NganhDaoTao />
    <section class="media_home">
      <div class="container">
        <div class="media_list">
          <b-tabs pills content-class="mt-3">
            <b-tab title="Ảnh hoạt động" active><SliderImage /></b-tab>
            <b-tab title="Video"><SliderVideo /></b-tab>
          </b-tabs>
        </div>
        <Banner />
      </div>
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      hotNews: [],
      lefTopNews: [],
      bottomNews: [],
      vanBanPhapLuats: []
    };
  },

  async fetch() {
    const configs = this.$store.getters["config-web/getConfigs"];
    const valueCauHinhLeftTopNews = configs.find(
      m => m.keyCauHinh === "TH2000DF_GroupTinTucTopLeft_ID"
    ).valueCauHinh;
    const pIdLeftTops = valueCauHinhLeftTopNews
      .split(",")
      .map(x => Number.parseInt(x));

    this.lefTopNews = await this.$http
      .post(
        `http://tk.apicms-gateway.epmt.com.vn:2051/api/v1/CMS/WebTinTucs/GetListForDanhMuc`,
        {
          arrIdsDanhMuc: pIdLeftTops,
          cultureId: 1,
          pageNumber: 1,
          pageSize: 10
        }
      )
      .then(res => res.json())
      .then(res => res.result.items)
      .then(res => {
        return pIdLeftTops.map(x => {
          return {
            id: x,
            tenDanhMuc: res.find(news => news.idDanhMuc === x)?.tenDanhMuc,
            items: res.filter(news => news.idDanhMuc === x)
          };
        });
      });

    const valueCauHinhBottomNews = configs.find(
      m => m.keyCauHinh === "TH2000DF_GroupTinTucBottomLeft_ID"
    ).valueCauHinh;
    const pIdBottoms = valueCauHinhBottomNews
      .split(",")
      .map(x => Number.parseInt(x));

    this.bottomNews = await this.$http
      .post(
        `http://tk.apicms-gateway.epmt.com.vn:2051/api/v1/CMS/WebTinTucs/GetListForDanhMuc`,
        {
          arrIdsDanhMuc: pIdBottoms,
          cultureId: 1,
          pageNumber: 1,
          pageSize: 5
        }
      )
      .then(res => res.json())
      .then(res => res.result.items)
      .then(res => {
        return pIdBottoms.map(x => {
          return {
            id: x,
            tenDanhMuc: res.find(news => news.idDanhMuc === x)?.tenDanhMuc,
            items: res.filter(news => news.idDanhMuc === x)
          };
        });
      });

    this.hotNews = await this.$http
      .post(
        `http://tk.apicms-gateway.epmt.com.vn:2051/api/v1/CMS/WebTinTucs/GetList`,
        {
          cultureId: 1,
          isNew: true,
          pageNumber: 1,
          pageSize: 5
        }
      )
      .then(res => res.json())
      .then(res => res.result.items);

    this.vanBanPhapLuats = await this.$http
      .post(
        `http://tk.apicms-gateway.epmt.com.vn:2051/api/v1/CMS/WebVanBanPhapLuats/GetList`,
        {
          cultureId: 1,
          pageNumber: 1,
          pageSize: 6
        }
      )
      .then(res => res.json())
      .then(res => res.result.items);
  },
  methods: {
    setFallbackImageUrl(event) {
      event.target.src = require(`~/assets/img/NO-IMAGE.png`);
    }
  }
};
</script>
