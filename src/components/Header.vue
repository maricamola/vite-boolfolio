<script>
export default {
  name:'Header'
}
</script>

<template>
  <header>
    <ul>
      <li>
        <router-link :to="{ name:'home' }">Home</router-link>
      </li>
      <li>        
        <router-link :to="{ name:'about' }">Chi siamo</router-link>
      </li>
      <li>
        <router-link :to="{ name:'contacts' }">Contatti</router-link>
      </li>
    </ul>
  </header>
</template>


<style lang="scss" scoped>
ul{
  list-style: none;
  display: flex;
  justify-content: center;
  li{
    margin: 0 15px;
    a{
      text-transform: uppercase;
    }
  }
}


</style>