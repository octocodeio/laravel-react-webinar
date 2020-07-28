## Instalacja

Jeśli chcesz uruchomić projekt, to musisz mieć zainstalowany composer ()
Wchodząc w terminalu do katalogu z projektem musisz wówczas uruchomić `composer install`

Po zainstalowaniu zależności musisz też zainstalować zależności frontendowe.
Do tego celu potrzebujesz node.js oraz npm. Jeśli już je masz, to uruchamiasz `npm install`

## Uruchomienie

Do uruchomienia backendu oraz frontendu potrzebujesz mieć włączone dwa okna terminala. 
Jedno posłuży Ci do uruchomienia frontendu, a drugie do backendu.

W pierwszym oknie wpisz `php artisan serve` w drugim `npm run watch`.
Jeśli używasz `yarn` zamiast `npm`, to wpisujesz `yarn wach`

## Jeśli chcesz zrobić własny projekt

W przypadku, gdy chcesz zacząć od zera, to po pierwsze utwórz projekt w laravelu.
Informacje jak to zrobić znajdziesz w dokumentacji.

Po wejściu do terminala, będąc w katalogu z projektem wykonaj poniższe polecenia:

1. Instalacja zależności laravela do kompilacji frontendu

`composer require laravel/ui`

2. Setup podstawowego stack'a Reacta

`php artisan ui react`

Następnie możesz uruchomić projekt :) POWODZENIA!