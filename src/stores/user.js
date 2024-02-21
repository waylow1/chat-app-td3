import { ref } from 'vue'
import { defineStore } from 'pinia'
import { supabase } from '@/supabase'

export const useUserStore = defineStore('user', () => {
  const user = ref(null)

 async function fetchUserProfile(userId){
        if(!userId){
            user.value = null 
            return           
        }
    const {data,error} = await supabase.from('profiles').select('*').eq('id',userId).single()
    if(error){
        console.log(error)
    }
    else{
        user.value = data
    }
  }
  
  return { user, fetchUserProfile }
})
