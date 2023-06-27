<script>

import {store} from '../store/store';
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';


export default {
  name: 'Blog',
  components:{
    ProjectCard
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
    this.getApi(store.apiUrl + 'projects');
  }
}
</script>

<template>
  <div class="container-inner">
      <h1>Blog</h1>

      <div>
        <ProjectCard 
          v-for="project in projects" 
          :key="project.id" 
          :project="project"/>
      </div>
  </div>
</template>

<style>

</style>