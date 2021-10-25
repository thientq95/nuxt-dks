<template>
  <div class="thongtintuyensinh">
    <div class="section_title text-center">Tuyển sinh đại học</div>
    <table class="table">
      <tbody>
        <tr>
          <td class="text-center">
            Mã trường<br />
            <strong>DKS</strong>
          </td>
          <td>
            <span style="font-size: 26px; color: #eb0000; font-weight: 700"
              >2021</span
            >
          </td>
        </tr>
      </tbody>
    </table>
    <ul class="list-group">
      <li class="list-group-item" v-for="item in banners" :key="item.GroupHinh">
          <a>
              <img :src="`${$store.getters['config-web/getMediaUrl']}${item.GroupHinh}`" />
          </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
    data() {
        return {
            banners: []
        }
    },
    async fetch() {
        const configs = await this.$store.getters["config-web/getConfigs"];
    const valueCauHinh = configs.find(
      (m) => m.keyCauHinh === "TH2000DF_BannerFunctions_ID"
    ).valueCauHinh;

    this.banners = JSON.parse(valueCauHinh);
    }
};
</script>
<style lang="scss">

.news_home {
  .thongtintuyensinh {
    &__head {
      &__title { border-bottom: 1px solid #ccc; }
      &__content {
        .current-year {
          &__text {
            font-size: 26px;
            color: #eb0000;
            font-weight: bold;
          }
        }
      }
    }
    .list-group {
      --animate-val: ease 325ms;
      li {
        padding: 0;
        background: none;
        border-bottom: none;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
        & + li { margin-top: 12px; }
        a {
          overflow: hidden;
          transition: var(--animate-val);
          img {
            max-width: 100%;
            width: 100%;
            object-fit: contain;
            object-position: center;
            transition: var(--animate-val);
          }
          &:hover,
          &:active {
            opacity: 0.8;
            img { transform: scale(1.05); }
          }
        }
      }
    }
  }
}
</style>