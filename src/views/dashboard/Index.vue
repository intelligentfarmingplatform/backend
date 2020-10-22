<template>
  <v-app>
    <dashboard-core-app-bar />

    <dashboard-core-drawer />

    <dashboard-core-view />

  </v-app>
</template>

<script>
  export default {
    name: 'DashboardIndex',

    components: {
      DashboardCoreAppBar: () => import('./components/core/AppBar'),
      DashboardCoreDrawer: () => import('./components/core/Drawer'),
      DashboardCoreView: () => import('./components/core/View'),
    },

    data: () => ({
      expandOnHover: false,
    }),
    
    created(){
      if(localStorage.getItem("username") == "admin") {
         this.$router.replace("/");
      }else{
        this.$router.replace("/login");
      }
    }
  }
</script>

<style lang="scss">
    body{
      padding: 0 !important;
    }
</style>
