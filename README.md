# Async Redux

## Setup

Install `nodemon` globally if you haven't already.

```
npm install
npm run server
npm run client
```

## Redux cannot handle Async!

Redux is by nature synchronous -- your state change cannot be pending anything.

So, without some help, your dispatch has to be AFTER the async stuff happens. For now, we will be making our Axios requests from our components. 

```
//In a click handler
axios.get('/colors').then( (response) => {
    this.props.dispatch({
      type: 'SET_COLORS',
      payload: response.data
    })
}) 
```

Eventually, we will be able to handle async in a better way, but for now, start with this.


Base Requirements

Use the code from lecture as a starting point.

    Implement Delete all colors
    Send the count from your counter in your post request along with the color

Stretch

    Move colors into a database (either Mongo or SQL).
    Style the background of the <li> as the color. You can assume the colors provided are valid CSS colors.

