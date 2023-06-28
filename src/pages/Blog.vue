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
      projects:[],
      links:[],
      first_page_url: null,
      last_page_url: null,
      current_page: null,
      last_page: null
    }
  },

  methods:{
    getApi(endpoint){

      axios.get(endpoint)
      .then(results => {
        this.projects = results.data.data
        this.links = results.data.links
        this.first_page_url = results.data.first_page_url
        this.last_page_url = results.data.last_page_url
        this.current_page = results.data.current_page
        this.last_page = results.data.last_page
        console.log(this.links);
      })
    },

    FormatData(dateString){
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

      <div>
        
          <button
          @click="getApi(first_page_url)"
          :disabled="current_page == 1">
            |&lt;
          </button>
        
          <button
          v-for="(link, index) in links"
          :key='index'
          v-html="link.url"
          @click="getApi(link.url)"
          :disabled="link.active || !link.url">
          
          </button>
        
        
          <button
          @click="getApi(last_page_url)"
          :disabled="current_page == last_page">
            &gt;|
          </button>
      </div>
  </div>

</template>

<style lang="scss" scoped>

button{
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  margin-right: 4px;
}

</style>