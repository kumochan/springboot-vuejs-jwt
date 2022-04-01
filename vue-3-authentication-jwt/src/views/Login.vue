<template>
  <section class="login-block">
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-12">
          <form class="md-float-material form-material">
            <div class="text-center">
              <img src="" alt="logo.png" />
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
                  <input
                    type="text"
                    name="user-name"
                    class="form-control"
                    required=""
                  />
                  <span class="form-bar"></span>
                  <label class="float-label">Username</label>
                </div>
                <div class="form-group form-primary">
                  <input
                    type="password"
                    name="password"
                    class="form-control"
                    required=""
                  />
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
                    <button
                      type="button"
                      class="
                        btn btn-primary btn-md btn-block
                        waves-effect
                        text-center
                        m-b-20
                      "
                    >
                      LOGIN
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
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

export default {
  name: "Login",
  components: {
    // Form,
    // Field,
    // ErrorMessage,
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
          this.$router.push("/profile");
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
.card {
  border-radius: 5px;
  -webkit-box-shadow: 0 0 5px 0 rgb(43 43 43 / 10%),
    0 11px 6px -7px rgb(43 43 43 / 10%);
  box-shadow: 0 0 5px 0 rgb(43 43 43 / 10%), 0 11px 6px -7px rgb(43 43 43 / 10%);
  border: none;
  margin-bottom: 30px;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

.form-group {
  margin-bottom: 1.25em;
}
.login-block .auth-box {
  margin: 20px auto 0;
  max-width: 450px;
}

.card .card-block {
  padding: 1.25rem;
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
/* label {
  display: block;
  margin-top: 10px;
}

.card-container.card {
  max-width: 350px !important;
  padding: 40px 40px;
}

.card {
  background-color: #f7f7f7;
  padding: 20px 25px 30px;
  margin: 0 auto 25px;
  margin-top: 50px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
}

.profile-img-card {
  width: 96px;
  height: 96px;
  margin: 0 auto 10px;
  display: block;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}

.error-feedback {
  color: red;
} */
</style>
