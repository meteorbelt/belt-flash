Package.describe({
  summary: "A client flash notification system"
});

Package.on_use(function (api, where) {
  console.log('entered Package.on_use');
  api.use('deps', 'client');
  api.use('startup', 'client');
  api.use('mongo-livedata', 'client');

  api.add_files([
    'flash_client.js',

    'flashes.js',
    'flashes.html',
    'flash_item.js',
    'flash_item.html'], 'client');
});


Package.on_test(function (api) {
  api.use('belt-flash', 'client');
  api.use('test-helpers', 'client');
  api.use('tinytest', 'client');

  api.add_files('flash_client_tests.js', 'client');
});
