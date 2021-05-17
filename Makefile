run-dev:
	docker-compose -f docker-compose-dev.yml up 

build-dev:
	cd frontend && $(MAKE) build-dev
	cd backend && $(MAKE) build


build-local:
	cd frontend && $(MAKE) build-local
	cd backend && $(MAKE) build

run-local:
	set ENV=local&& docker-compose -f docker-compose-production.yml up

build-production:
	cd frontend && $(MAKE) build-production
	cd backend && $(MAKE) build

run-production:
	set ENV=production&& docker-compose -f docker-compose-production.yml up