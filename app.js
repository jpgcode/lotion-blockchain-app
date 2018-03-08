const lotion = require('lotion')

const app = lotion({
  initialState: {
    count: 0
  }
})

app.use((state, tx) => {
  if(state.count === tx.nonce) {
    state.count++
  }
})

app.listen(3000)
    .then(genesis => {
        console.log('App listening on port 3000. Congrats, you have launched your first blockchain!')
    })
