<template>
  <nav class="bg-green-800 text-white shadow-lg">
   
    <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

   
      <img
        src="../assets/elie.ico "
        alt="Logo"
        class="h-10 w-10"
      />

      <ul class="flex gap-6 text-lg items-center">

        
        <li>
          <a href="/" class="hover:text-yellow-300">
            {{ t.navbar.home }}
          </a>
        </li>

       
        <li>
          <a href="/about" class="hover:text-yellow-300">
            {{ t.navbar.about }}
          </a>
        </li>

   
        <li>
          <a href="/services" class="hover:text-yellow-300">
            {{ t.navbar.services }}
          </a>
        </li>


      
        <li class="relative group">
          <a
            href="#"
            class="hover:text-yellow-300 inline-flex items-center gap-1"
          >
            {{ t.navbar.gallery }} <span>⌄</span>
          </a>

          <ul
            class="absolute left-0 top-full invisible opacity-0
                   group-hover:visible group-hover:opacity-100
                   transition duration-300
                   bg-white py-2 w-44 rounded shadow-lg z-50"
          >
            <li>
              <a
                href="/videos"
                class="block px-4 py-2 text-black hover:bg-green-800 hover:text-white"
              >
                {{ t.navbar.videos }}
              </a>
            </li>

            <li>
              <a
                href="/photos"
                class="block px-4 py-2 text-black hover:bg-green-800 hover:text-white"
              >
                {{ t.navbar.photos }}
              </a>
            </li>
          </ul>
        </li>

        <!-- Destination Dropdown -->
        <li class="relative group">
          <a
            href="#"
            class="hover:text-yellow-300 inline-flex items-center gap-1"
          >
            {{ t.navbar.destination }} <span>⌄</span>
          </a>

          <ul
            class="absolute left-0 top-full invisible opacity-0
                   group-hover:visible group-hover:opacity-100
                   transition duration-300
                   bg-white py-2 w-52 rounded shadow-lg z-50"
          >

            <li>
              <a
                href="/western"
                class="block px-4 py-2 text-black hover:bg-green-800 hover:text-white"
              >
                {{ t.navbar.westernProvince }}
              </a>
            </li>

            <li>
              <a
                href="/eastern"
                class="block px-4 py-2 text-black hover:bg-green-800 hover:text-white"
              >
                {{ t.navbar.easternProvince }}
              </a>
            </li>

            <li>
              <a
                href="/northern"
                class="block px-4 py-2 text-black hover:bg-green-800 hover:text-white"
              >
                {{ t.navbar.northernProvince }}
              </a>
            </li>

            <li>
              <a
                href="/southern"
                class="block px-4 py-2 text-black hover:bg-green-800 hover:text-white"
              >
                {{ t.navbar.southernProvince }}
              </a>
            </li>

            <li>
              <a
                href="/kigali"
                class="block px-4 py-2 text-black hover:bg-green-800 hover:text-white"
              >
                {{ t.navbar.kigaliCity }}
              </a>
            </li>

          </ul>
        </li>
         <!-- Contact -->
        <li>
          <a href="/contact" class="hover:text-yellow-300">
            {{ t.navbar.contact }}
          </a>
        </li>

        <!-- Language Selector -->
        <li class="relative group">
          <button class="hover:text-yellow-300 inline-flex items-center gap-1">
            {{ currentLanguage.toUpperCase() }} <span>⌄</span>
          </button>

          <ul
            class="absolute left-0 top-full invisible opacity-0
                   group-hover:visible group-hover:opacity-100
                   transition duration-300
                   bg-white py-2 w-32 rounded shadow-lg z-50"
          >
            <li>
              <button
                @click="changeLanguage('en')"
                class="block w-full text-left px-4 py-2 text-black hover:bg-green-800 hover:text-white"
              >
                English
              </button>
            </li>

            <li>
              <button
                @click="changeLanguage('fr')"
                class="block w-full text-left px-4 py-2 text-black hover:bg-green-800 hover:text-white"
              >
                Français
              </button>
            </li>

            <li>
              <button
                @click="changeLanguage('rw')"
                class="block w-full text-left px-4 py-2 text-black hover:bg-green-800 hover:text-white"
              >
                Kinyarwanda
              </button>
            </li>
          </ul>
        </li>

      </ul>
      
    </div>
  </nav>
</template>

<script>
import { ref, computed } from 'vue'
import translations from '../translate'

export default {
  name: 'NavBar',
  setup() {
    const currentLanguage = ref('en')

    const t = computed(() => translations[currentLanguage.value])

    const changeLanguage = (lang) => {
      currentLanguage.value = lang
      localStorage.setItem('selectedLanguage', lang)
    }

    // Load saved language preference
    const savedLanguage = localStorage.getItem('selectedLanguage')
    if (savedLanguage && translations[savedLanguage]) {
      currentLanguage.value = savedLanguage
    }

    return {
      t,
      currentLanguage,
      changeLanguage
    }
  }
}
</script>