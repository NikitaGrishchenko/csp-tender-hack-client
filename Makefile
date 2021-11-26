# Including commands
run-quasar:
	quasar dev -m pwa
# Primary commands
.PHONY: install
install:
	yarn

.PHONY: run
run:
	@make run-quasar

.PHONY: build
build:
	yarn build

.PHONY: deploy
deploy:
	@make build
	sudo systemctl restart gunicorn
	sudo systemctl restart nginx

.PHONY: docker-run
docker-run:
	docker-compose up
