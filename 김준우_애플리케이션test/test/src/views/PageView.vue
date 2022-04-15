<template>
    <div>
        <p>{{gettitle}}</p>
        <p>{{getmemo}}</p>
        <button @click="$router.go(-1)">뒤로가기</button>
    </div>
</template>

<script>
export default {
    name : 'PageView',
    computed : {
        gettitle : function() {
            return this.$store.state.board[this.$route.params.id-1].title
        },
        getmemo : function() {
            return this.$store.state.memos[this.$route.params.id-1].memo
        },
    }
}
</script>