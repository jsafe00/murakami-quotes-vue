import axios from 'axios'

const state = { 
    quotes: []
};

const getters = { 
    quotesList: state => state.quotes
};

const actions = { 
    async fetchQuotes({commit}){
      const response = await axios.get("https://haruki-murakami-quotes.herokuapp.com/api/v1/quotes");
      commit("setQuotes", response.data.data)
    }
};

const mutations = { 
    setQuotes: (state, quotes) => (
        state.quotes = quotes
    )
};

export default {
    state,
    getters,
    actions,
    mutations
}