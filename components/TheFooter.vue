<template>
    <footer class="mt-20 lg:mt-40 bg-gray-100 text-gray-800 p-6">
        <div class="max-w-6xl mx-auto grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
                <h3 class="font-bold text-lg mb-4">Menu</h3>
                <ul>
                    <li v-for="item in menu" :key="item.path" class="mb-2">
                        <NuxtLink
                            :key="item.path"
                            :to="item.path"
                            class="hover:text-gray-400"
                            >{{ item.name }}
                        </NuxtLink>
                    </li>
                </ul>
            </div>
            <div>
                <h3 class="font-bold text-lg mb-4">Follow</h3>
                <div class="flex flex-col items-start mt-6">
                    <div class="flex mb-3 space-x-4">
                        <NuxtLink
                            aria-label="Open github profile"
                            class="text-sm text-gray-500 transition hover:text-gray-600"
                            target="_blank"
                            rel="nofollow noopener noreferrer"
                            :to="config.public.socials.github"
                            ><span class="sr-only">github</span>
                            <img
                                alt="Icon for Github"
                                class="transition-transform hover:scale-110 w-6 h-6"
                                src="~assets/icon/github_new.svg"
                            />
                        </NuxtLink>
                        <NuxtLink
                            aria-label="Open twitter profile"
                            target="_blank"
                            rel="nofollow noopener noreferrer"
                            :to="config.public.socials.twitter"
                            class="text-sm text-gray-500 transition hover:text-gray-600"
                        >
                            <img
                                alt="Icon for Twitter"
                                class="transition-transform hover:scale-110 w-6 h-6"
                                src="~assets/icon/twitter.svg"
                            />
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
        <div class="max-w-6xl mx-auto flex items-center justify-center mt-6">
            <div
                class="flex items-center mx-auto mb-2 space-x-2 text-sm text-gray-600 dark:text-gray-400"
            >
                <div>Copyright © {{ new Date().getFullYear() }}</div>
                <div>•</div>
                &nbsp;{{ config.public.name }}
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();
const menu = config.public.menu;
</script>
