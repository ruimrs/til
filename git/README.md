## rebase
git rebase <branch>: All changes made by commits in the current branch but that are not in <upstream> are saved to a temporary area.
git rebase --continue: continues rebase

## pull force
  
git push origin <branch> --force-with-lease : overwrites a remote branch with your local branch
  
## reset
  
git reset --hard origin/<branch> : completely destroy any changes and remove them from the local branch   
  
  
## new worktree
  
  - to create a local worktree from a branch: git worktree add ../ui-main main
  - to remove it: git worktree remove ../ui-main
