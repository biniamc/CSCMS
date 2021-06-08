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
                  <h3 >Sign In</h3>

                  <div class="form-group">
                      <label>User Name</label>
                      <input type="text" class="form-control form-control-lg" />
                  </div>
                  <div class="form-group">
                      <label>BP Number</label>
                      <input type="text" class="form-control form-control-lg"/>
                  </div>

                  <div class="form-group">
                      <label>Password</label>
                      <input type="password" class="form-control form-control-lg" />
                  </div>
                  <router-link to="/ComplaintPage">
                  <button type="submit" class="btn btn-dark btn-lg btn-block">
                    Sign in
                  </button></router-link>

                  <p class="forgot-password text-right mt-2 mb-4">
                      <router-link to="/forgot-password">Forgot password ?</router-link>
                  </p>

                  <div class="social-icons">
                      <ul>
                          <li><a href="#"><i class="fa fa-google"></i></a></li>
                          <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                          <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                      </ul>
                  </div>
              </form>
            </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {}
  }
}
</script>
<style scoped>

/*h1, h2 {
  font-weight: normal;
}*/
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}/*
a {
  color: #42b983;
}*/
</style>
