Package.describe({
  name: 'philip100:autoform-bs-country-field',
  version: '0.0.1',
  summary: 'Enables usage of country field in autoform',
  git: 'https://github.com/Philip-Nunoo/autoform-bs-countries.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom(['METEOR@0.9.3', 'METEOR@0.9.4', 'METEOR@1.0']);

  both = ['client', 'server'];
  api.use([
    'standard-app-packages',
    'coffeescript']
    , both);
  api.use(["spacebars", "ui"], "client");

  api.use('twbs:bootstrap@3.3.5');
  api.use('aldeed:autoform@4.0.0 || 5.0.0');

  api.addFiles('lib/client/autoform-bs-countries-field.html', 'client');
  api.addFiles('lib/client/autoform-bs-countries-field.coffee', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
});
