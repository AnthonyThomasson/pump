default:
	cd mobile && yarn && yarn expo start

.PHONY: example
example:
	cd mobile-EXAMPLE && yarn expo start