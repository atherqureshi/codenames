up:
	docker-compose up

exec-web:
	docker-compose exec web

build-web:
	docker-compose build web

build-node:
	docker-compose build --no-cache node
