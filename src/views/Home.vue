<template>
  <div class="home">
    <headerView :navIndex="navIndex"/>
    <router-view @setIndex="getIndex"/>
    <footerView/>
  </div>
</template>

<script>

import headerView from "./components/headerView";
import footerView from "./components/footerView";

export default {
  name: 'Home',
  data() {
    return {
      navIndex: -1,
    }
  },
  created() {

  },
  methods: {
    getIndex(index) {
      this.navIndex = index
    }

  },
  components: {
    headerView,
    footerView
  }
}
</script>
