REM pas de chargement du catalogue online
set METEOR_OFFLINE_CATALOG=true 

REM emplacement de l'exe meteor
SET PATH=%PATH%;C:\Users\fhervoue\AppData\Local\.meteor

REM emplacement d'execution
echo %cd%
REM emplacement du bat
echo %~dp0

CD %~dp0
meteor reset
