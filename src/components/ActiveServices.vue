<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { initTabs } from "flowbite"
initTabs()
</script>
<template>
    <section id="services" class="bg-[#333F50] flex justify-center">
        <div class="max-w-5xl flex flex-col  flex-wrap justify-center py-24 ">
            <h1 class="ml-2 mb-8 text-2xl font-extrabold leading-none tracking-tight  md:text-5xl lg:text-4xl text-white">
                Self-Hosted Services</h1>

            <div class="justify-center flex-wrap flex">
                <div class="w-full max-w-xs  border border-gray-700 rounded-lg shadow bg-gray-800 dark:border-gray-700 m-2">
                    <a href="#">
                        <img class="p-8 rounded-t-lg max-h-44" src="../assets/portainer.webp" alt="product image" />
                    </a>
                    <div class="px-5 pb-5 text-white">
                        <a href="#">
                            <h5 class="text-xl font-semibold tracking-tight ">Portainer</h5>
                        </a>
                        <div class="flex items-center mt-2.5 mb-5">
                            Used for monitoring and controlling docker containers.
                        </div>
                        <div class="flex items-center justify-between">

                            <a href="https://hub.docker.com/r/portainer/portainer-ce" target="_blank"
                                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View
                                Image<font-awesome-icon icon="fa-brands fa-docker" class="ml-2" /></a>
                        </div>
                    </div>
                </div>
                <div class="w-full max-w-xs  border border-gray-700 rounded-lg shadow bg-gray-800 dark:border-gray-700 m-2">
                    <a href="#">
                        <img class="p-8 rounded-t-lg max-h-44" src="../assets/nginx.png" alt="product image" />
                    </a>
                    <div class="px-5 pb-5 text-white">
                        <a href="#">
                            <h5 class="text-xl font-semibold tracking-tight ">Nginx</h5>
                        </a>
                        <div class="flex items-center mt-2.5 mb-5">
                            Used as a reverse proxy, and to serve this website.
                        </div>
                        <div class="flex items-center justify-between">

                            <a href="https://hub.docker.com/_/nginx" target="_blank"
                                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View
                                Image<font-awesome-icon icon="fa-brands fa-docker" class="ml-2" /></a>
                        </div>
                    </div>
                </div>
                <div class="w-full max-w-xs  border border-gray-700 rounded-lg shadow bg-gray-800 dark:border-gray-700 m-2">
                    <a href="#">
                        <img class="p-8 rounded-t-lg max-h-44" src="../assets/filebrowser.png" alt="product image" />
                    </a>
                    <div class="px-5 pb-5 text-white">
                        <a href="#">
                            <h5 class="text-xl font-semibold tracking-tight ">Filebrowser</h5>
                        </a>
                        <div class="flex items-center mt-2.5 mb-5">
                            Used to access files on my personal cloud.
                        </div>
                        <div class="flex items-center justify-between">

                            <a href="https://hub.docker.com/r/filebrowser/filebrowser" target="_blank"
                                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View
                                Image<font-awesome-icon icon="fa-brands fa-docker" class="ml-2" /></a>
                        </div>
                    </div>
                </div>
                <div class="w-full max-w-xs  border border-gray-700 rounded-lg shadow bg-gray-800 dark:border-gray-700 m-2">
                    <a href="#">
                        <img class="p-8 rounded-t-lg max-h-44" src="../assets/flatnotes.png" alt="product image" />
                    </a>
                    <div class="px-5 pb-5 text-white">
                        <a href="#">
                            <h5 class="text-xl font-semibold tracking-tight ">Flatnotes</h5>
                        </a>
                        <div class="flex items-center mt-2.5 mb-5">
                            Used for creating notes in markdown in a central store.
                        </div>
                        <div class="flex items-center justify-between">

                            <a href="https://hub.docker.com/r/elestio/flatnotes" target="_blank"
                                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View
                                Image<font-awesome-icon icon="fa-brands fa-docker" class="ml-2" /></a>
                        </div>
                    </div>
                </div>

                <div class="w-full max-w-xs  border border-gray-700 rounded-lg shadow bg-gray-800 dark:border-gray-700 m-2">
                    <a href="#">
                        <img class="p-8 rounded-t-lg max-h-44" src="../assets/gitea.png" alt="product image" />
                    </a>
                    <div class="px-5 pb-5 text-white">
                        <a href="#">
                            <h5 class="text-xl font-semibold tracking-tight ">Gitea</h5>
                        </a>
                        <div class="flex items-center mt-2.5 mb-5">
                            Used as a personal git repository similar to GitHub.
                        </div>
                        <div class="flex items-center justify-between">

                            <a href="https://hub.docker.com/r/gitea/gitea" target="_blank"
                                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View
                                Image<font-awesome-icon icon="fa-brands fa-docker" class="ml-2" /></a>
                        </div>
                    </div>
                </div>
                <div class="w-full max-w-xs  border border-gray-700 rounded-lg shadow bg-gray-800 dark:border-gray-700 m-2">
                    <a href="#">
                        <img class="p-8 rounded-t-lg max-h-44" src="../assets/jellyfin.png" alt="product image" />
                    </a>
                    <div class="px-5 pb-5 text-white">
                        <a href="#">
                            <h5 class="text-xl font-semibold tracking-tight ">Jellyfin</h5>
                        </a>
                        <div class="flex items-center mt-2.5 mb-5">
                            Used for streaming media, like movies or TV Shows.
                        </div>
                        <div class="flex items-center justify-between">

                            <a href="https://hub.docker.com/r/jellyfin/jellyfin" target="_blank"
                                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View
                                Image<font-awesome-icon icon="fa-brands fa-docker" class="ml-2" /></a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>