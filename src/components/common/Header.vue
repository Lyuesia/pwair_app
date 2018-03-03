<template lang="html">
<div class="header">

  <div class="dropdown ham">
    <!-- <button  type="button" name="button">=</button> -->
    <i class="fas fa-bars fa-2x"></i>
  </div>
  <div class="pwaair">
    PWAir
  </div>
  <div class="refersh">
    <!-- <button type="button" name="button">refersh</button> -->
    <i class="fas fa-redo-alt fa-2x"></i>
  </div>
</div>
</template>

<script>
export default {
}
</script>

<style lang="css">
.ham{
  line-height: 50px;
  height: 50px;
  width : 50px;
}
.header{
  height: 50px
}
.dropdown{
  float: left;
}
.pwaair{
  float: left;
}
.refersh{
  float: right;
}
</style>
