<template>
  <section>
    <section class="page_content">
      <div class="container">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Trang chủ</a></li>
            <li class="breadcrumb-item active" aria-current="page">
              Thông tin liên hệ
            </li>
          </ol>
        </nav>
        <div class="row mb-4">
          <div class="col-lg-6 pr-lg-0">
            <div
              class="
                bg-gray
                px-3
                pt-md-4
                px-md-4
                text-center
                overflow-hidden
                h-100
              "
            >
              <div class="my-3 p-3">
                <h2 class="display-5">TRƯỜNG ĐẠI HỌC KIỂM SÁT HÀ NỘI</h2>
                <p class="lead">
                  Địa chỉ: Phường Dương Nội – Quận Hà Đông – TP.Hà Nội
                  <br />Website: https://tks.edu.vn/
                </p>

                <p>Thông tin liên hệ</p>
                <p class="lead">
                  Điện thoại: 024 3358 1280 – 024 3387 8340<br />
                  Email: phongdaotao.dhkshn@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-6 pl-lg-0">
            <img src="img/banner/lienhe.png" alt="" />
          </div>
        </div>

        <ul class="nav nav-pills nav_contact" id="pills-tab" role="tablist">
          <li class="nav-item">
            <a
              class="nav-link active"
              id="pills-home-tab"
              data-toggle="pill"
              href="#pills-1"
              role="tab"
              aria-selected="true"
              >Đóng góp ý kiến</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              id="pills-profile-tab"
              data-toggle="pill"
              href="#pills-2"
              role="tab"
              aria-selected="false"
              >Đăng ký nhận tin</a
            >
          </li>
        </ul>
        <div class="tab-content tab-content_contact mb-4" id="pills-tabContent">
          <div class="tab-pane fade show active" id="pills-1" role="tabpanel">
            <form action="" class="mx-auto" style="max-width: 500px">
              <p>Vui lòng nhập đầy đủ thông tin. Chúng tôi sẽ liên hệ lại</p>
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Tiêu đề" />
              </div>
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Họ tên" />
              </div>
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Email" />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Số điện thoại"
                />
              </div>
              <div class="form-group">
                <textarea
                  name=""
                  id=""
                  class="form-control"
                  cols="30"
                  rows="4"
                  placeholder="Nội dung"
                ></textarea>
              </div>
              <div class="mt-3">
                <button type="submit" class="btn btn-danger w-100">GỬI</button>
              </div>
            </form>
          </div>
          <div class="tab-pane fade" id="pills-2" role="tabpanel">
            <form action="" class="mx-auto" style="max-width: 500px">
              <div class="form-group row">
                <label class="col-sm-4 col-form-label">Email nhận tin</label>
                <div class="col-sm-8">
                  <input type="text" class="form-control" placeholder="" />
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-4 col-form-label">Mục tin nhận</label>
                <div class="col-sm-8">
                  <div class="form-check mt-2">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      Văn bản mới ban hành
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                      checked
                    />
                    <label class="form-check-label" for="flexCheckChecked">
                      Thông tin nghiệp vụ
                    </label>
                  </div>
                </div>
              </div>
              <div class="mt-3">
                <button type="submit" class="btn btn-danger w-100">
                  ĐĂNG KÝ
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <section class="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.5865818586403!2d105.74495551488235!3d20.969111186030762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31345302bff4b6dd%3A0x2dc8f10d9b665688!2zxJDhuqFpIGjhu41jIGtp4buDbSBzw6F0IEjDoCBO4buZaQ!5e0!3m2!1svi!2s!4v1628126994936!5m2!1svi!2s"
        width="100%"
        height="400"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </section>
  </section>
</template>