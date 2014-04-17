index.html: index.md
	pandoc $< -o $@ -t html5 --standalone --css=http://files.btbytes.com/css/pandoc/paper.css
