<script setup>
import {computed} from 'vue'
import {TrashIcon} from '@heroicons/vue/24/solid'
 const props = defineProps({
    message: {
        type: Object,
        required: true
    }
})
const emit = defineEmits(['delete'])

const formatDate = (date) =>{
    let formattedDay = date.toLocaleDateString(); 
    let formattedTime= date.toLocaleTimeString('default',{hour: '2-digit',minute:'2-digit'});

    return `${formattedDay} à ${formattedTime}`
}

const formattedDate = computed(()=>{
    const date =  new Date(props.message.created_at); 
    
    return formatDate(date);

})
</script>

<template>
    <div class="flex">
        <img src="../assets/King.png" alt="avatarImage" class="h-7 w-7 rounded-full">
        {{ message.author.username }}
        <span class="text-xs text-opacity-80 text-gray-300">
            {{ formattedDate }}
        </span>
        
        
        {{ message.content }}
        
        <button @click="emit('delete',message.id)" class="p-1  rounded-md ml-1 rounded-full hover:bg-slate-500" > <TrashIcon class="w-4 h-4"/> </button>
    </div>
</template>