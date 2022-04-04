<template>
  <layout-default>
    <div class="pcoded-content">
      <!-- [ breadcrumb ] start -->
      <div class="page-header card">
        <div class="row align-items-end">
          <div class="col-lg-8">
            <div class="page-header-title">
              <i class="feather icon-home bg-c-blue"></i>
              <div class="d-inline">
                <h5>Dashboard</h5>
                <span
                  >lorem ipsum dolor sit amet, consectetur adipisicing
                  elit</span
                >
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="page-header-breadcrumb">
              <ul class="breadcrumb breadcrumb-title">
                <li class="breadcrumb-item">
                  <a href="index-2.html"><i class="feather icon-home"></i></a>
                </li>
                <li class="breadcrumb-item"><a href="#!">Dashboard</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- [ breadcrumb ] end -->
      <div class="pcoded-inner-content">
        <div class="main-body">
          <div class="page-wrapper">
            <div class="page-body">
              <!-- [ page content ] start -->
              <div class="row">
                <!-- Project statustic start -->
                <div class="col-xl-12">
                  <div class="card proj-progress-card">
                    <div class="card-block">
                      <div class="row">
                        <div class="col-xl-3 col-md-6">
                          <h6>Published Project</h6>
                          <h5 class="m-b-30 f-w-700">
                            532<span class="text-c-green m-l-10">+1.69%</span>
                          </h5>
                          <div class="progress">
                            <div
                              class="progress-bar bg-c-red"
                              style="width: 25%"
                            ></div>
                          </div>
                        </div>
                        <div class="col-xl-3 col-md-6">
                          <h6>Completed Task</h6>
                          <h5 class="m-b-30 f-w-700">
                            4,569<span class="text-c-red m-l-10">-0.5%</span>
                          </h5>
                          <div class="progress">
                            <div
                              class="progress-bar bg-c-blue"
                              style="width: 65%"
                            ></div>
                          </div>
                        </div>
                        <div class="col-xl-3 col-md-6">
                          <h6>Successfull Task</h6>
                          <h5 class="m-b-30 f-w-700">
                            89%<span class="text-c-green m-l-10">+0.99%</span>
                          </h5>
                          <div class="progress">
                            <div
                              class="progress-bar bg-c-green"
                              style="width: 85%"
                            ></div>
                          </div>
                        </div>
                        <div class="col-xl-3 col-md-6">
                          <h6>Ongoing Project</h6>
                          <h5 class="m-b-30 f-w-700">
                            365<span class="text-c-green m-l-10">+0.35%</span>
                          </h5>
                          <div class="progress">
                            <div
                              class="progress-bar bg-c-yellow"
                              style="width: 45%"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Project statustic end -->
                <!-- testimonial and top selling start -->
                <div class="col-md-12">
                  <div class="card table-card">
                    <div class="card-header">
                      <h5>New Products</h5>
                      <div class="card-header-right">
                        <ul class="list-unstyled card-option">
                          <li class="first-opt">
                            <i
                              class="feather icon-chevron-left open-card-option"
                            ></i>
                          </li>
                          <li>
                            <i class="feather icon-maximize full-card"></i>
                          </li>
                          <li>
                            <i class="feather icon-minus minimize-card"></i>
                          </li>
                          <li>
                            <i class="feather icon-refresh-cw reload-card"></i>
                          </li>
                          <li><i class="feather icon-trash close-card"></i></li>
                          <li>
                            <i
                              class="feather icon-chevron-left open-card-option"
                            ></i>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="card-block p-b-0">
                      <div class="table-responsive">
                        <table class="table table-hover m-b-0">
                          <thead>
                            <tr>
                              <th>Name</th>
                              <th>Product Code</th>
                              <th>Customer</th>
                              <th>Status</th>
                              <th>Rating</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Sofa</td>
                              <td>#PHD001</td>
                              <td>abc@gmail.com</td>
                              <td>
                                <label class="label label-danger"
                                  >Out Stock</label
                                >
                              </td>
                              <td>
                                <a href="#!"
                                  ><i class="fa fa-star f-12 text-c-yellow"></i
                                ></a>
                                <a href="#!"
                                  ><i class="fa fa-star f-12 text-c-yellow"></i
                                ></a>
                                <a href="#!"
                                  ><i class="fa fa-star f-12 text-c-yellow"></i
                                ></a>
                                <a href="#!"
                                  ><i class="fa fa-star f-12 text-default"></i
                                ></a>
                                <a href="#!"
                                  ><i class="fa fa-star f-12 text-default"></i
                                ></a>
                              </td>
                            </tr>
                            <tr>
                              <td>Computer</td>
                              <td>#PHD002</td>
                              <td>cdc@gmail.com</td>
                              <td>
                                <label class="label label-success"
                                  >In Stock</label
                                >
                              </td>
                              <td>
                                <a href="#!"
                                  ><i class="fa fa-star f-12 text-c-yellow"></i
                                ></a>
                                <a href="#!"
                                  ><i class="fa fa-star f-12 text-c-yellow"></i
                                ></a>
                                <a href="#!"
                                  ><i class="fa fa-star f-12 text-default"></i
                                ></a>
                                <a href="#!"
                                  ><i class="fa fa-star f-12 text-default"></i
                                ></a>
                                <a href="#!"
                                  ><i class="fa fa-star f-12 text-default"></i
                                ></a>
                              </td>
                            </tr>
                            <tr>
                              <td>Mobile</td>
                              <td>#PHD003</td>
                              <td>pqr@gmail.com</td>
                              <td>
                                <label class="label label-danger"
                                  >Out Stock</label
                                >
                              </td>
                              <td>
                                <a href="#!"
                                  ><i class="fa fa-star f-12 text-c-yellow"></i
                                ></a>
                                <a href="#!"
                                  ><i class="fa fa-star f-12 text-c-yellow"></i
                                ></a>
                                <a href="#!"
                                  ><i class="fa fa-star f-12 text-c-yellow"></i
                                ></a>
                                <a href="#!"
                                  ><i class="fa fa-star f-12 text-c-yellow"></i
                                ></a>
                                <a href="#!"
                                  ><i class="fa fa-star f-12 text-default"></i
                                ></a>
                              </td>
                            </tr>
                            <tr>
                              <td>Coat</td>
                              <td>#PHD004</td>
                              <td>bcs@gmail.com</td>
                              <td>
                                <label class="label label-success"
                                  >In Stock</label
                                >
                              </td>
                              <td>
                                <a href="#!"
                                  ><i class="fa fa-star f-12 text-c-yellow"></i
                                ></a>
                                <a href="#!"
                                  ><i class="fa fa-star f-12 text-c-yellow"></i
                                ></a>
                                <a href="#!"
                                  ><i class="fa fa-star f-12 text-c-yellow"></i
                                ></a>
                                <a href="#!"
                                  ><i class="fa fa-star f-12 text-default"></i
                                ></a>
                                <a href="#!"
                                  ><i class="fa fa-star f-12 text-default"></i
                                ></a>
                              </td>
                            </tr>
                            <tr>
                              <td>Watch</td>
                              <td>#PHD005</td>
                              <td>cdc@gmail.com</td>
                              <td>
                                <label class="label label-success"
                                  >In Stock</label
                                >
                              </td>
                              <td>
                                <a href="#!"
                                  ><i class="fa fa-star f-12 text-c-yellow"></i
                                ></a>
                                <a href="#!"
                                  ><i class="fa fa-star f-12 text-c-yellow"></i
                                ></a>
                                <a href="#!"
                                  ><i class="fa fa-star f-12 text-default"></i
                                ></a>
                                <a href="#!"
                                  ><i class="fa fa-star f-12 text-default"></i
                                ></a>
                                <a href="#!"
                                  ><i class="fa fa-star f-12 text-default"></i
                                ></a>
                              </td>
                            </tr>
                            <tr>
                              <td>Shoes</td>
                              <td>#PHD006</td>
                              <td>pqr@gmail.com</td>
                              <td>
                                <label class="label label-danger"
                                  >Out Stock</label
                                >
                              </td>
                              <td>
                                <a href="#!"
                                  ><i class="fa fa-star f-12 text-c-yellow"></i
                                ></a>
                                <a href="#!"
                                  ><i class="fa fa-star f-12 text-c-yellow"></i
                                ></a>
                                <a href="#!"
                                  ><i class="fa fa-star f-12 text-c-yellow"></i
                                ></a>
                                <a href="#!"
                                  ><i class="fa fa-star f-12 text-c-yellow"></i
                                ></a>
                                <a href="#!"
                                  ><i class="fa fa-star f-12 text-default"></i
                                ></a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- testimonial and top selling end -->

                <!-- lettest acivity and statustic card start -->

                <!-- lettest acivity and statustic card end -->
              </div>
              <!-- [ page content ] end -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </layout-default>
</template>

<script>
import LayoutDefault from "./layouts/LayoutDefault.vue";

export default {
  name: "Home",
  created() {
    this.$emit("update:layout", LayoutDefault);
  },
  components: {
  }
};
</script>