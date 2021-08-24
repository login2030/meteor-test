<template>
    <div class="next-player">
      <small>(Привет из Vuejs)</small> <br>
      Ходит игрок {{nextPlayer}}
    </div>
</template>

<script>
export default {
  computed: {
    nextPlayer() {return this.$store.state.nextPlayer}
  }
}
</script>
<style>
.next-player {
  color: tomato;
}
</style>
