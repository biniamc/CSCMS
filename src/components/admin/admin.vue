<template>
    <div class="">
<div class="collapse" id="navbarToggleExternalContent">
</div>

      <nav class="navbar navbar-collapsed navbar-dark bg-dark">
          <a class="navbar-brand" href="#">CSCMS SYSTEM</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <div class="row">
              <div class="col-4">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                  <li class="nav-item">
                    <router-link class="btn btn-outline text-white   h6" to="#">Home</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="btn btn-outline text-white h6" to="#">Status</router-link>
                    <li class="nav-item">
                    <router-link class="btn btn-outline text-white  h6" to="#">complaints</router-link>
                  </li>
                  <li class="nav-item">
                    <button class="btn btn-outline text-white  h6">
                        Notifications <span class="badge bg-secondary">4</span>
                  </button>
                  </li>
                  <li class="nav-item dropdown">
                    <router-link class="btn btn-outline text-white h6" to="#"> <a class="nav-link dropdown-toggle text-white" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Setting</a></router-link>
                  </li>
                </ul>
              </div>
              <div class="col-5">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                  <li class="nav-item">
                    <router-link class="btn btn-outline text-white   h6" to="/login">Login</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="btn btn-outline text-white h6" to="#">News</router-link>
                    <li class="nav-item">
                    <router-link class="btn btn-outline text-white  h6" to="#">Alart</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="btn btn-outline text-white h6" to="#">About</router-link>
                  </li>
                </ul>
              </div>
            </div>
            <form class="form-inline my-2 my-lg-0">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>
      <div class="mx-4"  style="margin-top: 5rem;">
        <div class="vertical-center" style="margin-top: 1rem;">
            <div class="inner-block">
                <form>
                    <h3>Sign Up</h3>

                    <div class="form-group">
                        <label>Full Name</label>
                        <input type="text" class="form-control form-control-lg"/>
                    </div>
                    <div class="form-group">
                        <label>BP Number</label>
                        <input type="text" class="form-control form-control-lg" />
                    </div>

                    <div class="form-group">
                        <label>Email address</label>
                        <input type="email" class="form-control form-control-lg" />
                    </div>

                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" class="form-control form-control-lg" />
                    </div>

                    <button type="submit" class="btn btn-dark btn-lg btn-block">Sign Up</button>

                    <p class="forgot-password text-right">
                        already register
                        <router-link :to="{name: 'login'}">sign in?</router-link>
                    </p>
                </form>
            </div>
        </div>

      </div>

  </div>
</template>
<script>
export default {
  name: 'admin',
  data () {
    return {}
  }
}
</script>
