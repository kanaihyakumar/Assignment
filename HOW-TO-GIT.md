# How to Use Git for This Assignment

This is the exact workflow you'll follow: clone the repo -> create your own
branch -> do the work -> commit -> push -> open a Pull Request for review.
Don't worry about memorizing every command - copy-paste is fine, just
understand what each step is doing.

Repo: **https://github.com/kanaihyakumar/Assignment.git**

---

## 1. Clone the repository

This downloads a copy of the repo onto your computer.

```bash
git clone https://github.com/kanaihyakumar/Assignment.git
cd Assignment
```

---

## 2. Create your own branch

Never work directly on `master`/`main` - always create a branch with your
name, so your work is isolated from everyone else's.

```bash
git checkout -b yourname-assignment-1
```

For example, if your name is Priya:

```bash
git checkout -b priya-assignment-1
```

You can check which branch you're on at any time with:

```bash
git status
```

---

## 3. Do the assignment

Edit the files as instructed in `ASSIGNMENT.md`. Save your work as you go.
It's a good habit to check what you've changed before committing:

```bash
git status
git diff
```

---

## 4. Commit your changes

A commit is a saved checkpoint with a message describing what you did.
Commit as often as feels natural - after finishing each part is a good
rhythm (you don't have to wait until the whole assignment is done).

```bash
git add .
git commit -m "Complete Part A - non-semantic layout"
```

Some other examples of good commit messages as you progress:

```bash
git commit -m "Complete Part B - semantic HTML5 layout"
git commit -m "Complete Part C - flexbox layout and CSS3"
git commit -m "Complete Part D - forms"
git commit -m "Complete Part E - media and embeds"
git commit -m "Complete Part F - JavaScript fundamentals"
```

**What `git add .` does:** stages every changed file so it's included in
the next commit. If you only want to commit specific files, you can list
them instead: `git add part-a-non-semantic/index.html`.

---

## 5. Push your branch to GitHub

This uploads your branch (and all its commits) to the shared repository.

```bash
git push origin yourname-assignment-1
```

The first time you push a new branch, GitHub will give you a link in the
terminal output to open a Pull Request directly - you can click that, or
follow step 6 below.

---

## 6. Open a Pull Request (PR)

A Pull Request is a request to merge your branch into `master`, along with
a space for your reviewer to leave comments.

1. Go to https://github.com/kanaihyakumar/Assignment
2. GitHub usually shows a banner: **"yourname-assignment-1 had recent
   pushes"** with a **Compare & pull request** button - click it.
   (If you don't see it, click the **Pull requests** tab -> **New pull
   request** -> choose your branch.)
3. Give it a clear title, e.g. `Priya - Assignment 1`
4. In the description, briefly note anything you got stuck on or want
   feedback on - this isn't required, but it helps your reviewer.
5. Click **Create pull request**.

---

## 7. Respond to review feedback (if any)

Your reviewer may leave comments asking for changes. If so:

1. Make the changes locally, on the **same branch** you were already on.
2. Commit and push again - no need to open a new PR, it updates automatically:

```bash
git add .
git commit -m "Address review feedback"
git push origin yourname-assignment-1
```

Once everything looks good, your reviewer will **merge** your PR into
`master` - and that's the assignment complete!

---

## Quick reference - the whole flow in order

```bash
git clone https://github.com/kanaihyakumar/Assignment.git
cd Assignment
git checkout -b yourname-assignment-1

# ...do the work...

git add .
git commit -m "Complete Part A - non-semantic layout"

# ...repeat commit for each part as you go...

git push origin yourname-assignment-1
# then open the Pull Request on GitHub
```

## Common issues

- **"Permission denied" / can't push:** make sure you've been added as a
  collaborator on the repo, or ask for access.
- **Forgot to branch, already made changes on `master`:** don't panic -
  run `git checkout -b yourname-assignment-1` anyway. Git will carry your
  uncommitted changes onto the new branch for you.
- **Want to see your commit history:** `git log --oneline`
