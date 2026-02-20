<template> 
    <div id="home" class="flex flex-col min-h-screen px-25 md:px-40">
        <web-header class="p-3 shadow-xl rounded-md mt-3"/>
        <div class="p-3">
            <AppBackground />
            <slot />
        </div>
        <web-footer class="bg-slate-800 p-3 shadow-xl rounded-md mb-3"/>
    </div>
</template>