<template>
  <v-layout row wrap justify-space-around>
    <v-flex xs6>
      <v-card tile flat color="white">
        <v-form @submit.prevent="submit">
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
                    <v-btn color="blue lighten-1" type="submit" @click="submit()"><b>Masuk</b></v-btn>
                </v-card>
              </v-flex>
            </v-layout>
        </div>
        </v-form>
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
export default {
  data () {
    return {
      email: null,
      password: null
    }
  },
  methods: {
    submit () {
      console.log(this.email + this.password)
    }
  }
}
</script>
