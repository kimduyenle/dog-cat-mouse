git init
git status
git add
git commit

git add . -> add all

git log: xem tat ca cac commit
git show: xem chi tiet 1 commit
git diff: xem su thay doi cua 1 file

working directory: nhung file bi modified se o day
staging area: nhung file da dc add (mau xanh)
git repository: nhung thay doi o staging da dc cho vao repository, luu tap hop nhung thay doi cua cac commit

git checkout --<file>: bo doan code da sua
git reset (HEAD) <file>: chuyen tu staging xuong working

git checkout -b <branch> (branching): tao 1 branch moi
git checkout <branch>: chuyen den lam viec voi branch do
git merge
- A <-- B
- git checkout A
- git merge B
- master <-- feature/dog-class

git branch -D <branch> (delete a branch)


git reset
- git reset --soft <to-comit>: quay lai trang thai trong staging
- git reset --mixed <to-commit>: quay lai trang thai trong working dir
- git reset --hard <to-commit>: bo commit trc do ra khoi repository



git revert <commit>: tao 1 commit moi o tren va dao nguoc lai commmit cu (ctrl + x)

.gitignore: file chua cac folder do minh add node module tao ra ma minh ko muon hien thi o repo vi qua nang

git credential: ko phai nhap lai pass nhieu lan khi push: git config --global credential.helper "cache --timeout=18000"

git clone & pull:
- git clone <link to repo> (o thu muc tong)
- git pull