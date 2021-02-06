<template>
  <div>
    <ul class="list-group mt-5">
      <li class="list-group-item list-group-item-action" v-for="quote in quotesList" :key="quote.id">
        <div class="d-flex w-100 justify-content-between">
          <h3>{{quote.attributes.text}}</h3>
        </div>
        <p>{{quote.relationships.book.data.title}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  import {
    mapGetters, 
    mapActions 
  } from "vuex";

  export default {
    name: 'Quotes',
    methods: {
      ...mapActions(["fetchQuotes"])
    },
    computed: mapGetters(["quotesList"]),
    created() {
      this.fetchQuotes()
    }
  }
</script>
