<template>
    <div class="vue-tempalte">
          <nav class="navbar shadow bg-dark rounded justify-content-between flex-nowrap flex-row fixed-top">
            <div class="container">
              <a class="navbar-brand float-left text-white h4" href="#" target="_blank">
                  customer service and compiant
              </a>
              <ul class="nav navbar-nav flex-row float-right">
                <li class="nav-item">
                  <router-link class="nav-link pr-3 text-white h6" to="/login">Sign in</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="btn btn-outline-primary text-white h6" to="/">Sign up</router-link>
                </li>
              </ul>
            </div>
          </nav>
      <div class="vertical-center" style="margin-top: 1rem;">
          <div class="inner-block">
          <form>
              <h3>Forgot Password</h3>
              <div class="form-group">
                  <label>Phone</label>
                  <input type="number" class="form-control form-control-lg" />
              </div>

              <button type="submit" class="btn btn-dark btn-lg btn-block">Reset password</button>
          </form>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ForgotPassword',
  data () {
    return {}
  }
}
</script>
