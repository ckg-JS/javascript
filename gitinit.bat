REM setup program 
SET USERMAIL="ckg17999@st.ckg.ac.jp"
SET USERNAME="PHAM THE HUNG"
SET BRANCH="18332-2019-0822-2"
SET REPOSITORYNAME="javascript"
SET REPOSITORY="http://github.com/ckg-JS/javascript.git"

git config --global user.mail %USERMAIL%
git config --global user.name %USERNAME%

git remote rm origin
git remote add origin %REPOSITORY%


if "%1" == "update" ( 
    
    git add .
    git commit -m %USERNAME%
    git push origin %BRANCH%
    
)  else (

    git init

    git pull origin master

    git checkout -b %BRANCH%


)