run:
	rm -rf resources/ public/ && hugo server -D --ignoreCache --disableFastRender

clean:
	rm -rf resources/ public/ node_modules/ package-lock.json && npm install

setup:
	npm install tailwindcss @tailwindcss/cli --save-dev
	npm install @tailwindcss/postcss @tailwindcss/typography --save-dev
	npm install autoprefixer postcss postcss-cli --save-dev
	npm install @tailwindcss/cli --save-dev
	npm install @tailwindcss/postcss --save-dev
	npm install @tailwindcss/typography --save-dev
	npm install autoprefixer postcss postcss-cli --save-dev