<template>
  <section class="page_content">
    <div class="container">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
              <NuxtLink to="/">Trang chủ</NuxtLink>
          </li>
          <li class="breadcrumb-item">
            <NuxtLink :to="`${news.urlDM}`">{{ news.tenDanhMuc }}</NuxtLink>
          </li>
          <!-- <li class="breadcrumb-item active" aria-current="page"> {{ news?.tieuDe }}</li> -->
        </ol>
      </nav>
      <h1 class="title_content">
        {{ news.tieuDe }}
      </h1>
      <hr />
      <div style="font-size: 1.1em; line-height: 1.8em;">
        <div v-html="news.noiDung"></div>
      </div>
      <hr />
      <div class="row">
        <div class="col-lg-8 col-md-6 col-12">
          <div
            class="page_title mb-4"
            v-if="relatedNews && relatedNews.length > 0"
          >
            Tin khác
          </div>
          <div class="blog_list blog_list_related">
            <div class="row">
              <div
                class="col-lg-4 col-md-6 col-12"
                v-for="item in relatedNews"
                :key="item.id"
              >
                <div class="item">
                  <NuxtLink :to="`/tin-tuc/${item.seoAlias}`">
                    <div class="img-cover">
                      <img
                        @error="setFallbackImageUrl"
                        :src="
                          `${$store.getters['config-web/getMediaUrl']}${item.pathHinhDaiDien}`
                        "
                      />
                    </div>
                    <div class="item_content">
                      <h3 class="item_tieude">{{ item.tieuDe }}</h3>
                    </div>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-12">
          <div class="page_title mb-4" v-if="hotNews && hotNews.length > 0">
            Tin mới cập nhật
          </div>
          <div class="blog_hot_news">
            <div class="item" v-for="item in hotNews" :key="item.id">
              <NuxtLink :to="`/tin-tuc/${item.seoAlias}`" class="row">
                <div class="item_image col-5">
                  <div class="img-cover">
                    <img
                      @error="setFallbackImageUrl"
                      :src="
                        `${$store.getters['config-web/getMediaUrl']}${item.pathHinhDaiDien}`
                      "
                    />
                  </div>
                </div>
                <div class="item_content col-7">
                  <h3 class="item_tieude">{{ item.tieuDe }}</h3>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  async asyncData({ $http, params }) {
    const slug = params.slug;
    const news = await $http
      .post(
        `http://tk.apicms-gateway.epmt.com.vn:2051/api/v1/CMS/WebTinTucs/GetByAlias`,
        {
          alias: slug,
          cultureId: 1
        }
      )
      .then(res => res.json())
      .then(res => res.result);

    const relatedNews = await $http
      .post(
        `http://tk.apicms-gateway.epmt.com.vn:2051/api/v1/CMS/WebTinTucs/GetList`,
        {
          isNew: null,
          isNoiBat: null,
          isXemNhieu: null,
          arrIdsExclude: [news.id],
          arrIdsDanhMuc: [news.idDanhMuc],
          keyword: null,
          pageNumber: 1,
          pageSize: 4,
          cultureId: 1
        }
      )
      .then(res => res.json())
      .then(res => res.result.items);

    const hotNews = await $http
      .post(
        `http://tk.apicms-gateway.epmt.com.vn:2051/api/v1/CMS/WebTinTucs/GetList`,
        {
          isNew: true,
          isNoiBat: null,
          isXemNhieu: null,
          arrIdsExclude: [news.id],
          arrIdsDanhMuc: [news.idDanhMuc],
          keyword: null,
          pageNumber: 1,
          pageSize: 4,
          cultureId: 1
        }
      )
      .then(res => res.json())
      .then(res => res.result.items);

    return {
      news,
      relatedNews,
      hotNews
    };
  },
  methods: {
    setFallbackImageUrl(event) {
      event.target.src = require(`~/assets/img/NO-IMAGE.png`);
    }
  }
};
</script>
<style lang="scss" scoped>
.blog_hot_news {
  .item {
    margin-bottom: 30px;
  }
}
</style>
