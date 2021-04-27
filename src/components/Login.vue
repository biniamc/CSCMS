<template>
    <div class="vue-tempalte">
        <form class="x">
            <h3 >Sign In</h3>

            <div class="form-group">
                <label>User Name</label>
                <input type="email" class="form-control form-control-lg" />
            </div>

            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control form-control-lg" />
            </div>

            <button type="submit" class="btn btn-dark btn-lg btn-block">Sign In</button>

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
</template>

<script>
export default {
  name: 'Login',
  data() {
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
