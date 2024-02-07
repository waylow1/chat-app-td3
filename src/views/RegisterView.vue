<template>
    <form action="" method="get"> 
        <div>
            <label for="email">Email </label>
            <intput type="email" id="email" v-model="email"></intput>
        </div>
        <div>
            <label for="username">username </label>
            <intput type="text" id="username" v-model="username"></intput>
        </div>
        <div>
            <label for="password">password </label>
            <intput type="password" id="password" v-model="password"></intput>
        </div>
    </form>
</template>