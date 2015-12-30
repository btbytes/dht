index.html: README.md
	pandoc $< -o $@ -t html5 --standalone --css=https://btbytes.com/files/css/pandoc/paper.css
