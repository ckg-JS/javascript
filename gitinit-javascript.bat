REM setup program 
SET USERMAIL="ckg18549@st.ckg.ac.jp"
SET USERNAME="gautam dipendra"
SET BRANCH="18549-2019-0822"
SET REPOSITORYNAME="javascript"
SET REPOSITORY="http://github.com/ckg-JS/javascript.git"

git config user.mail=%USERMAIL%
git config user.name=%USERNAME%

git init

git remote rm origin
git remote add origin %REPOSITORY%


if "%1" == "update" ( 
    
    git add .
    git commit -m %USERNAME%
    git push origin %BRANCH%
    
)  else (
    git pull origin master

    git checkout -b %BRANCH%


)