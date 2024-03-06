<script setup>
import {computed} from 'vue'
import {TrashIcon} from '@heroicons/vue/24/solid'
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/stores/user';

 const props = defineProps({
    message: {
        type: Object,
        required: true
    }
})
const emit = defineEmits(['delete'])

const {user} = storeToRefs(useUserStore());

const formatDate = (date) =>{
    let formattedDay = date.toLocaleDateString(); 
    let formattedTime= date.toLocaleTimeString('default',{hour: '2-digit',minute:'2-digit'});

    return `${formattedDay} à ${formattedTime}`
}

const formattedDate = computed(()=>{
    const date =  new Date(props.message.created_at); 
    
    return formatDate(date);

})

const isConnected = computed(()=>{
    return props.message.author.id === user.value?.id
})

</script>

<template>
    <div class="flex">
        <img src="../assets/King.png" alt="avatarImage" class="h-7 w-7 rounded-full">
        {{ message.author.username }}
        <span class="text-xs text-opacity-80 text-gray-300">
            {{ formattedDate }}
        </span>
        <button @click="emit('delete',message.id)" class="p-1  rounded-md ml-1 rounded-full hover:bg-slate-500" v-if="isConnected" ><TrashIcon class="w-4 h-4"/> </button>    
    </div>
    {{ message.content }}
</template>