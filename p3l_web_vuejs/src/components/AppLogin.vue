<template>
  <v-layout row wrap justify-space-around>
    <v-flex xs6>
      <v-card tile flat color="blue lighten-5">
          <div>
            <v-layout row wrap justify-space-around>
              <v-flex xs9>
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
            <v-layout row wrap>
              <v-flex xs2>
              </v-flex>
              <v-flex xs2>
                <v-card tile flat>
                    <router-link to="/forget-password">
                    <a>Lupa Password?</a>
                    </router-link>
                </v-card>
              </v-flex>
              <v-flex xs3>
                <v-card tile flat>
                    <router-link to="/signup">
                    <a>Belum Punya Akun?</a>
                    </router-link>
                </v-card>
              </v-flex>
              <v-flex xs1>
              </v-flex>
              <v-flex xs2>
                <v-card tile flat>
                    <v-btn color="blue lighten-1" @click="submit()"><b>Masuk</b></v-btn>
                </v-card>
              </v-flex>
              <v-flex xs2>
              </v-flex>
            </v-layout>
        </div>
      </v-card>
    </v-flex>
  </v-layout>
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
        if (this.email == null || this.password == null) {
         alert("Isi email dan password !")
        }
        else {
          axios.post(URL, argument)
            .then(response => {
              this.account = response.data
              if (this.account.email == this.email) {
                alert("Login Berhasil !")
                sessionStorage.setItem("email", this.email);
                this.$router.push('/search')
              }else {
                alert("Email atau password salah!")
              }
            })
            .catch(error => {
              alert(error)
            })
        }
    }
  }
}
</script>
