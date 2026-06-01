<template>
  <section class="bg-white text-green-700 min-h-screen w-full px-6 py-16 mt-12">

    <!-- Title -->
    <h1 class="text-5xl font-bold text-center mb-10">
      Welcome to Eastern Province
    </h1>

    <!-- Hero Image -->
    <div class="max-w-6xl mx-auto mb-12">
      <img
        src="/src/assets/akagera.jpg"
        alt="Akagera National Park"
        class="w-full h-[500px] object-cover rounded-2xl shadow-lg"
      />
    </div>

    <!-- Description -->
    <div class="max-w-4xl mx-auto text-center mb-16">
      <p class="text-lg text-gray-700 leading-8 mb-6">
        Eastern Province is home to the famous
        Akagera National Park, Rwanda's largest national park.
        The park is known for its beautiful savannah landscapes,
        lakes, wetlands, and rich wildlife.
      </p>

      <p class="text-lg text-gray-700 leading-8">
        Visitors can enjoy game drives and spot the Big Five:
        lions, elephants, rhinos, buffaloes, and leopards.
        Akagera is one of Rwanda's most exciting tourist destinations.
      </p>
    </div>

    <!-- Animal Cards -->
    <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

      <!-- Lion -->
      <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">
        <img
          src="/src/assets/lion.jpg"
          alt="Lion"
          class="w-full h-56 object-cover"
        />
        <div class="p-5">
          <h2 class="text-2xl font-bold text-green-800 mb-3">
            Lion
          </h2>
          <p class="text-gray-600">
            Lions are among the most famous animals found in Akagera National Park.
          </p>
        </div>
      </div>

      <!-- Elephant -->
      <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">
        <img
          src="/src/assets/ele.jpg"
          alt="Elephant"
          class="w-full h-56 object-cover"
        />
        <div class="p-5">
          <h2 class="text-2xl font-bold text-green-800 mb-3">
            Elephant
          </h2>
          <p class="text-gray-600">
            African elephants can be seen roaming freely across Akagera's plains.
          </p>
        </div>
      </div>

      <!-- Giraffe -->
      <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">
        <img
          src="/src/assets/gira.jpg"
          alt="Giraffe"
          class="w-full h-56 object-cover"
        />
        <div class="p-5">
          <h2 class="text-2xl font-bold text-green-800 mb-3">
            Giraffe
          </h2>
          <p class="text-gray-600">
            Giraffes are easily spotted thanks to their long necks and graceful appearance.
          </p>
        </div>
      </div>

      <!-- Zebra -->
      <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">
        <img
          src="/src/assets/down.jpg"
          alt="Zebra"
          class="w-full h-56 object-cover"
        />
        <div class="p-5">
          <h2 class="text-2xl font-bold text-green-800 mb-3">
            Zebra
          </h2>
          <p class="text-gray-600">
            Zebras add beauty to the savannah with their striking black-and-white stripes.
          </p>
        </div>
      </div>

      <!-- Rhino -->
      <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">
        <img
          src="/src/assets/ttt.jpg"
          alt="Rhino"
          class="w-full h-56 object-cover"
        />
        <div class="p-5">
          <h2 class="text-2xl font-bold text-green-800 mb-3">
            Rhino
          </h2>
          <p class="text-gray-600">
            Rhinos are among the rare and protected animals found in Akagera.
          </p>
        </div>
      </div>

      <!-- Buffalo -->
      <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">
        <img
          src="/src/assets/Instagram.jpg"
          alt="Buffalo"
          class="w-full h-56 object-cover"
        />
        <div class="p-5">
          <h2 class="text-2xl font-bold text-green-800 mb-3">
            Buffalo
          </h2>
          <p class="text-gray-600">
            Buffaloes are powerful animals that live in large herds across the park.
          </p>
        </div>
      </div>

    </div>

  </section>
</template>