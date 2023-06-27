<script>

import {store} from './store/store.js';
import axios from 'axios';

export default {
  name:'home',

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
    <h1>Elenco progetti</h1>

    <ul>
      <li
        v-for="project in projects"
        :key="project.id"
      >

      <span class="">{{ project.title }}</span>

      <span>{{ project.date_creation }}</span>

      </li>
    </ul>
  </div>

</template>

<style lang="scss" scoped>

@use './scss/style.scss'

</style>
