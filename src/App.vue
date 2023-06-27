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
    getApi(){

      axios.get(store.apiUrl + 'projects')
      .then(results => {
        this.projects = results.data;
        console.log(this.projects);
      })
    },

    FormatData(dataString){
      const d = new Date(dateString);
      return d.toLocaleDateString()
    }
  },

  mounted(){
    this.getApi();
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
