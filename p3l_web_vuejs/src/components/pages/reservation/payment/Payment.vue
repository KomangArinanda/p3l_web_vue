<template>
  <v-container grid-list-md>
      <div>
        <v-layout row wrap>
        <v-flex xs12>
            <v-card color="white">
                <v-card-text class="px-0  text-xs-left"><h2>This is Progress Bar (3. Payment)</h2></v-card-text>
            </v-card>
        </v-flex>
        </v-layout>
        <br>
      </div>
       <div>
        <v-layout row wrap>
           <v-card tile flat>
                <v-card-text class="px-0  text-xs-left">
                    <div class="._1zgy8" style="font-size: 32px;">
                        Metode Pembayaran
                    </div>
                </v-card-text>
            </v-card>
        </v-layout>
        <br>
      </div>
      <div>
        <v-layout row wrap>
        <v-flex xs12>
          <v-card tile flat>
                    <v-layout row wrap>
                        <v-layout row wrap>
                         <v-flex xs8>
                            <v-layout row wrap class="mr-2">
                                <v-flex xs12>
                                    <v-card color="white">
                                       <div class="_3HD0_" style="line-height: 48px;"><b>Pilihan Metode Pembayaran</b></div>
                                    </v-card>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                        <v-flex xs4>
                            <v-layout row wrap>
                                <v-flex xs12>
                                    <v-card color="white" class="text-xs-center">
                                        <v-card-text class="text-xs-center">
                                            <div class="_3HD0_ ml-3 mr-3" style="line-height: 48px; text-align: center;">
                                                <v-btn color="blue darken-1" class="_cap01" @click="onPickFile">Upload Bukti Bayar</v-btn>
                                            </div>
                                        </v-card-text>
                                        
                                        <v-layout row wrap class="text-xs-center">
                                            <v-flex xs12>
                                                <input type="file"
                                                style="display: none"
                                                ref="fileInput"
                                                accept="image/*"
                                                @change="onFilePicked">
                                                <img :src="imageUrl" height="150">
                                            </v-flex>
                                        </v-layout>
                                        <br>
                                    </v-card>
                                </v-flex>
                                <v-flex xs12>
                                    <div v-if="uploaded != undefined">
                                        <v-card  tile flat>
                                            <router-link to="/booking/finish">
                                            <v-btn color="orange accent-3" class="_cap01">Saya Sudah Membayar</v-btn>
                                            </router-link>
                                        </v-card>
                                    </div>
                                </v-flex>
                            </v-layout>
                            <br>
                        </v-flex>
                    </v-layout>
                        
                    </v-layout>
                </v-card>
        </v-flex>
        </v-layout>
      </div>
  </v-container>
</template>

<style>
._3HD0_ {
    font-size: 24px;
    font-weight: 500;
    line-height: 27px;
    text-align: left;
}
._cap01 {
    text-transform: capitalize;
    color: #ffffff;
}
._1zgy8 {
    margin-top: 40px;
    margin-bottom: 24px;
    font-size: 32px;
    line-height: 1.2;
}
</style>


<script>
  export default {
    data () {
      return {
        e1: 0,
        selectedFile: null,
        imageUrl: '',
        image: null,
        uploaded: undefined
      }
    },
    methods: {
        onPickFile () {
        this.$refs.fileInput.click()
        this.uploaded = true
      },
      onFilePicked (event) {
        const files = event.target.files
        let filename = files[0].name
        if (filename.lastIndexOf('.') <= 0) {
          return alert('Please add avalid file!')
        }
        const fileReader = new FileReader()
        fileReader.addEventListener('load', () => {
          this.imageUrl = fileReader.result
        })
        fileReader.readAsDataURL(files[0])
        this.image = files[0]
      },
      onUpload () {
        const fd = new FormData()
        fd.append('file', this.selectedFile, this.selectedFile.name)
        axios.post('api/reservation/transfer-receipt')
          .then(res => {
            console.log(res)
          })
      }
    }
  }
</script>