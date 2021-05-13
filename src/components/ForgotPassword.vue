<template>
    <div class="vue-tempalte">
        <form>
            <h3>Forgot Password</h3>
            <div class="form-group">
                <label>Phone</label>
                <input type="number" class="form-control form-control-lg" />
            </div>

            <button type="submit" class="btn btn-dark btn-lg btn-block">Reset password</button>

        </form>
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
