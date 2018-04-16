import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
const URL = '/api/reservation/search-room'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        rooms: [],
        roomType: []
      },
      mutations: {
        getterRooms (state, value) {
            state.rooms = value
          },
        changeRoomType (state, value) {
          state.roomType.push(value)
          
        }
      },
      getters: {
        rooms: (state) => {
            return state.rooms
        },
        roomType: (state) => {
          return state.roomType
        }
      },
      actions: {
        getRooms: ({commit}) => {
            const argument = {
              branchId: 1,
              checkInDate: '2018-04-05',
              checkOutDate: '2018-04-06',
              numberOfRoom: 1,
              numberOfAdult: 1,
              numberOfChild: 1
            }
            axios.post(URL, argument)
              .then(response => {
                commit('getterRooms', response.data)
              })
              .catch(error => {
                alert(error)
              })
          },
        saveRoomType: ({ commit }, newRoomType) => {
          commit("changeRoomType", newRoomType)
        }
      }
    })
    
    export default store