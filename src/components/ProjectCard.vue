<script>
export default {

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