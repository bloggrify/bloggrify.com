<template>
  <div class="bg-slate-200 dark:bg-slate-900 mt-10 py-10">
    <div id="templates" class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <!-- Grid -->
      <div class="md:grid md:grid-cols-2 md:gap-12 xl:gap-32 ">
        <div class="relative h-[360px]">
          <div class="rounded-2xl absolute top-0 left-0 bg-gray-800 border-gray-300 border h-[250px] w-[350px] sm:h-[350px] sm:w-[500px] md:h-[450px] md:w-[550px] lg:h-[313px] lg:w-[450px] xl:h-[353px] xl:w-[500px] rotate-3" />
          <div class="rounded-2xl absolute top-0 left-0 bg-gray-800 border-gray-300 border h-[250px] w-[350px] sm:h-[350px] sm:w-[500px] md:h-[450px] md:w-[550px] lg:h-[313px] lg:w-[450px] xl:h-[353px] xl:w-[500px] -rotate-3" />
          <div class="rounded-2xl absolute top-0 left-0 bg-gray-800 border-gray-300 border h-[250px] w-[350px] sm:h-[350px] sm:w-[500px] md:h-[450px] md:w-[550px] lg:h-[313px] lg:w-[450px] xl:h-[353px] xl:w-[500px] -rotate-2" />
          <div class="rounded-2xl absolute top-0 left-0 bg-gray-800 border-gray-300 border h-[250px] w-[350px] sm:h-[350px] sm:w-[500px] md:h-[450px] md:w-[550px] lg:h-[313px] lg:w-[450px] xl:h-[353px] xl:w-[500px] -rotate-6" />
          <NuxtImg class="absolute top-0 left-0 rounded-xl" src="/images/templates/bloggr.png" alt="Mistral template" />
        </div>
        <!-- End Col -->

        <div class="mt-10 lg:mt-0">
          <div class="space-y-6 sm:space-y-8">
            <!-- Title -->
            <div class="space-y-2 md:space-y-4">
              <h2 class="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-neutral-200">
                Multiple templates available
              </h2>
              <p class="text-gray-500 dark:text-neutral-500">
                Choose from a variety of templates to start your blog
                with a beautiful design.
              </p>
            </div>
            <!-- End Title -->

            <!-- List -->
            <ul class="space-y-2 sm:space-y-4">
              <li class="flex space-x-3">
                <span class="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                  <svg class="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                </span>

                <span class="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                  <span class="font-bold">Easy</span> to use
                </span>
              </li>

              <li class="flex space-x-3">
                <span class="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                  <svg class="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                </span>

                <span class="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                  <span class="font-bold">customizable</span>
                </span>
              </li>

              <li class="flex space-x-3">
                <span class="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                  <svg class="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                </span>

                <span class="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                  You can build
                  <NuxtLink class="font-bold underline decoration-dashed underline-offset-4" to="/reference/theming">your own template</NuxtLink>
                </span>
              </li>
            </ul>
            <!-- End List -->
            <NuxtLink
              class="inline-flex justify-center items-center text-lg gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600 py-3 px-4 dark:focus:ring-offset-gray-800"
              to="/templates"
            >
              See all templates
            </NuxtLink>
          </div>
        </div>
        <!-- End Col -->
      </div>
      <!-- End Grid -->
    </div>
  </div>
</template>
