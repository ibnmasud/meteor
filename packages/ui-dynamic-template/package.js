Package.describe({
  summary: "Component for dynamically rendering templates",
  internal: true
});

Package.on_use(function (api) {
  api.use('templating');
  api.add_files(['dynamic.html', 'dynamic.js'], 'client');
});

Package.on_test(function (api) {
  api.use(["ui-dynamic-template", "tinytest", "test-helpers"]);
  api.use("templating", "client");
  api.add_files(["dynamic-tests.html", "dynamic-tests.js"], "client");
});
