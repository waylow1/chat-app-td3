<script setup>
import {ref} from 'vue'
import ChatMessage from '@/components/ChatMessage.vue'


const messageText = ref('');
const messageList = ref([]);

const addMessage = ()=>{
    messageList.value.push({
        text: messageText.value,
        date: new Date(),
        user: {
            username: "M.Meignen",
            avatarUrl:'https://i1.rgstatic.net/ii/profile.image/969357991620610-1608124363985_Q512/Pierrick-Meignen.jpg'
        }
    });
    messageText.value="";
}

</script>

<template>
    <div v-for="(message,index) in messageList" class="p-4" :key="index">
        <ChatMessage :message="message"></Chatmessage>
    </div>
    <div class="flex align-center p-4">
        <textarea v-model="messageText" name="message" id="message" rows="1" class="text-black rounded-md"></textarea>
        <button @click="addMessage" class="p-2 bg-blue-600 rounded-md ml-3">Envoyer</button>
    </div>
</template>