SDI Pokedex
Create a pokedex single page app using React Hooks and create-react-app. Please use the pokemon API  we have seen throughout the class.
Use the following user stories to guide your development:


1.As a user, I should be able to navigate to the home page and see a list of all the pokemon (at least the first 151), including their pictures, so that I can review the pokemon.

2.As a user I should be able to click on a pokemon’s picture that directs me to a web page that provides additional information about that pokemon, so that I can learn more about an individual pokemon.

3.As a user I should be able to navigate to an about page from any other page, so that I can read information about the team that developed this Pokedex application.

4.As a user when I am in the pokedex page that lists the pokemon, I should be able to use a dropdown box to filter the pokemon by their types, so that I can identify the pokemon of a particular type.

5.As a user, when I am viewing an individual pokemon, I should be presented with a panel that defaults to showing me their abilities, so that I can see their abilities.

6.As a user, I should be able to click an “environment” link/button from inside the individual pokemon page that changes the panel from abilities to information about that pokemon’s environment.


//app comp {

  =>button to nav home
  =>button to nav to about

  //home {

    [X]//poke list comp (first 151) w/ pic {
      [X]=>//click func on pokemon (nav to poke info)
      filter by type dropdown
    }

    //poke info {
    [X]  additional info
    [X]  with pannel that defaults to show abilities{
        =>click enviorment to change abilities pannel to enviorment pannel
        **nav to relative path
      }

    }

  }

  [X]//about {
    info about pokedexd dev team
    }
    (require more info about us.)
}


