<template>
  <v-layout row wrap justify-space-around>
    <v-flex xs6>
      <v-card tile flat color="blue lighten-5">
          <div>
            <v-layout row wrap justify-space-around>
              <v-flex xs12>
                <v-card tile flat>
                  <v-card-text class="px-0  text-xs-center"><h2>Login</h2></v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </div>
          <br>
          <div>
            <v-layout row wrap justify-space-around>
              <v-flex xs8>
                <v-card tile flat>
                  <v-text-field
                    label="E-mail"
                    v-model="email"
                    required
                    ></v-text-field>
                </v-card>
              </v-flex>
            </v-layout>
          </div>
          <br>
          <div>
            <v-layout row wrap justify-space-around>
              <v-flex xs8>
                <v-card tile flat>
                  <v-text-field
                    label="Password"
                    v-model="password"
                    type="password"
                    required
                    ></v-text-field>
                </v-card>
              </v-flex>
            </v-layout>
          </div>
          <br>
          <div>
            <v-layout row wrap justify-space-around>
              <v-flex xs2>
                <v-card tile flat>
                    <router-link to="/detail/roomTypeName">
                    <a>Lupa Password?</a>
                    </router-link>
                </v-card>
              </v-flex>
              <v-flex xs2>
                <v-card tile flat>
                    <v-btn color="blue lighten-1" @click="submit()"><b>Masuk</b></v-btn>
                </v-card>
              </v-flex>
            </v-layout>
        </div>
      </v-card>
    </v-flex>
  </v-layout>
    <!-- <v-container>
        <v-form @submit.prevent="submit">
            <v-text-field
            label="E-mail"
            v-model="email"
            required
            ></v-text-field>
            <v-text-field
            label="Password"
            v-model="password"
            type="password"
            required
            ></v-text-field>
            <v-btn color="green" type="submit">Submit</v-btn>
        </v-form>
    </v-container> -->
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      email: null,
      password: null,
      account: []
    }
  },
  methods: {
    submit: function () {
     const URL = '/api/login'
        const argument = {
          email: this.email,
          password: this.password
        }
        axios.post(URL, argument)
          .then(response => {
            this.account = response.data
            
            alert(this.account.name)
          })
          .catch(error => {
            alert(error)
          })
      // alert(this.account)
    }
  }
}
</script>
