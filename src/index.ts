import useProxy from 'rocket-booster';

addEventListener('fetch', (event) => {
  const proxy = useProxy();
  proxy.use('/', {
    upstream: {
      domain: '',
      protocol: 'http',
    },
  });

  const response = proxy.apply(event.request);
  event.respondWith(response);
});
