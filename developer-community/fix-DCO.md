# DCO is missing

If you are reading this then you want to contribute to one of the source{d}'s projects. That's awesome and respectful 👍. Unfortunately, this also means that you haven't added the "signed-off-by" signature to one or more of your commits in the pull request. Before we continue, please read [what is the DCO](https://github.com/probot/dco#how-it-works).

Now you may have a fair question, why does source{d} enforce the DCO? The reason is that your contribution is by default considered your intellectual property in the US. This means that you can ask the project maintainer to remove one or several of your contributions in the future. This can get very messy once the project becomes big and well-known: imagine that the whole Git history must be rewritten for everybody. Thus the DCO is the defence against such cases, you explicitly state that you retain no rights.

This manual should help you to add the "signed-off-by" to your commits in the pull request.

### Option #1 - amend single commit

If there is only a single commit in your pull request, adding the signature is as simple as

```bash
git commit --amend --no-edit --signoff
git push -f origin <your branch here, probably "master">
```

You can always squash several commits together, see [StackOverflow](https://stackoverflow.com/questions/5189560/squash-my-last-x-commits-together-using-git).

### Option #2 - interactive rebase

If there are more than one commits in your pull requests, you can do an interactive rebase with message editing.

```bash
git rebase -i HEAD^^
```

Write "^" as many times as there are commits in your pull request. You will see the text file opened. Ensure that there are only your recent commits listed there. Otherwise exit the file and repeat the rebase command with the correct number of "^".

Now mark all the commits with "reword" or "r". The rebase process will stop at each of your commits. Execute

```bash
git commit --amend --no-edit --signoff
git rebase --continue
```

as many times as you are asked to. Then force push:

```bash
git push -f origin <your branch here, probably "master">
```

### Option #3 - "I give up"

Git is difficult, eh? No worries, you will master it eventually. For now, copy the changed files to a backup directory, clone the repository again, overwrite the old copies with the new versions. Then execute

```bash
git commit -a --signoff
git push -f origin <your branch here, probably "master">
```

## How to prevent this in the future?

Commit with `--signoff`; alternatively, create a `commit-msg` hook.
Write `.git/hooks/commit-msg` with

```bash
#!/bin/sh
SIGNATURE="Signed-off-by: `git config --global --get user.name` <`git config --global --get user.email`>"
grep -qs "^${SIGNATURE}" "$1" || echo "\n${SIGNATURE}" >> "$1"
```

You need to do this for each repository independently.
