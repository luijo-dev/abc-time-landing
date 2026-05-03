.PHONY: install dev build preview clean

install:
	bun install

dev:
	bun run dev

build:
	bun run build

preview:
	bun run preview

clean:
	rm -rf dist node_modules bun.lock .astro
