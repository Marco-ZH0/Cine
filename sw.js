const CacheRecursos = 'recursos-1';

self.addEventListener('install',event=>{
    const recursos = caches.open(CacheRecursos).then(cache=>{
         cache.add('/'),
         cache.add('index.html'),
         cache.add('js/app.js')
         for (let i=0; i<=6; i++){
            cache.add('img/'+ i +'.jpg');
        }
        cache.add('img/poker.png');
        cache.add('css/style.css');
        cache.add('manifest.json');
     });
    event.waitUntil(recursos);
 });
 
 self.addEventListener('fetch',e=>{
    //TODO LO COMENTADO ES ESTRATEGIA 2
    //  const respuesta = caches.match(e.request)
    //  .then(res=>{
    //     if(res) return res;
    //     console.log('no existe ese recurso en cache ->',e.request.url);

        
    //     return fetch(e.request).then(newResp=>{
    //         caches.open(resursos)
    //         .then(cache=>{
    //             cache.put(e.request,newResp)
    //         });
    //         return newResp.clone();
    //     });
    //  });
    //  e.respondWith(respuesta);


    //ESTRATEGIA 3 
    const respuesta = fetch(e.request).then((newResp)=>{
        caches.open(CacheRecursos).then((cache)=>{
            cache.put(e.request,newResp);
        });

        return newResp.clone();
    
    }).catch (err=>{
        return caches.match(e.request);
    })
    e.respondWith(respuesta);

 });

