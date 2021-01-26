## Branch workflow the gangsta way

0. git status <-- if you don't know what to do next
1. git checkout -b feature-branch-name <-- Make a new branch
2. Make a change in the branch, u can change any of the other dev profiles
3. git add . <-- stage the commits
4. git commit -m "message here" <-- to create a local commit
5. git push -u origin feature-branch-name <-- only use '-u' for the first time, if already ran once, no need '-u'
6. Go to github.com and create a pull request. Merge your commits and delete the branch using the button at the page there.
7. git checkout master <-- Swap to master branch
8. git branch -d feature-branch-name <-- Delete unused local repository
9. git fetch -p <-- Get all changes in remote repository, including deleted branches
10. git pull <-- Update local repository

## How to start the day

1. git fetch -p
2. git status <-- if there are anything to pull then do git #3
3. git pull
