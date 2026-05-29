<template>
   <footer class="bg-green-800 text-white px-8 py-10 mt-87">
<div class="flex flex-wrap justify-between gap-8">
    <!--this footer-->
   <div>
      <h3 class="text-yellow-300 font-bold text-lg mb-3">TEMBERA U RWANDA</h3>
      <p class="text-sm text-green-200">Discover the beauty of land of a thousand hills</p>
   </div>

<!--Quick links-->
<div>
   <h3 class="text-yellow-300 font-bold text-lg mb-3 ">Quick links</h3>
   <ul class="space-y-2 text-sm">
      <li><RouterLink to="/" class="hover:text-yellow-300">Home</RouterLink>
      </li>
        <li><RouterLink to="/contact" class="hover:text-yellow-300">Contact</RouterLink>
        </li>
         <li><RouterLink to="/services" class="hover:text-yellow-300">Services</RouterLink>
         </li>
         <li><RouterLink to="/about" class="hover:text-yellow-300">About</RouterLink>
         </li>
      
   </ul>
</div>
<!--Destination-->
<div>
     <h3 class="text-yellow-300 font-bold text-lg mb-3 ">Destination</h3>
     <ul class="space-y-2 text-sm">
        <li><RouterLink to="/eastern"class="hover:text-yellow-300">EASTERN Province</RouterLink>
      </li>
        <li><RouterLink to="/western"class="hover:text-yellow-300">WESTERN Province</RouterLink>
        </li>
         <li><RouterLink to="/northern"class="hover:text-yellow-300">NORTHERN Province</RouterLink>
         </li>
         <li><RouterLink to="/southern"class="hover:text-yellow-300">SOUTHERN Province</RouterLink>
         </li>
            <li><RouterLink to="/kigali"class="hover:text-yellow-300">KIGALI City</RouterLink>
            </li>

      </ul>
      <!--CONTACT Info-->
</div>
<!--CONTACT Info-->
<div>
<h3 class="text-yellow-300 font-bold text-lg mb-3 ">Contact</h3>
<ul class="space-y-2 text-green-300">
   <li>ahantunyaburanga@gmail.com</li>
   <li>0798818703</li>
   <li>KAGUGU KIGALI RWANDA</li>

</ul>
</div>
</div>
<!--place for copy right-->
<div class="border-t border-green-600 mt-8 pt-4 text-sm text-green-300">
<p class="text-center">© 2025 Visit Rwanda. All rights reserved</p>
</div>

   </footer>
</template>