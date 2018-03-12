### Engineering at source{d}

The Machine Learning team is focused on providing intelligent insights into nearly all the world's Open Source code. This includes typical Big Data analysis as well as solving sophisticated Machine Learning problems. The former is conducted on Apache Spark clusters, the latter leverages extensive GPGPU acceleration on custom hardware using deep learning techniques. Often ML problems we face are unsupervised and require novel research in the domain of ML on source code (MLonCode).

- Tools and work is always open-sourced to benefit the community
- Publishing papers and blog posts is encouraged and part of our workflow
- We enjoy releasing datasets
- We regularly speak at conferences but it's not required

### source{d}'s ML engineers have released:

- [src-d/awesome-machine-learning-on-source-code](https://github.com/src-d/awesome-machine-learning-on-source-code): everything that we know about MLonCode.

- [ml](https://github.com/src-d/ml): MLonCode framework.

- [apollo](https://github.com/src-d/apollo): modular source code de-duplication research project.

- [kmcuda](https://github.com/src-d/kmcuda): lightning fast K-means and K-nearest neighbours on NVIDIA GPUs. It allows us to cluster 3 million samples, each 256 dimensions, into 1000 clusters in less than 20 minutes with the outstanding precision using two NVIDIA Titan X cards.

- [minhashcuda](https://github.com/src-d/minhashcuda): lightning fast Weighted MinHash on NVIDIA GPUs. This tool allowed us to scan all +17M git repositories in 30 minutes and find [1.5M](http://1.5m/) duplicates. The results were published on [data.world](https://data.world/vmarkovtsev/github-duplicate-repositories).

- [lapjv](https://github.com/src-d/lapjv): Jonker-Volgenant algorithm to solve linear sum assignment problems, accelerated with Intel AVX2 instruction set. It is capable of transforming 4096 t-SNE dots into 64x64 images in 2 minutes.

- [wmd-relax](https://github.com/src-d/wmd-relax): optimized Word Mover's Distance

- [hercules](https://github.com/src-d/hercules): Git repositories line burn down analysis command line tool built on top of source{d}'s [go-git](https://github.com/src-d/go-git), a Git client and server implementation in pure Go language.

- [sparkpickle](https://github.com/src-d/sparkpickle): the tool to read PySpar RDD files without having to install Spark.

### The following notable technical posts, papers and talks exist:

- [Source Code Identifier Embeddings](https://blog.sourced.tech/post/id2vec/)

- [Open Source Stack for Machine Learning on Source Code](http://vmarkovtsev.github.io/gdg-2017-berlin/)

- [Analyzing GitHub, How Developers Change Programming Languages Over Time](https://blog.sourced.tech/post/language_migrations/)

- [GitHub Contributions Graph: Analyzing Pagerank & Proving the 6 Handshakes Theory](https://blog.sourced.tech/post/handshakes_pagerank/)

- [Similarity of GitHub Repositories by Source Code Identifiers](http://vmarkovtsev.github.io/techtalks-2017-moscow/)

- [397 Languages, 18,000,000 GitHub repositories, 1.2 billion files, 20 terabytes of code: Spaces or Tabs](https://blog.sourced.tech/post/tab_vs_spaces/)

- [Topic modeling of public repositories at scale using names in source code](https://arxiv.org/abs/1704.00135) - paper

- [Hands on with the most starred GitHub repositories](https://blog.sourced.tech/post/github_stars/)

- [Source code abstracts classification using CNN](http://vmarkovtsev.github.io/slush-2016/)

### The following datasets published:

- [Names in source code extracted from 13 000 000 GitHub repositories. Not people! 30GB](https://data.world/vmarkovtsev/github-source-code-names)

- [October 2016 GitHub repositories not marked as forks but very similar to each other](https://data.world/vmarkovtsev/github-duplicate-repositories)

- [Readme files found in all GitHub repositories (16M, October 2016](https://data.world/vmarkovtsev/github-readme-files)

- [≈ 452,000,000 commits' metadata taken from 16,000,000 repositories on GitHub (Oct 2016)](https://data.world/vmarkovtsev/452-m-commits-on-github)
