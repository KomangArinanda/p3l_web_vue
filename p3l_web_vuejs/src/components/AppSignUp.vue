<template>
  <v-layout row wrap justify-space-around>
    <v-flex xs6>
      <v-card tile flat color="blue lighten-5">
          <div>
            <v-layout row wrap justify-space-around>
              <v-flex xs12>
                <v-card tile flat>
                  <v-card-text class="px-0  text-xs-center"><h2>Daftar Akun</h2></v-card-text>
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
                    label="Nama Lengkap"
                    v-model="name"
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
                    label="Nomor Identitas"
                    v-model="identityNumber"
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
                    label="E-mail"
                    v-model="email"
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
                    label="Nomor Telephone"
                    v-model="telephone"
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
                    label="Alamat Lengkap"
                    v-model="address"
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
                    <p>Untuk keperluan reservasi, mohon isi data dengan benar</p>
                </v-card>
              </v-flex>
              <v-flex xs2>
                <v-card tile flat>
                    <v-btn color="blue lighten-1" @click="submit()"><b>Daftar</b></v-btn>
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
        name: null,
        identityNumber: null,
        email: null,
        telephone: null,
        address: null,
        password1: null,
        password2: null,
        account: []
    }
  },
  methods: {
    submit: function () {
        if (this.password1 != this.password2) {
         alert("Input Ulang Kata Sandi !")
         this.password1 = null
         this.password2 = null 
        }
        else if (this.name==null || this.email ==null || this.identityNumber==null || this.telephone==null || this.address==null || this.password1==null) {
            alert("Isi Data Dengan Lengkap")
        }
        else {
            const URL = '/api/signup'
            const argument = {
                name: this.name,
                identityNumber: this.identityNumber,
                email: this.email,
                telephone: this.telephone,
                address: this.address,
                password: this.password1,
            }
            axios.post(URL, argument)
                .then(response => {
                this.account = response.data
                    if (this.account.name != null){
                        alert("SignUp Berhasil!")
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
