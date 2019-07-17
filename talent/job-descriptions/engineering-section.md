## Engineering at source{d}

Engineering consists of five different teams that represent the architecture of our product:

- Applications (Scala, Go, Python, and Frontend tools): Builds CLI/Web applications combining ML research with our stack.
- Machine Learning (C++ and Python): Performs R&D for Machine Learning on Source Code.
- Data Retrieval (Go): Builds the technology that finds, fetches and stores over +60M Git repositories.
- Data Processing (Scala and Go): Builds projects that enable data analysis for repositories and other data sources, mainly with SQL.
- Language Analysis (Go and another +15): Focused on Babelfish, the universal code parsing server.
- Infrastructure (Go and Python): Manages a cluser of on-prem bare metal servers with Kubernetes and CoreOS, and GCP for user facing applications. 

We care about Open Source. Everything we develop is available for anyone to read, modify, and contribute (under Apache 2.0 or GPL3 license). Some examples of our projects are:

- [bblfsh/bblfshd](https://github.com/bblfsh/bblfshd): Babelfish server, turning code into Universal Abstract Syntax Trees (UASTs). 
- [src-d/go-git](https://github.com/src-d/go-git): a highly extensible Git implementation in pure Go.
- [src-d/go-mysql-server](https://github.com/src-d/go-mysql-server): a SQL engine written in Go, with a MySQL(ish) interface.
- [src-d/ml](https://github.com/src-d/ml/tree/develop): a library to build and apply Machine Learning models on top of Universal Abstract Syntax Trees.

If you are interested in understanding how we do code reviews, please take a look at the PRs on any of these projects. You can also learn more about our engineering methodology [here](https://github.com/src-d/guide/tree/master/engineering).
