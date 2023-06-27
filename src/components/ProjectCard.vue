<script>
export default {
    name:'ProjectCard',
    props:{
      project: Object
    },

    computed:{
      formattedData(){
        const d = new Date(this.project.date_creation);
        const options ={
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        };

        //Se non sappiamo la lingua, con questa funzione prendiamo la lingua dal server
        // function getUserLocale(){
        //   const userLocale = navigator.languages && navigator.languages.length
        //                     ? navigator.languages[0]
        //                     : navigator.languages;
        //   return userLocale;
        // }

        return d.toLocaleString('it-IT' , options);
      }
    }
}
</script>
<template>

    <div>
      <h3>{{ project.title}}</h3>
      <p>{{ formattedData }}</p>
      <p v-html="project.description"></p>

    </div>

</template>


<style lang="scss" scoped>
div{
  border-bottom: 1px solid black;
  margin-bottom: 20px;
}

</style>