build-dev:
	docker build -t react-app-dev \
		 -f Dockerfile .

###################

build-local:
	docker build \
		-t react-app-production:local \
		--build-arg CADDYFILE=Caddyfile.local \
		--build-arg BASE_URL=http://api.localhost \
		--build-arg VERSION=local \
		-f Dockerfile.production .

###################

build-production:
	docker build \
		-t react-app-production:production \
		--build-arg CADDYFILE=Caddyfile.production \
		--build-arg BASE_URL=https://api.tyler-richards.com \
		--build-arg VERSION=production \
		-f Dockerfile.production .