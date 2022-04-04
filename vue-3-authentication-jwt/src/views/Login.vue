<template>
  <section class="login-block">
    <!-- Container-fluid starts -->
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-12">
          <!-- Authentication card start -->
          <Form
            @submit="handleLogin"
            :validation-schema="schema"
            class="md-float-material form-material"
          >
            <div class="text-center">
              <!-- <img src="../files/assets/images/logo.png" alt="logo.png" /> -->
            </div>
            <div class="auth-box card">
              <div class="card-block">
                <div class="row m-b-20">
                  <div class="col-md-12">
                    <h3 class="text-center txt-primary">Sign In</h3>
                  </div>
                </div>
                <div class="row m-b-20">
                  <div class="col-md-6">
                    <button class="btn btn-facebook m-b-20 btn-block">
                      <i class="icofont icofont-social-facebook"></i>facebook
                    </button>
                  </div>
                  <div class="col-md-6">
                    <button class="btn btn-twitter m-b-20 btn-block">
                      <i class="icofont icofont-social-twitter"></i>twitter
                    </button>
                  </div>
                </div>
                <p class="text-muted text-center p-b-5">
                  Sign in with your regular account
                </p>
                <div class="form-group form-primary">
                  <!-- <input
                    type="text"
                    name="user-name"
                    class="form-control"
                    required=""
                  /> -->
                  <Field name="username" type="text" class="form-control" />
                  <ErrorMessage name="username" class="error-feedback" />
                  <span class="form-bar"></span>
                  <label class="float-label">Username</label>
                </div>
                <div class="form-group form-primary">
                  <!-- <input
                    type="password"
                    name="password"
                    class="form-control"
                    required=""
                  /> -->
                  <Field name="password" type="password" class="form-control" />
                  <ErrorMessage name="password" class="error-feedback" />
                  <span class="form-bar"></span>
                  <label class="float-label">Password</label>
                </div>
                <div class="row m-t-25 text-left">
                  <div class="col-12">
                    <div class="checkbox-fade fade-in-primary">
                      <label>
                        <input type="checkbox" value="" />
                        <span class="cr"
                          ><i
                            class="cr-icon icofont icofont-ui-check txt-primary"
                          ></i
                        ></span>
                        <span class="text-inverse">Remember me</span>
                      </label>
                    </div>
                    <div class="forgot-phone text-right float-right">
                      <a
                        href="auth-reset-password.html"
                        class="text-right f-w-600"
                      >
                        Forgot Password?</a
                      >
                    </div>
                  </div>
                </div>
                <div class="row m-t-30">
                  <div class="col-md-12">
                    <!-- <button
                      type="button"
                      class="
                        btn btn-primary btn-md btn-block
                        waves-effect
                        text-center
                        m-b-20
                      "
                    >
                      LOGIN
                    </button> -->
                    <button
                      class="btn btn-primary btn-block"
                      :disabled="loading"
                    >
                      <span
                        v-show="loading"
                        class="spinner-border spinner-border-sm"
                      ></span>
                      <span>Login</span>
                    </button>
                  </div>
                </div>
                <p class="text-inverse text-left">
                  Don't have an account?<a href="auth-sign-up-social.html">
                    <b>Register here </b></a
                  >for free!
                </p>
              </div>
            </div>
          </Form>
          <!-- end of form -->
        </div>
        <!-- Authentication card end -->
      </div>
      <!-- end of col-sm-12 -->
    </div>
    <!-- end of row -->

    <!-- end of container-fluid -->
  </section>

  <!-- <div class="col-md-12">
    <div class="card card-container">
      <img
        id="profile-img"
        src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
        class="profile-img-card"
      />
      <Form @submit="handleLogin" :validation-schema="schema">
        <div class="form-group">
          <label for="username">Username</label>
          <Field name="username" type="text" class="form-control" />
          <ErrorMessage name="username" class="error-feedback" />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <Field name="password" type="password" class="form-control" />
          <ErrorMessage name="password" class="error-feedback" />
        </div>
        <div class="form-group">
          <button class="btn btn-primary btn-block" :disabled="loading">
            <span
              v-show="loading"
              class="spinner-border spinner-border-sm"
            ></span>
            <span>Login</span>
          </button>
        </div>
        <div class="form-group">
          <div v-if="message" class="alert alert-danger" role="alert">
            {{ message }}
          </div>
        </div>
      </Form>
    </div>
  </div> -->
</template>
<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
export default {
  name: "Login",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      username: yup.string().required("Username is required!"),
      password: yup.string().required("Password is required!"),
    });
    return {
      loading: false,
      message: "",
      schema,
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    if (this.loggedIn) {
      this.$router.push("/profile");
    }
  },
  methods: {
    handleLogin(user) {
      this.loading = true;
      this.$store.dispatch("auth/login", user).then(
        () => {
          // this.$router.push("/profile");
          window.location.href = '/profile';
        },
        (error) => {
          this.loading = false;
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
        }
      );
    },
  },
};
</script>


<style scoped>
/* @import './admindek/css/pages.css'; */
.login-block {
  margin: 30px auto;
  min-height: 93.6vh;
}

.container-fluid {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

.login-block .auth-box {
  margin: 20px auto 0 auto;
  max-width: 450px;
}
.card .card-block {
  padding: 1.25rem;
}
.form-material .form-group {
  position: relative;
}
.form-material .form-control {
  display: inline-block;
  height: 43px;
  width: 100%;
  border: none;
  border-radius: 0;
  font-size: 16px;
  font-weight: 400;
  padding: 0;
  background-color: transparent;
  -webkit-box-shadow: none;
  box-shadow: none;
  border-bottom: 1px solid #ccc;
}
</style>