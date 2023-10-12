setup: install
	npx simple-git-hooks

install:
	npm ci

test:
	npm test

lint:
	npx eslint .

lint-fix:
	npx eslint . --fix

update-deps:
	npx ncu -u

test-steps:
	node --test --test-name-pattern step1
	node --test --test-name-pattern step2
	node --test --test-name-pattern step3
	node --test --test-name-pattern step4
	node --test --test-name-pattern step5
