import useProxy from 'rocket-booster';

addEventListener('fetch', (event) => {
  const proxy = useProxy();
  proxy.use('/', {
    upstream: {
      domain: 'yuzi.tpddns.cn:9514',
      protocol: 'http',
    },
  });

  const response = proxy.apply(event.request);
  event.respondWith(response);
});
