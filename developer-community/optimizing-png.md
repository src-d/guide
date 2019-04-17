# How to optimize the size of PNG images like a pro

PNG algorithm roughly consists of two steps:

1. Apply one of five specialized filters to each line.
2. Compress with DEFLATE (used in e.g. gzip).

It is possible to dramatically (2-5x) reduce the size of a PNG file produced in a conventional image editor.
The trick is to run it through the following pipeline:

1. [`pngquant`](https://pngquant.org/) gives up to 80% less.
2. [`optipng`](http://optipng.sourceforge.net/) gives another 1-5%.
3. [`zopflipng`](https://github.com/google/zopfli) further gives 5-10%.

### Installation

Ubuntu 18.10+:

```
apt install pngquant optipng zopfli
```

Ubuntu 18.04:

```
apt install pngquant optipng
wget http://es.archive.ubuntu.com/ubuntu/pool/universe/z/zopfli/zopfli_1.0.2-1_amd64.deb
dpkg -i zopfli_1.0.2-1_amd64.deb
```

macOS:
```
brew install pngquant optipng zopfli
```

### Pipeline example

```
pngquant -f img.png -o img.png
optipng -o7 img.png
zopflipng -ym img.png img.png
```

### How it works

`pngquant` simplifies the image, thus making it more PNG compression-friendly. It is a lossy transform, however there are no nasty artifacts and you are not going to see any difference. Really, I mean it. Even on fine structures like text or thin lines.
`optipng` optimizes the PNG filters. It is hard: imagine that you've got an image of 100px height. Each line has 5 choices, so the overall number of possibilities is 5^100 - that's a HUGE number. No way you can brute force such.
`zopflipng` works on the DEFLATE level. It is a clever multipass DEFLATE implementation which is 100 times slower than the usual one.
