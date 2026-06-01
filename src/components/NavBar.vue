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
          <RouterLink to="/" class="hover:text-yellow-300">
            {{ t.navbar.home }}
          </RouterLink>
        </li>

       
        <li>
          <RouterLink to="/about" class="hover:text-yellow-300">
            {{ t.navbar.about }}
          </RouterLink>
        </li>

   
        <li>
          <RouterLink to="/services" class="hover:text-yellow-300">
            {{ t.navbar.services }}
          </RouterLink>
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
              <RouterLink
                to="/videos"
                class="block px-4 py-2 text-black hover:bg-green-800 hover:text-white"
              >
                {{ t.navbar.videos }}
              </RouterLink>
            </li>

            <li>
              <RouterLink
                to="/photos"
                class="block px-4 py-2 text-black hover:bg-green-800 hover:text-white"
              >
                {{ t.navbar.photos }}
              </RouterLink>
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
              <RouterLink
                to="/western"
                class="block px-4 py-2 text-black hover:bg-green-800 hover:text-white"
              >
                {{ t.navbar.westernProvince }}
              </RouterLink>
            </li>

            <li>
              <RouterLink
                to="/eastern"
                class="block px-4 py-2 text-black hover:bg-green-800 hover:text-white"
              >
                {{ t.navbar.easternProvince }}
              </RouterLink>
            </li>

            <li>
              <RouterLink
                to="/northern"
                class="block px-4 py-2 text-black hover:bg-green-800 hover:text-white"
              >
                {{ t.navbar.northernProvince }}
              </RouterLink>
            </li>

            <li>
              <RouterLink
                to="/southern"
                class="block px-4 py-2 text-black hover:bg-green-800 hover:text-white"
              >
                {{ t.navbar.southernProvince }}
              </RouterLink>
            </li>

            <li>
              <RouterLink
                to="/kigali"
                class="block px-4 py-2 text-black hover:bg-green-800 hover:text-white"
              >
                {{ t.navbar.kigaliCity }}
              </RouterLink>
            </li>

          </ul>
        </li>
         <!-- Contact -->
        <li>
          <RouterLink to="/contact" class="hover:text-yellow-300">
            {{ t.navbar.contact }}
          </RouterLink>
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
import { RouterLink } from 'vue-router'
import translations from '../translate'

export default {
  name: 'NavBar',
  components: {
    RouterLink
  },
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