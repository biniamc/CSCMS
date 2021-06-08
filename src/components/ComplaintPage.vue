<template>
    <div class="">
<div class="collapse" id="navbarToggleExternalContent">
</div>
<!-- <nav class="navbar navbar-dark bg-dark">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <ul class="nav navbar-nav flex-row float-right">
</nav> -->

      <nav class="navbar navbar-collapsed navbar-dark bg-dark">
          <a class="navbar-brand" href="#">CSCMS SYSTEM</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <!-- <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item">
                  <router-link class="btn btn-outline text-white   h6" to="/">Home</router-link>
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
                <li class="nav-item">
                  <router-link class="btn btn-outline text-white h6" to="#">Setting</router-link>
                </li>
              </ul>
            <form class="form-inline my-2 my-lg-0">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div> -->
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
          <!-- <div class="collapse navbar-collapse" id="navbarTogglerDemo04" align="content-center">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item">
                  <router-link class="btn btn-outline text-white   h6" to="/">Login</router-link>
                </li>
                 <li class="nav-item">
                  <router-link class="btn btn-outline text-white h6" to="#">SDJK</router-link>
                  <li class="nav-item">
                  <router-link class="btn btn-outline text-white  h6" to="#">SADGGJ</router-link>
                </li>
                 <li class="nav-item">
                   <button class="btn btn-outline text-white  h6">
                      View <span class="badge bg-secondary">4</span>
                </button>
                 </li>
              </ul>
          </div> -->
        </nav>
      <div class="mx-4"  style="margin-top: 5rem;">

        <form>
            <h2>Complaint</h2>
            <p>Dear customer please put your complaint in the box below</p>
            <div class="form-group">
              <div class="form-group">
                        <label>Location</label>
                        <input type="text" placeholder="please enter your location" class="form-control form-control-lg align-left"/>
                    </div>
                <label for="comment">Complaint</label>
                <textarea class="form-control form-control-lg " rows="10" id="Complaint"></textarea>
            </div>
            <div>
            </div>
            <button type="button" class="btn btn-primary bg-dark" >Submit</button>

        </form>
      </div>

  </div>
</template>
<script>
export default {
  name: 'ComplaintPage',
  data () {
    return {}
  }
}
</script>
