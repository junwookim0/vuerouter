<template>
  <div class="home">
    <table>
      <tr>
        <td>번호</td>
        <td>제목</td>
        <td>클릭횟수(조회수)</td>
      </tr>
      <tr v-for="board in $store.state.board" :key="board.id">
        <td>
        {{board.id}}
        </td>
        <td @click="addcount($router.push(`/board/${board.id}`))" >
        {{board.title}}
        </td>
        <td>{{board.count}}</td>
      </tr>
    </table>
  </div>
</template>

<script>


export default {
  name: 'HomeView',
  methods : {
    addcount : function(){
      this.$store.dispatch('addcount')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

a {
  color: #2c3e50;
  text-decoration: none;

}

</style>