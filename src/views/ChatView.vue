<script setup>
import {onMounted, ref} from 'vue'
import ChatMessage from '@/components/ChatMessage.vue'
import AppNavbar  from '@/components/AppNavbar.vue';
import { useUserStore } from '@/stores/user';
import { storeToRefs } from 'pinia';
import {messageList,insertMessage,fetchMessages,subscribeToMessages} from '@/api/messages'



const {user} = storeToRefs(useUserStore());

const messageText = ref('');


subscribeToMessages();

onMounted(async ()=>{
    await fetchMessages();
})



const textarea = ref(null)

const addMessage = async ()=>{
   
    await insertMessage(messageText.value, user.value.id)

    messageText.value='';
    textarea.value.focus();
}

const deleteMessage = (id)=>{
    messageList.value = messageList.value.filter((message)=>{
       return message.id!=id
    })
}

</script>

<template>
    <div class="flex flex-col h-full overflow-hidden">
        <AppNavbar/>
        <div class="overflow-auto grow">
            <div v-for="(message,index) in messageList" class="p-4" :key="index">
                <ChatMessage @delete="deleteMessage" :message="message"></Chatmessage>
            </div>
        </div>
        <div class="flex align-center p-4">
            <textarea ref="textarea" @keyup.enter.exact="addMessage" v-model="messageText" name="message" id="message" rows="1" class="text-black rounded-md"></textarea>
            <button @click="addMessage" class="p-2 bg-blue-600 rounded-md ml-3">Envoyer</button>
        </div>
    </div>
</template>