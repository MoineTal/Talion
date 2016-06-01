REM pas de chargement du catalogue online
set METEOR_OFFLINE_CATALOG=true 

REM emplacement de l'exe meteor
SET PATH=%PATH%;C:\Users\fhervoue\AppData\Local\.meteor

REM emplacement d'execution
echo %cd%
REM emplacement du bat
echo %~dp0

CD %~dp0
REM meteor reset
meteor --port 3002

REM parametre pour demarrer avec des packages de mauvaise version
REM --allow-incompatible-update 

pause