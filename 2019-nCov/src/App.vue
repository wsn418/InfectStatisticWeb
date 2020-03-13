<template>
  <div id="app">
    <div id="nav">
     <div id = "container"></div>
    </div>

    <router-view/>
  </div>
</template>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  max-width 1000px
  margin 0 auto
#container
 height 50px
</style>
