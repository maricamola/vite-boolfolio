<script>

import {store} from './store/store.js';
import axios from 'axios';

import Header from './components/Header.vue';

export default {
  name:'home',
  components: {
    Header
  },

  data(){
    return{
      projects:[]
    }
  },

  methods:{
    getApi(endpoint){

      axios.get(endpoint)
      .then(results => {
        this.projects = results.data.data;
        console.log(this.projects);
      })
    },

    FormatData(dataString){
      const d = new Date(dateString);
      return d.toLocaleDateString()
    }
  },

  mounted(){
    this.getApi(store.apiUrl + 'projects');
  }

}

</script>

<template>

  <div class="container">

    <Header />

    <router-view></router-view>

  </div>

</template>

<style lang="scss" scoped>

@use './scss/style.scss'

</style>
