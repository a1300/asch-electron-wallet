
Vue.component('app-navigation', {
  data: function() {
    return {
      links:[
        {
          title: 'Home'
        },
        {
          title: 'About'
        }
      ]
    }
  },
  template: `
      <nav class="navbar navbar-default">
        <div class="navbar-header">
          <ul class="nav navbar-nav">
            <li> <a>Home</a> </li>
            <li> <a>About</a> </li>
          </ul> 
        </div>
      </nav>
    `
});


new Vue({
  el: '#app',
  data: {
    message: 'Hello vue'
  }
});

