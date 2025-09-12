<template>
    <!-- Desktop Footer -->
    <div class="container-fluid" id="footer"
        style="width: 100%; height:auto;background-color: #dad1ce80;table-layout: fixed;">
        <div class="row p-3">
            <div class="col-6 container container-fluid">
                <span>
                    <NuxtLink to="/" class="pr-2">購物須知</NuxtLink>
                </span>
                <span>
                    <NuxtLink to="/" class="pr-2">常見問題</NuxtLink>
                </span>
                <span>
                    <NuxtLink to="/" class="pr-2">最新公告</NuxtLink>
                </span>
                <span>
                    <NuxtLink to="/" class="pr-2">會員權益聲明</NuxtLink>
                </span>
            </div>
            <div class="col-6 container-fluid text-right small">
                <p style="color: #5f5965;">
                    Copyright&copy;{{ currentYear }}
                    <NuxtLink to="/"> Day Dreaming creative studio </NuxtLink>. All rights reserved.
                </p>
            </div>
        </div>
    </div>

    <!-- Mobile Footer -->
    <div class="container-fluid text-center" id="phone_footer">
        <p style="font-size: 10px;color: #5f5965;">
            Copyright&copy;{{ currentYear }}
            <NuxtLink to="/"> Day Dreaming creative studio </NuxtLink>. All rights reserved.
        </p>
    </div>
</template>

<script setup lang="ts">
// Get current year for copyright
const currentYear = new Date().getFullYear();
</script>

<style scoped>
/* Footer-specific styles if needed */
footer a {
    transition: color 0.3s ease;
}

footer a:hover {
    color: #d78779;
}
</style>