# Cabana.Share

Cabana A/S Sharing-module.
This sharing module is privacy-embracing, cookie-avoiding and ultra-light.

## Installing
Either you grap one of the build files from /build
... or you use `bower install cabana-share`

To make sure you always have the latest version use:
```<script src="https://rawgit.com/Cabana/cabana.Share/master/build/cabana.Share.min.js" type="text/javascript"></script>```

## Usage
```javascript
/**
* Summary of Cabana.Share
* Share current page to external media
* @param Url (optional) - Url to share - will default to window.location.href
* @param Type - Media to share through
* @return boolean
*/
Cabana.Share(Url, Type);

/*
* Minimal version
*/
Cabana.Share(Type);
```

Types are:

- facebook
- twitter
- email
- print
- linkedin
- google


## Configuration
Configuration is not yet possible, but will be in the future.
Configuration can be made, by defining window.CabanaShareSettings

```javascript
window.CabanaShareSettings = {
	'twitter': {
		user: null,
		/* Twitter-handle for user associated with site, will be added to tweet. Defaults to null */
		text: null,
		/* Standard text for tweet before url. Defaults to window.location.href */
		hashtags: null,
		/* Comma-seperated list of hashtags to add to tweet. Defaults to null */
	},
	'email': {
		text: null,
		/* Standard body for email. Every [URL] will be replaced by window.location.href. Defaults to window.location.href */
		subject: null,
		/* Mail-subject. Defaults to document.title */
	},
	'linkedin': {
		text: null,
		/* Standard text for sharing. Defaults to meta[name='description'] content-attribute */
		title: null
		/* Title for sharing. Defaults to document.title */
	}
}
```

## Overrides
This module will override AddThis if included.
It'll override (or create) both `addthis.update()` and `addthis_sendto()`.

## Status
This module is still in **alpha** release