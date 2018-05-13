<template>
  <v-layout row wrap justify-space-around>
    <v-flex xs6>
      <v-card tile flat color="blue lighten-5">
          <div>
            <v-layout row wrap justify-space-around>
              <v-flex xs12>
                <v-card tile flat>
                  <v-card-text class="px-0  text-xs-center"><h2>Lupa Password</h2></v-card-text>
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
              <v-flex xs6>
                <v-card tile flat>
                    <p>Pin Untuk ubah password akan dikirim ke email Anda</p>
                </v-card>
              </v-flex>
              <v-flex xs2>
                <v-card tile flat>
                    <v-btn color="blue lighten-1" @click="submit()"><b>Kirim</b></v-btn>
                </v-card>
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
      email : null,
      codeForget: null
    }
  },
  methods: {
    submit: function () {
        if (this.email == null) {
         alert("Isi Alamat email !")
        }
        else {
            const URL = '/api/forgotPassword'
            const argument = {
                address: this.email,
                subject:"Lupa Password",
            }
            axios.post(URL, argument)
                .then(response => {
                this.codeForget = response.data
                    if (this.codeForget != null){
                      if (this.codeForget != 0){
                        alert("Code Telah dikirim Ke Email Anda!")
                        sessionStorage.setItem("codeForget", this.codeForget);
                        sessionStorage.setItem("email", this.email);
                        this.$router.push('/reset-password')
                      }
                      else
                      {
                        alert("Akun Tidak ditemukan!")
                      }
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
