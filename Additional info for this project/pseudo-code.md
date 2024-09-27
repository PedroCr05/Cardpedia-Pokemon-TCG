Higher or Lower?

Steps of probably how to do by doing this minigame.

List:
    #1: I must do a data.search of the pokedex numbers from 1-(whatever the highest is in the data).
    
    #2: Since we are using `if('statements')` to calulate whether the oppsing card is
        `GreaterThan(<)` or `LessThan(>)` the player's card.
    
    #3: Need to make sure I add a `addEventListener('click')` for when the player decides whether
        their card is `GreaterThan(<)` or `LessThan(>)`.
    
    #4: Planning to have a point system tracker. Here we're using a variable or `fucntion()`
        to store the value, but also have a `numberIncrement++` to increase the points.
    
    #5: Now with the points working. I will have to do another `if('statement')`
        that will check whether the player did guess the value correctly.
        It'll either reset them back to 0 or continue adding as long as they dont get it wrong.
        This might be a `for('loop')` or just a `if('statement'){else('statement')}#`.
    
    #6: Now for the cards themselves. I will use a `axios get.(api)` to find the icons/cards.
    
    #7: When I do get the cards. I'd be holding the dex number into a `let varaible` for the
        `if('statement')`.
    
    #8: The web page itself will be basically mobile only. Rather it's more like it'll only 
        have the moble dimesion. For higher resolutions I'll just have a `<img src=''/>` as borders.
    
    #9: I'll probably use `display: grid` for the page itself.
    
    #10: Styling the fonts. I might import from the web but I do have some downloaded already, but
        importing shouldn't be too bad.
    
    #11: Pokeball designs. This will be an interesting thing but will for sure give it a shot.
        I'd most definately will use `border-radius: 100%` to get that sphere ratio.
    
    #12: The cards themselves will be pretty much self explanitory. Creating a
        `border: 'color' 4px solid` and then add a `border-radius: 3px` or how many I need it to be.
    
    #13: I'll for sure have to use `font-weight: 2rem` So I can make bold letters and   `font-style: underline` so make the title more present and the 'Higher' 'Lower' stand out more.
    
    #14: Higher and Lower will have it's own `color: 'red or green'` so the player can
        tell what is what without having to read as well.
    
    #15: Cards themselves will have it's own `class="pkmn-card"` so it'll be easier to pin point
        where I want them to be place on the web page.
    
    #16: The title needs to be the only `<h1>Title</h1>`.
    
    #17: Higher and Lower will be `<h2>H or L<h2/>`.
    
    #18: Everything else ends up being `<h3><h3/>`.
    
    #19: I will for sure use a `<hr>`. So I can get the line throught the center of the page.
    
    #20: Regular pokeball at the center will be an `id="poke-ball"`.
    
    #21: The timer ball will have it's own seperate `class="timer-ball"`
    
    #22: Within that timer ball I will do a `<div>` for the timer it self.
    
    #23: The higher or lower arrows are named `class="game-arrows"` with an
        `id="red-arrow"` & another `id="green-arrow"` for the `color: 'colors`
    
    #24: There has to be a drop/up menu so the player can swap between the minigames.
        This for sure is a `addEventListener('click')` so the menu does show up.
    
    #25: The class for this will just be `class="minigame-menu"`
    
    #26: There will be a **You guessed wrong!* screen with using an `if("statement")` after every `addEventListener("click")`
        When ever the player does input their answer.
    
    #27: Whenever the player does guess wrong. It'll do a `numberIncrement+-` of their total lives.
    
    #28: 