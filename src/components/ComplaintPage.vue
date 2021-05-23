<template>
    <div class="">
<div class="collapse" id="navbarToggleExternalContent">
</div>
<nav class="navbar navbar-dark bg-dark">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <ul class="nav navbar-nav flex-row float-right">
      <form class="d-flex">
        <input class="form-control me-4" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline text-white h6 " type="submit">Search</button>
      </form>
                <li class="nav-item">
                  <router-link class="btn btn-outline text-white h6" to="/">Home</router-link>
                </li>
                 <li class="nav-item">
                  <router-link class="btn btn-outline text-white h6" to="#">Status</router-link>
                  <li class="nav-item">
                  <router-link class="btn btn-outline text-white h6" to="#">complaints</router-link>
                </li>
                 <button type="button" class="btn btn-outline text-white h6">
                      Notifications <span class="badge bg-secondary">4</span>
                </button>
                <li class="nav-item">
                  <router-link class="btn btn-outline text-white h6" to="#">Setting</router-link>
                </li>
              </ul>
  </div>
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
