# DCO is missing

If you are reading this, then you want to contribute to one of source{d}'s projects.
That's awesome and we're glad you're here 👍.
However, this also means that you probably have not added the "signed-off-by" signature to one or more of your commits in the pull request.

Before we move on, please read [what is the Developer Certificate of Origin (DCO)](https://github.com/probot/dco#how-it-works).

You may now have a fair question: why does source{d} enforce the DCO? There are two key reasons:

  1. By signing off the contribution, you are certifying it is either your intellectual property or a valid contribution given its respective open source license origin.
  2. It follows that your contribution is, by default if valid, considered your intellectual property in countries such the United States.
  Thus you could ask the project maintainer to remove one (or more) of your contributions in the future.
  This may get very complicated as the project grows larger and becomes more well-known: imagine rewriting the Git history for everybody!

Thus, the DCO works as a sort of insurance against such cases.

This manual should help you to add the required `Signed-off-by: Your Name <name@email.com>` to your commits in the pull request.

## How To Add Sign-Offs Retroactively

### Fix Option #1: Amend Single Commit

If there is only a single commit in your pull request, adding the signature is as simple as:

```bash
git commit --amend --no-edit --signoff
git push -f origin <your branch here, probably "master">
```

You can always squash several commits together; see: [StackOverflow](https://stackoverflow.com/questions/5189560/squash-my-last-x-commits-together-using-git).

`-s` is a shortcut for `--signoff` - you can use it instead.

### Fix Option #2: rebase ([git>=2.13](https://github.com/git/git/blob/master/Documentation/RelNotes/2.13.0.txt#L189))

If there is more than one commit in your pull request and your git client is modern enough (2.13+), rebase the required number of commits with `--signoff`:

```bash
git rebase --signoff HEAD^^
```

Write `^` as many times as there are commits in your pull request.
Then, force push:

```bash
git push -f origin <your branch here, probably "master">
```

### Fix Option #3: Interactive Rebase

If there is more than one commit in your pull request and your git is older than 2.13, you can do an interactive rebase with message editing:

```bash
git rebase -i HEAD^^
```

Write `^` as many times as there are commits in your pull request.
A text will open; ensure that there are only your recent commits listed there.
Otherwise, exit the file and repeat the rebase command with the correct number of `^`.

Now, mark all the commits with "reword" or "r". The rebase process will stop at each of your commits.

Execute as many times as you are asked to:

```bash
git commit --amend --no-edit --signoff
git rebase --continue
```

Then, force push:

```bash
git push -f origin <your branch here, probably "master">
```

### Fix Option #4: (Almost) Avoid Git

Git is sometimes frustrating, and you may want to keep distance from it sometimes for safety.
For now:

  1. Copy the modified files to a backup directory;
  2. Clone the repository again;
  3. Overwrite the old file copies with the modified versions.

Then, execute:

```bash
git commit -a --signoff
git push -f origin <your branch here, probably "master">
```

## How To Prevent Missing Sign-offs In The Future?

### Sign-off Option #1: Safe Plain-Vanilla

Always sign your commits by using the `-s` or `--signoff` flags when committing (e.g. `git commit -s`).

### Sign-off Option #2: Repository-based Hooks

Alternatively, you may create a `commit-msg` hook in each given repository.
To do so, write in your local repository's `.git/hooks/commit-msg` the following:

```bash
#!/bin/sh
SIGNATURE="Signed-off-by: `git config --global --get user.name` <`git config --global --get user.email`>"
grep -qs "^${SIGNATURE}" "$1" || echo "\n${SIGNATURE}" >> "$1"
```

You need to do this for each repository independently.

If you want to create this hook **automatically** on every new git repository you will create from now on (using `git init`, `git clone`...) you can use `git-templates`; to do so, just save the script described above into (duplicate files):
- `~/.git-templates/hooks/prepare-commit-msg`
- `~/.git-templates/hooks/commit-msg`

And configure it globally:

```bash
git config --global init.templatedir ~/.git-templates
```

**NOTE:** You will still need to paste this hook in your existing git repositories.

### Sign-off Option #3: Git Aliases

Git aliases are like "shortcuts" to more extensive commands and flags.

You can add the following lines (or as you see suit) to your `~/.gitconfig` file:

```bash
[alias]
  cmsg = commit -s -m
  camend = commit -s --amend
```

You only need to do this once, and it will work whenever this `~/.gitconfig` file is active.


### Signo-off Option #4: Github UI

If you are using Google Chrome, you are lucky and you can use the [`dco-gh-ui` Chrome Extension](https://github.com/scottrigby/dco-gh-ui)
