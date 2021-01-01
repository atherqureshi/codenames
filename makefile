up:
	docker-compose up

bash-web-alone:
	docker-compose run --no-deps web bash

bash-web:
	docker-compose exec web bash

test-unit-web:
	docker-compose run --no-deps web pytest tests/unit

build-web:
	docker-compose build web

build-node:
	docker-compose build --no-cache node
