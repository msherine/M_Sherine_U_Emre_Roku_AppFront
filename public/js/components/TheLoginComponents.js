export default {
  name: 'TheLoginComponent',

  template:
    `
    <div class="container">
  
      <div class="log-in">
        <label hidden for="inlineFormInputName">Name</label>
        <input class="logInInput"
         ref="username" v-model="username" type="text" class="form-control" id="inlineFormInputName" placeholder="username" required>
  
        <label hidden for="inlineFormPassword">Password</label>
        <input class="logInInput" ref="password" v-model="password" type="password" class="form-control" id="inlineFormPassword" placeholder="password" required>
      </div>
  
      <div class="logIn_button">
      <button @click="tryLogIn"
          type="submit" 
          class="btn btn-primary login-submit"
        >Go!
      </button>

      <!---  if the user does not match in the database after we try to log them in, they might not exist. Give them an option to sugn up!--->

      <button v-if="signUp" @click="trySignUp"
          type="submit" 
          class="btn btn-primary login-submit signup"
        >Join!
      </button>
      </div>

    </div>`,

  data() {
    return {
      username: '',
      password: '',
      authenticated: false,
      signUp: false
    }
  },

  methods: {

    trySignUp() {
      debugger;
    },

    tryLogIn() {
      // debugger;
      // check to see if there is a username and password
      // and make sure ther's no extra white space

      if (this.username.trim().length == 0) {
        // this means the username input is empty
        // the trim() method gets rid of any white space before or after text
        console.log('username is empty, mark the feild and let the user know');
        this.$refs['username'].classList.add('missing-field');
        return;
      } else if (this.password.trim().length == 0) {
        console.log('password is empty,mark the field and let the user know');
        this.$refs['username'].classList.add('missing-field');
        return;
      }
      //end the input checks

      // end the input checks and remove marked fields css class
      this.$refs['username'].classList.remove('missing-field');
      this.$refs['password'].classList.remove('missing-field');


      // try awriting a temp fetch call to the back end login service
      console.log('login script should be good to go')

      // create a user object with the username and password
      // and then pass that to the back end validation service

      let user = {
        username: this.username,
        password: this.password
      }

      // let formData = new FormData();

      // formData.append("username", this.username);
      // formData.append("password", this.password);

      fetch('/ums/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-type': 'application/json'
        },
        body: JSON.stringify(user)
      })
        .then(res => res.json())
        .then(data => {
          // debugger;

          if (data.message == 'no user') {
            // check for no user, and then provide a signup button
            this.signUp = true;


          } else if (data.message == 'wrong password') {
            // password did not match. Try again.
            this.$refs['password'].classList.add('missing-field');


          } else 
          // if (data.message == 'success') 
          
          {
            this.$emit('setauthenticated');
            // save the user data locally on the computer
            window.localStorage.setItem('user', JSON.stringify(data.user));
            this.$router.push({ name: 'allusers' });
          }
        })

        .catch(error => console.error(error));
      // end the fetch call
    }
  }
}