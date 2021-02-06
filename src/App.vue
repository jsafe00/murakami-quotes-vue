<template>
  <div class="container">
    <Quotes />
  </div>
</template>

<script>
import Quotes from '../src/components/Quotes'

export default {
  name: 'App',
  components: {
    Quotes,
  }
}
</script>

<style>
  .container {
    max-width: 500px;
    padding-top: 50px;
  }
</style>