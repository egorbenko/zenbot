<template>
  <section class="app-main">
    <div class="container-fluid">
      <breadcrumbs></breadcrumbs>
      <transition>
        <router-view></router-view>
      </transition>
    </div>
  </section>
</template>

<script>
import Breadcrumbs from './Breadcrumbs.vue'

export default {
  components: {
    Breadcrumbs
  }
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/variables';
@import '~bulma/sass/utilities/mixins';

.app-main {
  padding-top: 50px;
  margin-left: 180px;
  transform: translate3d(0, 0, 0);

  @include mobile() {
    margin-left: 0;
  }
}

.app-content {
  padding: 20px;
}
</style>
