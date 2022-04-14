<template>
  <div class="write">
    <h1>글을 작성하는 공간 입니다</h1>
    <form action="">
    <input  v-model="title" type="text" size="28"> <br>
    <textarea v-model="memo" cols="30" rows="10"></textarea> <br>
    </form>
    <button @click="addmemoMu"> 완료 </button>
    
  </div>
</template>

<script>
export default {
  data : function(){
    return{
      title : '',
      memo: '',
    }
  },
  methods : {
    addmemoMu : function(){
      this.$store.commit('addtitle', this.title);
      this.$store.commit('addmemo', this.memo);
      this.$router.push('/');
    },
  },
}
</script>