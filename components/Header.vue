<template>
  <section>
    <header class="header">
      <div class="header_top">
        <div class="container">
          <nav class="navbar navbar-expand-lg">
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#header_top"
              aria-controls="header_top"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon">
                <i class="fal fa-ellipsis-v"></i>
              </span>
            </button>
            <div class="header_top_mobile d-lg-none">
              <ul class="navbar-nav flex-row w-100">
                <li class="nav-item">
                  <a class="nav-link" href=""
                    ><i class="fas fa-user mr-2"></i>Đăng nhập</a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#"
                    ><img
                      class="mr-2"
                      style="height: 15px"
                      src="~/assets/img/icons/english.png"
                      alt="english"
                    />
                    ENGLISH</a
                  >
                </li>
                <li class="nav-item text-right">
                  <button
                    class="btn"
                    data-toggle="collapse"
                    data-target="#search_top"
                  >
                    <i class="far fa-search"></i>
                  </button>
                  <form class="form-inline collapse" id="search_top">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Nhập từ khóa tìm kiếm"
                    />
                  </form>
                </li>
              </ul>
            </div>

            <div class="collapse navbar-collapse" id="header_top">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                  <a class="nav-link" href="#">Khoa</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Phòng</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Trung tâm</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Văn bản</a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="http://example.com"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    >Tiện ích</a
                  >
                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Tiện ích 1</a>
                    <a class="dropdown-item" href="#">Tiện ích 2</a>
                    <a class="dropdown-item" href="#">Tiện ích 3</a>
                  </div>
                </li>
                <li class="nav-item">
                  <a href="/lien-he" class="nav-link">Liên hệ</a>
                </li>
              </ul>
              <form class="form-inline my-2 my-md-0 d-lg-block d-none">
                <input
                  class="form-control"
                  type="text"
                  placeholder="Nhập từ khóa tìm kiếm"
                />
              </form>
              <ul class="navbar-nav ml-0 ml-md-3 d-lg-flex d-none">
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href=""
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    ><i class="fas fa-user mr-2"></i>Đăng nhập</a
                  >
                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Thông tin tài khoản</a>
                    <a class="dropdown-item" href="#">Đăng xuất</a>
                  </div>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#"
                    ><img
                      class="mr-1"
                      style="height: 15px"
                      src="~/assets/img/icons/english.png"
                      alt="english"
                    />
                    ENGLISH</a
                  >
                  <!-- <a>
                    <img
                      class="mr-1"
                      style="height: 15px"
                      src="~/assets/img/icons/english.png"
                      alt="english"
                    />
                    ENGLISH
                  </a> -->
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      <div class="header_logo d-lg-block d-none">
        <div class="container">
          <div class="header-logo">
            <a href="#" class="logo">
              <!-- <img src="~/assets/img/logo/LOGO-DKS.png" alt="" /> -->
              <img v-if="logoUrl"
                :src="`${$store.getters['config-web/getMediaUrl']}${logoUrl}`"
              />
            </a>
          </div>
        </div>
      </div>
      <div class="header_menu d-lg-block d-none">
        <div class="container">
          <div class="main-menu">
            <nav>
              <ul>
                <li>
                  <NuxtLink to="/" class="active main-menu-link">
                    <i class="fas fa-home"></i>
                  </NuxtLink>
                </li>
                <li>
                  <a href="">Giới thiệu</a>
                </li>
                <li class="has-dropdown">
                  <a href=""
                    >Tin tức - sự kiện <i class="fa fa-angle-down"></i
                  ></a>
                  <ul class="sub-menu">
                    <li><a href="#">Hướng về 50 năm ngày truyền thống</a></li>
                    <li><a href="#">Tin hoạt động trường</a></li>
                    <li><a href="#">Tin hoạt động ngành</a></li>
                    <li><a href="#">Tin tức tiêu điểm</a></li>
                    <li><a href="#">Chào mừng ngày nhà giáo Việt Nam</a></li>
                  </ul>
                </li>
                <li class="has-dropdown">
                  <a href="#"
                    >Đào tạo đại học <i class="fa fa-angle-down"></i
                  ></a>
                  <ul class="sub-menu">
                    <li><a href="#">Link Variable 1</a></li>
                    <li><a href="#">Link Variable 1</a></li>
                    <li><a href="#">Link Variable 1</a></li>
                    <li><a href="#">Link Variable 1</a></li>
                    <li><a href="#">Link Variable 1</a></li>
                  </ul>
                </li>
                <li>
                  <a href="">Đào tạo sau đại học</a>
                </li>
                <li>
                  <a href="">ĐT-BD NV KIỂM SÁT</a>
                </li>
                <li>
                  <a href="">NGHIÊN CỨU KHOA HỌC</a>
                </li>
                <li>
                  <a href="">ĐƠN VỊ TRỰC THUỘC</a>
                </li>
                <li>
                  <a href="">ĐBCL GIÁO DỤC</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div class="mobile-header-section d-block d-lg-none">
        <div class="mobile-header-wrapper">
          <div class="container">
            <div class="row">
              <div
                class="col-12 d-flex justify-content-between align-items-center"
              >
                <div class="mobile-header--left">
                  <a href="" class="mobile-logo-link">
                    <img src="~/assets/img/logo/LOGO-DKS-Footer.png" alt="" />
                  </a>
                </div>
                <div class="mobile-header--right">
                  <a
                    href="#mobile-menu-offcanvas"
                    class="mobile-menu offcanvas-toggle"
                  >
                    <span class="mobile-menu-dash"></span>
                    <span class="mobile-menu-dash"></span>
                    <span class="mobile-menu-dash"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div
      id="mobile-menu-offcanvas"
      class="offcanvas offcanvas-leftside offcanvas-mobile-menu-section"
    >
      <!-- Start Offcanvas Header -->
      <div class="offcanvas-header text-right">
        <button class="offcanvas-close"><i class="fa fa-times"></i></button>
      </div>
      <!-- End Offcanvas Header -->
      <!-- Start Offcanvas Mobile Menu Wrapper -->
      <div class="offcanvas-mobile-menu-wrapper">
        <div class="mobile-menu-center">
          <!-- Start Mobile Menu Nav -->
          <div class="offcanvas-menu">
            <ul>
              <li class="">
                <div class="offcanvas-menu-expand"></div>
                <a href="#"><span>Home</span></a>
                <ul class="mobile-sub-menu" style="display: none">
                  <li><a href="#">Link Variable 0</a></li>
                  <li><a href="#">Link Variable 0</a></li>
                </ul>
              </li>
              <li>
                <div class="offcanvas-menu-expand"></div>
                <a href="#"><span>Shop</span></a>
                <ul class="mobile-sub-menu">
                  <li>
                    <div class="offcanvas-menu-expand"></div>
                    <a href="#">Shop Layout</a>
                    <ul class="mobile-sub-menu">
                      <li><a href="#">Link Variable 1</a></li>
                      <li><a href="#">Link Variable 1</a></li>
                      <li><a href="#">Link Variable 1</a></li>
                      <li><a href="#">Link Variable 1</a></li>
                      <li><a href="#">Link Variable 1</a></li>
                    </ul>
                  </li>
                </ul>
                <ul class="mobile-sub-menu">
                  <li>
                    <div class="offcanvas-menu-expand"></div>
                    <a href="#">Shop Pages</a>
                    <ul class="mobile-sub-menu">
                      <li><a href="#">Link Variable 2</a></li>
                      <li><a href="#">Link Variable 2</a></li>
                      <li><a href="#">Link Variable 2</a></li>
                      <li><a href="#">Link Variable 2</a></li>
                      <li><a href="#">Link Variable 2</a></li>
                    </ul>
                  </li>
                </ul>
                <ul class="mobile-sub-menu">
                  <li>
                    <div class="offcanvas-menu-expand"></div>
                    <a href="#">Product Single</a>
                    <ul class="mobile-sub-menu">
                      <li><a href="#">Link Variable 3</a></li>
                      <li><a href="#">Link Variable 3</a></li>
                      <li><a href="#">Link Variable 3</a></li>
                      <li><a href="#">Link Variable 3</a></li>
                      <li><a href="#">Link Variable 3</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <div class="offcanvas-menu-expand"></div>
                <a href="#"><span>Blogs</span></a>
                <ul class="mobile-sub-menu">
                  <li>
                    <div class="offcanvas-menu-expand"></div>
                    <a href="#">Blog 1</a>
                    <ul class="mobile-sub-menu">
                      <li><a href="#">Link Variable 1</a></li>
                      <li><a href="#">Link Variable 1</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="blog-full-width.html">Blog Full Width</a>
                  </li>
                  <li>
                    <div class="offcanvas-menu-expand"></div>
                    <a href="#">Blog 2</a>
                    <ul class="mobile-sub-menu">
                      <li><a href="#">Link Variable 1</a></li>
                      <li><a href="#">Link Variable 1</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <div class="offcanvas-menu-expand"></div>
                <a href="#"><span>Pages</span></a>
                <ul class="mobile-sub-menu">
                  <li><a href="about-us.html">About Us</a></li>
                  <li><a href="service.html">Service</a></li>
                  <li><a href="faq.html">Frequently Questions</a></li>
                  <li><a href="privacy-policy.html">Privacy Policy</a></li>
                  <li><a href="404.html">404 Page</a></li>
                </ul>
              </li>
              <li><a href="contact-us.html">Contact Us</a></li>
            </ul>
          </div>
          <!-- End Mobile Menu Nav -->
        </div>
        <!-- End Mobile Menu Center -->
      </div>
      <!-- End Offcanvas Mobile Menu Wrapper -->
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      logoUrl: ''
    }
  },
  async fetch() {
    const configs = await this.$store.getters["config-web/getConfigs"];
    this.logoUrl = configs.find(m => m.keyCauHinh === "TH2000DF_Header_Logo").valueCauHinh;
  }
};
</script>
