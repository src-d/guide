// Source code used to generate git-flow-app.png image using http://gitgraphjs.com/
// library

var gitgraph = new GitGraph({
  template: "metro",
  orientation: "vertical",
  author: "",
  mode: "extended"
});

var master = gitgraph.branch("master");
gitgraph.commit({message: "Other feature",sha1:" ", tag:"v1.6.2"});

var fixOne = master.branch("fix/some-fix");
fixOne.commit({message: "Fix small bug",sha1:" "})
fixOne.merge(master,{message:"Fix small bug",sha:" ",sha1:" "})

var breakingThings = gitgraph.branch("feature/breaking-changes");
breakingThings.commit({message: "Added breaking changes",sha1:" "})
breakingThings.commit({message: "Added more breaking changes",sha1:" ", tag:"v2.0.0-rc1"})
breakingThings.commit({message: "Added a lot of things",sha1:" ", tag:"v2.0.0-rc2"})


var featureOne = master.branch("feature/some-feature");
var featureTwo = featureOne.branch("feature/another-feature");

featureOne.commit({message: "Added functionality",sha1:" "});
featureOne.commit({message: "Added more functionality",sha1:" "});

featureTwo.commit({message: "New cool feature",sha1:" "});

featureOne.commit({message: "Requested changes",sha1:" "});

featureOne.merge(master,{message:"Feature one",sha1:" "});
featureTwo.merge(master,{message: "Feature two", tag: "v1.7.0",sha1:" "});
breakingThings.merge(master,{tag: "v2.0.0",sha1:" "})
