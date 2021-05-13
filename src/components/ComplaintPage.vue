<template>
    <div class="">
        <form>
            <h2>complaint</h2>
            <p>Dear customer please put your complaint in the box below</p>
            <div class="form-group">
                <label for="comment">Complaint</label>
                <textarea class="form-control form-control-lg " rows="10" id="Complaint"></textarea>
            </div>
            <button type="submit" class="btn btn-dark btn-lg btn-block">Submit</button>
        </form>
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
