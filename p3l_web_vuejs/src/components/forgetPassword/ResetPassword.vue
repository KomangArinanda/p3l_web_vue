<template>
  <v-layout row wrap justify-space-around>
    <v-flex xs6>
      <v-card tile flat color="blue lighten-5">
          <div>
            <v-layout row wrap justify-space-around>
              <v-flex xs12>
                <v-card tile flat>
                  <v-card-text class="px-0  text-xs-center"><h2>Reset Password</h2></v-card-text>
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
                    label="PIN Verifikasi Email"
                    v-model="codeForget"
                    required
                    ></v-text-field>
                </v-card>
              </v-flex>
            </v-layout>
          </div>
          <div>
            <v-layout row wrap justify-space-around>
              <v-flex xs8>
                <v-card tile flat>
                  <v-text-field
                    label="Kata Sandi"
                    v-model="password1"
                    type="password"
                    required
                    ></v-text-field>
                </v-card>
              </v-flex>
            </v-layout>
          </div>
          <div>
            <v-layout row wrap justify-space-around>
              <v-flex xs8>
                <v-card tile flat>
                  <v-text-field
                    label="Ulangi Kata Sandi"
                    v-model="password2"
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
              <v-flex xs6>
                <v-card tile flat>
                    <p>Periksa Email untuk melihat PIN</p>
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
      codeForget: null,
      email: null,
      password1: null,
      password2: null,
      counter : 2,
      code: null
    }
  },
    mounted: function () {
      this.email = sessionStorage.getItem("email")
      this.code = sessionStorage.getItem("codeForget")
    },
  methods: {
    submit: function () {
        if (this.password1 != this.password2) {
         alert("Input Ulang Kata Sandi !")
         this.password1 = null
         this.password2 = null 
        }
        else if (this.counter <= 0){
            alert("Batas Input PIN 3x, Reset Password Gagal !")
            sessionStorage.removeItem("codeForget")
            sessionStorage.removeItem("email")
            this.$router.push('/login')
        }
        else if (this.codeForget==null || this.password1==null) {
            alert("Isi Data Dengan Lengkap")
        }
        else if (this.codeForget != this.code){
            alert("PIN Verifikasi salah !")
            this.counter = this.counter-1
            
        }
        else {
            const URL = '/api/resetPassword'
            const argument = {
                email: this.email,
                password: this.password1,
            }
            axios.post(URL, argument)
                .then(response => {
                this.email = response.data
                    if (this.email != null){
                        alert("Reset Password Berhasil!")
                        sessionStorage.removeItem("codeForget")
                        sessionStorage.removeItem("email")
                        this.$router.push('/login')
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
