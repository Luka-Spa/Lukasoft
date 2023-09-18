<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>

<template>
    <section id="projects" class="dark:bg-zinc-800 flex justify-center">

        <div class="max-w-screen-xl flex flex-col  flex-wrap justify-center py-24">
            <h1
                class="ml-2 mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-4xl dark:text-white">
                Projects</h1>
            <div class="flex flex-row flex-wrap justify-center">
                <div class="p-2 text-center ">
                    <div
                        class="max-w-xs transition md:hover:-translate-y-4 ease-in-out h-full bg-white border border-transparent  rounded-2xl shadow-2xl dark:bg-zinc-800 ">
                        <div class=" m-4 bg-center bg-no-repeat bg-[url('./assets/icon_spooky_sips.png')] bg-contain h-40 ">
                        </div>
                        <div class="p-5">
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    Spooky Sips</h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Spooky Sips is a
                                halloween-themed
                                drinking game with a lot of dynamic content.</p>
                            <a target="_blank" href="https://play.google.com/store/apps/details?id=com.lukasoft.spooky_sips"
                                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-sky-700 rounded-lg hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800">
                                <font-awesome-icon icon="fa-brands fa-google-play" class="mr-2" />
                                Install
                            </a>
                        </div>
                    </div>
                </div>
                <div class="p-2 text-center">
                    <div
                        class="max-w-xs h-full bg-white border border-transparent transition md:hover:-translate-y-4 ease-in-out   rounded-2xl shadow-2xl dark:bg-zinc-800 ">
                        <div
                            class="bg-center bg-no-repeat bg-[url('./assets/icon_schwanz_schmerz.svg')] bg-contain m-4 h-40">
                        </div>
                        <div class="p-5">
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Schwanz
                                    Schmerz
                                </h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Schwanz Schmerz is a free
                                drinking
                                game
                                with a lot of unique content and different gamemodes</p>
                            <a target="_blank"
                                href="https://play.google.com/store/apps/details?id=com.loeka.schwanz_schmerz"
                                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-sky-700 rounded-lg hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800">
                                <font-awesome-icon icon="fa-brands fa-google-play" class="mr-2" />
                                Install

                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>