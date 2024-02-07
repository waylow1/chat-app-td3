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
    const date = props.message.date 
    return formatDate(date);

})
</script>

<template>
    <div class="flex">
        <img :src="message.user.avatarUrl" alt="avatarImage" class="h-7 w-7 rounded-full">
        {{ message.user.username }}
        <span class="text-xs text-opacity-80 text-gray-300">
            {{ formattedDate }}
        </span>
        {{ message.text }}
        <button @click="emit('delete',message.id)" class="p-1  rounded-md ml-1 rounded-full hover:bg-slate-500" > <TrashIcon class="w-4 h-4"/> </button>
    </div>
</template>