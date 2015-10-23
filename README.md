philip100:autoform-bs-country-field
=====================

An add-on Meteor package for aldeed:autoform. Provides a Bootstrap select field for countries for AutoForm input field 'bootstrap-countries-field'.

##Perequisite
In a Meteor app directory, enter:

#### AutoForm
In a Meteor app directory, enter:
```cmd
$ meteor add aldeed:autoform
```

## Installation
philip100:autoform-bs-country-field
```
$ meteor add philip100:autoform-bs-country-field
```

## Usage
Specify "bootstrap-countries-field" in autoform.

Coffeescript

```javascript
'country':
		type: String
		label: 'Countries'
		autoform:
			type: 'bootstrap-countries-field'
```

javascript
```javascript
...
'country': {
    type: String,
    label: 'Countries',
    autoform: {
      type: 'bootstrap-countries-field'
    }
  }
...
```
