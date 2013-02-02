Package.describe({
  summary: "A client flash notification system"
});

Package.on_use(function (api, where) {
  api.use('deps', 'client');
  api.use('mongo-livedata', 'client');
  api.use('startup', 'client');
  api.use('templating', 'client');

  api.add_files([
    'flash_client.js',

    'flashes.html',
    'flashes.js',
    'flash_item.html',
    'flash_item.js'], 'client');
});


Package.on_test(function (api) {
  api.use('belt-flash', 'client');
  api.use('test-helpers', 'client');
  api.use('tinytest', 'client');

  api.add_files('flash_client_tests.js', 'client');
});
