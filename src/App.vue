<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-nav-icon v-show="$store.state.login_user" @click.stop="toggleSideMenu"></v-app-bar-nav-icon>
      <v-toolbar-title class="headline text-uppercase">
        <span>マイアドレス帳</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items v-if="$store.state.login_user">
        <v-btn text @click="logout">ログアウト</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <SideNav />

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import firebase from 'firebase'
import SideNav from './components/SideNav'
import { mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    SideNav,
  },
  created() {
    console.log('test')
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user)
      if (user) {
        this.setLoginUser(user)
        if (this.$router.currentRoute.name == 'home') {
          this.$router.push({ name: 'addresses' }, () => {})
        }
        this.fetchAddresses()
      } else {
        this.deleteLoginUser()
        this.$router.push({ name: 'home' }, () => {})
      }
    })
  },
  data() {
    return {
      //
    }
  },
  methods: {
    ...mapActions([
      'toggleSideMenu',
      'setLoginUser',
      'logout',
      'deleteLoginUser',
      'fetchAddresses',
    ]),
  },
}
</script>
