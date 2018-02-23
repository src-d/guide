## Engineering at source{d}

Engineering consists of five different teams that represent the architecture of our product:

- Applications (Scala, Go, Python, and Frontend tools): Builds CLI/Web applications combining ML research with our stack.
- Machine Learning (C++ and Python): Performs R&D for Machine Learning on Source Code.
- Data Retrieval (Scala and Go): Builds the technology that finds, fetches, stores and analyzes over +60M Git repositories.
- Language Analysis (Go and another +15): Focused on Babelfish, the universal code parsing server.
- Infrastructure (Go and Python): Manages a cluser of on-prem bare metal servers with Kubernetes and CoreOS, and GCP for user facing applications. 

We care about Open Source. Everything we develop is available for anyone to read, modify, and contribute (under Apache 2.0 or GPL3 license). Some examples of our projects are:

- [bblfsh/bblfshd](https://github.com/bblfsh/bblfshd): Babelfish server, turning code into Universal Abstract Syntax Trees (UASTs). 
- [src-d/engine](https://github.com/src-d/engine): a library for running scalable data retrieval pipelines that process any number of Git repositories for source code analysis.  
- [src-d/go-git](https://github.com/src-d/go-git): a highly extensible Git implementation in pure Go.
- [src-d/ml](https://github.com/src-d/ml/tree/develop): a library to build and apply Machine Learning models on top of Universal Abstract Syntax Trees.

If you are interested in understanding how we do code reviews, please take a look at the PRs on any of these projects. You can also learn more about our engineering methodology [here](https://github.com/src-d/guide/tree/master/engineering).
