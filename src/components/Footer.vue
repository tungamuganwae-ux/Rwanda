<template>
   <footer class="bg-green-800 text-white px-8 py-10 mt-87">
<div class="flex flex-wrap justify-between gap-8">
    <!--this footer-->
   <div>
      <h3 class="text-yellow-300 font-bold text-lg mb-3">{{ t.footer.siteName }}</h3>
      <p class="text-sm text-green-200">{{ t.footer.slogan }}</p>
   </div>

<!--Quick links-->
<div>
   <h3 class="text-yellow-300 font-bold text-lg mb-3 ">{{ t.footer.quickLinks }}</h3>
   <ul class="space-y-2 text-sm">
      <li><RouterLink to="/" class="hover:text-yellow-300">{{ t.footer.home }}</RouterLink>
      </li>
        <li><RouterLink to="/contact" class="hover:text-yellow-300">{{ t.footer.contactNav }}</RouterLink>
        </li>
         <li><RouterLink to="/services" class="hover:text-yellow-300">{{ t.footer.services }}</RouterLink>
         </li>
         <li><RouterLink to="/about" class="hover:text-yellow-300">{{ t.footer.about }}</RouterLink>
         </li>
      
   </ul>
</div>
<!--Destination-->
<div>
     <h3 class="text-yellow-300 font-bold text-lg mb-3 ">{{ t.footer.destination }}</h3>
     <ul class="space-y-2 text-sm">
        <li><RouterLink to="/eastern" class="hover:text-yellow-300">{{ t.footer.easternProvince }}</RouterLink>
      </li>
        <li><RouterLink to="/western" class="hover:text-yellow-300">{{ t.footer.westernProvince }}</RouterLink>
        </li>
         <li><RouterLink to="/northern" class="hover:text-yellow-300">{{ t.footer.northernProvince }}</RouterLink>
         </li>
         <li><RouterLink to="/southern" class="hover:text-yellow-300">{{ t.footer.southernProvince }}</RouterLink>
         </li>
            <li><RouterLink to="/kigali" class="hover:text-yellow-300">{{ t.footer.kigaliCity }}</RouterLink>
            </li>

      </ul>
      <!--CONTACT Info-->
</div>
<!--CONTACT Info-->
<div>
<h3 class="text-yellow-300 font-bold text-lg mb-3 ">{{ t.footer.contact }}</h3>
<ul class="space-y-2 text-green-300">
   <li>{{ t.footer.email }}</li>
   <li>{{ t.footer.phone }}</li>
   <li>{{ t.footer.location }}</li>

</ul>
</div>
</div>
<!--place for copy right-->
<div class="border-t border-green-600 mt-8 pt-4 text-sm text-green-300">
<p class="text-center">{{ t.footer.copyright }}</p>
</div>

   </footer>
</template>

<script>
import { ref, computed } from 'vue'
import translations from '../translate'

export default {
  name: 'Footer',
  setup() {
    const currentLanguage = ref(localStorage.getItem('selectedLanguage') || 'en')
    
    const t = computed(() => translations[currentLanguage.value])

    return {
      t,
      currentLanguage
    }
  }
}
</script>