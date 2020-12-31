up:
	docker-compose up

exec-web-alone:
	docker-compose run --no-deps web bash

exec-web:
	docker-compose exec web

test-unit-web:
	docker-compose run --no-deps web pytest tests/unit

build-web:
	docker-compose build web

build-node:
	docker-compose build --no-cache node
