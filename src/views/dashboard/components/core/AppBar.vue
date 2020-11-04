<template>
  <v-app-bar
    id="app-bar"
    absolute
    elevate-on-scroll
    app
    color="transparent"
    flat
    height="65"
    scroll-target="#scrolling-techniques-5"
  >
    <v-btn class="mr-3" elevation="1" fab small @click="setDrawer(!drawer)">
      <v-icon v-if="drawer">
        mdi-arrow-left
      </v-icon>

      <v-icon v-else>
        mdi-menu
      </v-icon>
    </v-btn>

    <v-toolbar-title
      class="hidden-sm-and-down font-weight-light"
      v-text="$route.name"
    />
    <v-spacer />
      <v-toolbar-title
      class="hidden-sm-and-down font-weight-light mx-4"
      v-text="$route.name"
    />
    <v-menu nudge-bottom="45px" nudge-leftt="1050px"  origin="top right">
      <template v-slot:activator="{ attrs, on }">
        <v-btn
          elevation="0"
          fab
          max-width="40px"
          max-height="40px"
          v-bind="attrs"
          v-on="on"
          color="info"
        >
          <v-icon color="#ffffff">mdi-account-details</v-icon>
        </v-btn>
      </template>

      <v-list :tile="false" nav>
        <div>
          <app-bar-item v-for="(n, i) in notifications" :key="`item-${i}`">
            <v-list-item-title v-text="n" />
          </app-bar-item>
          <app-bar-item>
            <v-list-item-title @click="logout()">ออกจากระบบ</v-list-item-title>
          </app-bar-item>
        </div>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
// Components
import { VHover, VListItem } from "vuetify/lib";

// Utilities
import { mapState, mapMutations } from "vuex";

export default {
  name: "DashboardCoreAppBar",

  components: {
    AppBarItem: {
      render(h) {
        return h(VHover, {
          scopedSlots: {
            default: ({ hover }) => {
              return h(
                VListItem,
                {
                  attrs: this.$attrs,
                  class: {
                    "black--text": !hover,
                    "white--text primary elevation-12": hover
                  },
                  props: {
                    activeClass: "",
                    dark: hover,
                    link: true,
                    ...this.$attrs
                  }
                },
                this.$slots.default
              );
            }
          }
        });
      }
    }
  },

  props: {
    value: {
      type: Boolean,
      default: false
    }
  },

  data: () => ({
    notifications: [
      "Mike John Responded to your email",
      "You have 5 new tasks",
      "You're now friends with Andrew",
      "Another Notification",
      "Another one"
    ]
  }),

  computed: {
    ...mapState(["drawer"])
  },

  methods: {
    ...mapMutations({
      setDrawer: "SET_DRAWER"
    }),
    logout(){
       window.localStorage.clear();
       this.$router.push("/login");
    }
  }
};
</script>
<style scoped>
.v-btn:before {
  /* border-radius: 100px ; */
  /* padding: 0; */
  position: relative;
}

.v-menu__content .v-list--nav .v-list-item{
  padding: 0px 15px;
  border-radius: 15px;
}

.v-menu__content{
  background-color: #ffffff;
  padding: 10px;
}
</style>
