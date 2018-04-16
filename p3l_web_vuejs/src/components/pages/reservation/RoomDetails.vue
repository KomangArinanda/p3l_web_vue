<template>
  <v-container grid-list-md>
      <div>
        <v-layout row wrap>
        <v-flex xs10>
            <v-card dark tile flat>
                <v-card-text class="px-0  text-xs-left"><h2>This is Navigation</h2></v-card-text>
            </v-card>
        </v-flex>
        <v-flex xs2>
            <v-card dark tile flat>
                <div>
                    <v-btn color="blue darken-1 right">Ganti pencarian</v-btn>
                </div>
            </v-card>
        </v-flex>
    </v-layout>
    </div>
    <br>
    <div>
        <v-layout row wrap>
            <v-flex xs12>
                <v-card tile flat color="white">
                    <v-layout row wrap>
                        <v-flex xs12>
                            <v-card tile flat>
                                <v-card-text class="px-0  text-xs-left  ml-2"><h3>Kamar Jenis</h3></v-card-text>
                            </v-card>
                            <hr>
                        </v-flex>
                        <v-layout row wrap class="ml-3 mt-2 mb-3 mr-3">
                         <v-flex xs8>
                            <v-layout row wrap>
                                <v-flex xs12>
                                    <v-carousel>
                                        <v-carousel-item v-for="(item,i) in items" :src="item.src" :key="i"></v-carousel-item>
                                    </v-carousel>
                                </v-flex>
                                </v-layout>
                        </v-flex>
                        <v-flex xs4>
                            <v-card dark tile flat>
                                <div>
                                    <router-link to="/booking">
                                        <v-btn color="orange accent-3">Pesan Sekarang</v-btn>
                                    </router-link>
                                </div>
                            </v-card>
                        </v-flex>
                    </v-layout>
                        
                    </v-layout>
                </v-card>
            </v-flex>
            
    </v-layout>
    <br>
    </div>
    
      <div>
          <v-layout row wrap>
              <v-flex xs12>
                <v-card tile flat color="white">
                    <v-layout row wrap>
                         <v-flex xs2>
                            <v-card dark tile flat>
                                <v-card-text class="px-0  text-xs-left"><h2>Check In</h2></v-card-text>
                            </v-card>
                        </v-flex>
                        <v-flex xs2>
                            <v-card dark tile flat>
                                <v-card-text class="px-0  text-xs-left"><h2>Check Out</h2></v-card-text>
                            </v-card>
                        </v-flex>
                        <v-flex xs2>
                            <v-card dark tile flat>
                                <v-card-text class="px-0  text-xs-left"><h2>Dewasa</h2></v-card-text>
                            </v-card>
                        </v-flex>
                        <v-flex xs2>
                            <v-card dark tile flat>
                                <v-card-text class="px-0  text-xs-left"><h2>Anak</h2></v-card-text>
                            </v-card>
                        </v-flex>
                        <v-flex xs2>
                            <v-card dark tile flat>
                                <v-card-text class="px-0  text-xs-left"><h2>Kamar</h2></v-card-text>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-card>
              </v-flex>
          </v-layout>
          <br>
      </div>
      <div>
          <v-layout row wrap>
            <v-flex xs12>
            <v-card tile flat color="white">
                <div v-for="i in 3" :key="i">
                    <v-layout row wrap class="ml-4">
                         <v-flex xs2 class="mt-2">
                            <v-card dark tile flat>
                                <v-card-media src="https://d1nabgopwop1kh.cloudfront.net/hotel-asset/30000002000010677_wh_7" height="200px">
                                </v-card-media>
                            </v-card>
                        </v-flex>
                        <v-flex xs4>
                            <v-card dark tile flat>
                                <v-card-text class="px-0  text-xs-left"><h2>Keterangan Kamar</h2></v-card-text>
                            </v-card>
                        </v-flex>
                        <v-flex xs3>
                            <v-card dark tile flat>
                                <v-card-text class="px-0  text-xs-left"><h2>Harga Kamar</h2></v-card-text>
                            </v-card>
                        </v-flex>
                        <v-flex xs3>
                            <v-card dark tile flat>
                                <div>
                                    <v-btn color="orange accent-3">Lihat Kamar</v-btn>
                                </div>
                            </v-card>
                        </v-flex>
                    </v-layout>
                    <br>
                    <hr class="ml-4 mr-4">
                </div>
            </v-card>
            </v-flex>
        </v-layout>
      </div>
  </v-container>
</template>
<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
  export default {
    data () {
      return {
        items: [
          {
            src: 'http://travelcentremaldives.com/maldives-blog/wp-content/uploads/2015/02/kurumba-resort-maldives-beach-hd-wallpaper-1920x1200-6519.jpg'
          },
          {
            src: 'https://www.pixelstalk.net/wp-content/uploads/2016/10/Hotels-Waterpool-HD-Wallpapers.jpg'
          },
          {
            src: 'http://www.travelzoo.com/blog/wp-content/uploads/2015/04/tzoo.hd_.77845.1055.197153.belvederehotel-1024x512.jpg'
          },
          {
            src: 'http://www.wallpapers13.com/wp-content/uploads/2016/08/Bellagio-and-Caesars-Palace-hotels-and-casinos-reflection-in-the-lake-Wallpaper-HD-2560x1600-915x515.jpg'
          }
        ],
        card_text: 'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.',
      }
    },
    computed: {
        ...mapGetters([
            'roomType'
        ])
    },
    mounted: function () {
      this.getRoomType()
    },
    methods: {
        getRoomType () {
        return this.$store.getters.roomType;
      }
    //   getRooms: function () {
    //     const URL = '/api/reservation/search-room'
    //     const argument = {
    //       branchId: 1,
    //       checkInDate: '2018-04-05',
    //       checkOutDate: '2018-04-05',
    //       numberOfRoom: 1,
    //       numberOfAdult: 1,
    //       numberOfChild: 1
    //     }
    //     axios.post(URL, argument)
    //       .then(response => {
    //         this.rooms = response.data
    //       })
    //       .catch(error => {
    //         alert(error)
    //       })
    //   }
    }
  }
</script>
