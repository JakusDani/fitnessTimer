
# Fitness Timer

## First Steps
1. Nézd meg hogy telepítve van e a git 
```
git -v vagy git --version
```

2. állíts be egy ssh-t, hogy megkönnyítsd az életed
    rövid ismertető mi is az: https://www.youtube.com/watch?v=qWKK_PNHnnA
    
    github docs hogy kell csinálni: https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent

3. találj egy helyet ahova le clonozod a projectet
    ```
    cd your_project_folder
    git clone git@github.com:JakusDani/fitnessTimer.git
    ```

4. csinálj valami apró változtatást pl index.html-ben
   írd át a hello world-öt valami másra

5. változtatást pusholni githubra 3 commandal tudsz
    ```
    git add .
    git commit -m "valami szöveg ami arra utal miket módosítottál"
    git push origin main
    /* ha bármelyik parancsot nem ismered mindenképpen olvass utána melyik része mit csinál */
    ```

## Tasks

1. user től kérj be 2 adatot a feladat hosszát és a feladatok közti szünetet

2. az oldalon jelenjen meg hogy éppen gyakorlat van vagy szünet és egy vissza számláló

3. ha lejárt az idő automatikus legyen a váltás a két periódus között

4. legyen egy gomb aminek a megnyomása nulláza a timert

## Hasznos linkek

Beginner tips(html, css, js): https://www.w3schools.com/ vagy https://developer.mozilla.org/en-US/

ha gyakorolni szeretnél de kiégetett ez a project, itt nem csak js-t de pythont is tudsz gyakorolni: https://www.codewars.com/

javascript docs egy "kis" olvasni való: https://github.com/metagrover/ES6-for-humans