include .env
ifneq ("$(wildcard .env.local)","")
	include .env.local
endif

PACKAGE_MANAGER ?= pnpm
NEXT_PORT ?= 3000

.DEFAULT_GOAL := dev

## —— React Makefile ———————————————————————————————————
help: ## Outputs this help screen
	@grep -E '(^[a-zA-Z0-9_-]+:.*?## .*$$)|(^## )' Makefile | awk 'BEGIN {FS = ":.*?## "}{printf "\033[32m%-30s\033[0m %s\n", $$1, $$2}' | sed -e 's/\[32m##/[33m/'

## —— Npm server ———————————————————————————————————

sync: clean install prisma-migrate dev

clean:
	rm -rf .next
	rm -rf node_modules
	rm -rf package-lock.json
	rm -rf yarn.lock
	rm -rf pnpm-lock.yaml

install: ## Install dependencies
	@test -f .env.local || cp .env .env.local
	$(PACKAGE_MANAGER) install

dev: ## Run the development server
	$(PACKAGE_MANAGER) dev -p $(NEXT_PORT)

build: install ## Build the application
	$(PACKAGE_MANAGER) run build

prisma: ## Generate prisma client
	pnpx prisma generate

prisma-seed: ## Generate prisma client
	pnpx prisma:seed

prisma-migrate: ## Migrate prisma
	pnpx prisma migrate dev

prisma-studio: ## Migrate prisma
	pnpx prisma studio

#prisma-reset: ## Reset prisma
	pnpx prisma migrate reset
	pnpx prisma migrate dev

## —— Linters ———————————————————————————————————
lint: ## Run Biome linter
	$(PACKAGE_MANAGER) lint

lint-fix: ## Run Biome linter and fix issues
	$(PACKAGE_MANAGER) run lint:fix

format: ## Format code with Biome
	$(PACKAGE_MANAGER) run format

check: ## Check and fix code with Biome
	$(PACKAGE_MANAGER) run check

analyze: check build ## Run Biome checks and build

## —— Git ———————————————————————————————————
git-clean-branches: ## Clean merged branches
	@git remote prune origin
	(git branch --merged | egrep -v "(^\*|main|master|dev)" | xargs git branch -d) || true

git-rebase: ## Rebase current branch
	@git pull --rebase origin main

message ?= $(shell git branch --show-current | sed -E 's/^([0-9]+)-([^-]+)-(.+)/\2: \#\1 \3/' | sed "s/-/ /g")
auto-commit: ## Auto commit
	@git add .
	@git commit -m "${message}" || true

current_branch=$(shell git rev-parse --abbrev-ref HEAD)
git-push: ## Push current branch
	@git push origin "$(current_branch)" --force-with-lease

commit: analyze auto-commit git-push ## Commit and push
push: commit

## —— Docker ———————————————————————————————————
docker-up: ## Start docker
	@docker compose up -d --wait --remove-orphans

docker-restart: docker-down docker-up

docker-down:
	@docker compose down --remove-orphans --volumes
