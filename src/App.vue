<template>
  <div class="vue-tempalte" id="x">
    <!-- Navigation -->
    <!-- <nav class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top">
      <div class="container">
        <a class="navbar-brand float-left" href="#" target="_blank">
            customer service and compiant
        </a>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/login">Sign in</router-link>
          </li>
          <li class="nav-item">
            <router-link class="btn btn-outline-primary" to="/">Sign up</router-link>
          </li>
        </ul>
      </div>
    </nav> -->

    <!-- Main -->
    <div class="App">
      <!-- <div class="vertical-center">
        <div class="inner-block">
          <router-view />
        </div>
      </div> -->
      <router-view />
    </div>
  </div>
</template>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: aqua;
  margin-top: 60px;
  align-items: center
}
</style>
