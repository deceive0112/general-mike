<template> 
    <div class="flex flex-col min-h-screen px-18 md:px-30">
        <web-header class="bg-blue-900 p-3 shadow-xl rounded-md mt-2"/>
        <div class="p-3">
            <slot />
        </div>
        <web-footer class="bg-blue-900 p-3 shadow-xl"/>
    </div>
</template>