<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { RouterLink } from 'vue-router'


const baseUrl = import.meta.env.VITE_BASE_URL;

</script>
<template>
  <nav class="bg-white border-gray-200 dark:bg-zinc-800 dark:border-gray-700 fixed w-full shadow-sm z-50">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <RouterLink to="/" v-scroll-to="'#home'" class="flex items-center">
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Lukasoft</span>
      </RouterLink>
      <button data-collapse-toggle="navbar-dropdown" type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-dropdown" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15" />
        </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
        <ul
          class="flex flex-col font-medium p-4 md:p-0 mt-4 shadow-md md:shadow-none  border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0  md:bg-white dark:md:bg-zinc-800 dark:bg-zinc-800  ">
          <li>
            <RouterLink to="/" v-scroll-to="'#home'"
              class="block py-2 pl-3 pr-4 dark:text-white  rounded md:bg-transparent  md:p-0 md:dark:bg-transparent"
              aria-current="page">Home</RouterLink>
          </li>
          <li>
            <RouterLink to="/" v-scroll-to="'#projects'"
              class="block py-2 pl-3 pr-4 dark:text-white  rounded md:bg-transparent  md:p-0  md:dark:bg-transparent">
              Projects</RouterLink>
          </li>
          <li>
            <RouterLink to="/" v-scroll-to="'#services'"
              class="block py-2 pl-3 pr-4 dark:text-white  rounded md:bg-transparent  md:p-0  md:dark:bg-transparent">
              Services</RouterLink>
          </li>
          <li>
            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar"
              class="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-sky-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-sky-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Portal
              <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="m1 1 4 4 4-4" />
              </svg></button>
            <!-- Dropdown menu -->
            <div id="dropdownNavbar"
              class="z-10 hidden font-600 bg-white divide-y divide-gray-100 rounded-lg shadow-md border dark:border-zinc-800 w-44 dark:bg-gray-700 dark:divide-gray-600">
              <ul class="fa-ul p-2 text-md text-gray-700 dark:text-gray-400 " aria-labelledby="dropdownLargeButton">
                <li class="my-3">
                  <a :href="`https://git.${baseUrl}`" target="_blank"
                    class="hover:text-zinc-950 dark:hover:text-white"><font-awesome-icon class="fa-li"
                      icon="fa-brands fa-git-alt" />Gitea</a>
                </li>
                <li class="my-3">
                  <a :href="`https://notes.${baseUrl}`" target="_blank"
                    class="hover:text-zinc-950 dark:hover:text-white"><font-awesome-icon class="fa-li"
                      icon="fa-solid fa-note-sticky" />Notes</a>
                </li>
                <li class="my-3">
                  <a :href="`https://portainer.${baseUrl}`" target="_blank"
                    class="  hover:text-zinc-950 dark:hover:text-white"><font-awesome-icon class="fa-li"
                      icon="fa-brands fa-docker" />Portainer</a>
                </li>
                <li class="my-3">
                  <a :href="`https://drive.${baseUrl}`" target="_blank"
                    class="hover:text-zinc-950 dark:hover:text-white"><font-awesome-icon class="fa-li"
                      icon="fa-solid fa-cloud" />Drive</a>
                </li>
                <li class="my-3">
                  <a :href="`https://movies.${baseUrl}`" target="_blank"
                    class="hover:text-zinc-950 dark:hover:text-white"><font-awesome-icon class="fa-li"
                      icon="fa-solid fa-display" />Jellyfin</a>
                </li>
              </ul>

            </div>
          </li>

        </ul>
      </div>
    </div>
  </nav>
</template>