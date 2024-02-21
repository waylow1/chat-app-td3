<script setup>
import { useUserStore } from '@/stores/user';
import { supabase } from '@/supabase';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const {user} = storeToRefs(useUserStore());

const loading = ref(false);

const router = useRouter();

const logout = async ()=>{
    loading.value = true;
    await supabase.auth.signOut()
    router.push('/login')
}

</script>

<template>
    <header class="flex p-3 items-align">
        <div v-if="user">Username : {{ user.username }} </div>
        <button @click="logout" class="p-2 ml-auto outline rounded" :loading="loading">
            <span v-if="loading">Loading...</span>
            <span v-else>Se déconnecter</span>
        </button>
    </header>
</template>