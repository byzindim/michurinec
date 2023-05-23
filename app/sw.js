//version Service Workers
const staticCacheName = 'pc-app-v1.01.39'
const dynamicCacheName = 'dm-app-v1.01.39'

//Cached 
const addUrl= [
    'index.html',
    '/css/app.min.css',
    '/js/app.js',
    '/js/slider.js',
    '/js/burger.js',
    '/question-and-answer.html',
    '/policy.html',
    '/contacts.html',
    '/about-us.html',
    '/about-team.html'
] 
// install cash
self.addEventListener('install',async event =>{
    const cache = await caches.open(staticCacheName)
    await cache.addAll(addUrl)
})
// activated caching
self.addEventListener('activate',  async event =>{
    const cacheNames = await caches.keys()
    await Promise.all(
        cacheNames
        .filter(name => name !== staticCacheName)
        .filter(name => name !== dynamicCacheName)
        .map(name => caches.delete(name))
    )
})

// cache requests
self.addEventListener('fetch', event =>{
    const url = new URL(event.request.url)
    if(url.origin === location.origin){
      
        event.respondWith(cacheFirst(event.request))
    }else {
        event.respondWith(networkFirst(event.request))
    }

})
//synchronous cache
async function cacheFirst(request) {
    const cached = await caches.match(request)
    return cached ?? await fetch(request)
}

//asynchronous cache
async function networkFirst(request) {
    const cache = await caches.open(dynamicCacheName)
    try{
        
        const response = await fetch(request)
        await cache.put(request, response.clone())
        return response
    }catch (e){
       const cached = await cache.match(request)
       return cached ?? await caches.match('/offline.html')
    }
    
}