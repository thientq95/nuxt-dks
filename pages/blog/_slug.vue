<template>
  <section>
    <section class="page_content">
      <div class="container">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <NuxtLink to="/">Trang chủ</NuxtLink>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Tin tức sự kiện
            </li>
          </ol>
        </nav>
        <div class="blog_list">
          <div class="row">
            <div class="col-md-4" v-for="item in news" :key="item.id">
              <div class="card border-0 mb-4">
                <NuxtLink :to="item.url">
                  <div class="img-cover">
                    <img
                      @error="setFallbackImageUrl"
                      :src="
                        `${$store.getters['config-web/getMediaUrl']}${item.hinhDaiDien}`
                      "
                    />
                  </div>
                  <div class="item_content">
                    <p class="item_tieude">
                      {{ item.tieuDe }}
                      <span class="item_date_time">{{ formatDate(item.ngayHienThi) }}</span>
                    </p>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
          <div class="text-center">
            <nav class="d-inline-block" aria-label="Page navigation">
              <ul class="pagination">
                <li class="page-item">
                  <a class="page-link" href="#"
                    ><i class="fal fa-chevron-double-left"></i
                  ></a>
                </li>
                <li class="page-item active">
                  <a class="page-link" href="#">1</a>
                </li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                  <a class="page-link" href="#"
                    ><i class="fal fa-chevron-double-right"></i
                  ></a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>
<script>
export default {
  async asyncData({ $http, params }) {
    const slug = params.slug;
    const newsCatagory = await $http
      .post(
        `http://gatewaycms.tks.edu.vn/api/v1/CMS/WebTinTucs/GetDanhMucByAlias`,
        {
          alias: slug.split(".")[0],
          cultureId: 1,
          cultureIdMap: 0
        }
      )
      .then(res => res.json())
      .then(res => res.result);

    const news = await $http
      .post(
        `http://gatewaycms.tks.edu.vn/api/v1/CMS/WebTinTucs/GetList`,
        {
          arrIdsDanhMuc: [newsCatagory.id],
          cultureId: 1,
          pageNumber: 1,
          pageSize: 9
        }
      )
      .then(res => res.json())
      .then(res => res.result.items);
    console.log(news);
    return {
      newsCatagory,
      news
    };
  },
  methods: {
    setFallbackImageUrl(event) {
      event.target.src = require(`~/assets/img/NO-IMAGE.png`);
    },
    formatDate(date) {
      const today = new Date(date);
      const dd = String(today.getDate()).padStart(2, '0');
      const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
      const yyyy = today.getFullYear();
      return `${dd}/${mm}/${yyyy}`;
    }
  }
};
</script>
