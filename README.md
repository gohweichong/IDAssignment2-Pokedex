# Interactive Development(ID) Assignment 2 - Pokédex

I have always wanted to create a game website that helps others provide a certain amount of information to the user. Hence, I decided to create my very own pokémon pokedex. Quite a few have already been made before but I wanted to create a website that can search based on both region and ID no. rather than just the name.

With so many pokémon in this day and age, with 151 in the 1st generation and now over 890 with its latest new generation, many can even remember all the pokémon there are now much less the information about each and every pokémon. There are also users who are playing a pokemon game that want to search up information about their team or want to compare stats or other information between other pokemon. With this situation, I decided to create a pokédex that can search for any pokemon based on name, region and ID number. This will help to allow any user to search for the information for the pokémon and learn more about them. 
 
## Design Process
 
For the design process, as the user types are either users who want to know more about a particular pokémon or have only played a certin amount of pokémon games, I wanted the search page to be simple and clear so new users will easily know how to use the website and not get confused. Hence I made a layout with reference to the pokédex example shown in Week 9 mel slides, starting with the regions to select from, and then the ID based on the region or the name of the pokémon. When the search button is pressed it will show a pixel art of the pokémon searched for with the name and ID on a different tab, that way users can search for different pokemon and compare stats or other information between different pokemon on separate tabs. After pressing on the pokémon, it will switch to another page to show all the informtion about the searched pokémon. Also, with the new generation of pokémon added to the api but the regional pokédex was not created in the api yet, I decided to create a choice for the national pokédex to search for the newest genearion pokémons. The pokemon's stats will be shown with a radar chart instead of a bar chart as I enjoy the look of the radar chart and that the showing of pokemons stats in a radar chart has been used before in a pokemon game (Pokemon X and Y). 

This section is also where you would share links to any wireframes, mockups, diagrams etc. that you created as part of the design process. 
These files should themselves either be included as a pdf file in the project itself (in an separate directory)
Include the Adobe XD wireframe as a folder. You can include the XD share url. 

## Features
 
### Existing Features
- Check region feature - allows users who play only one or two pokémon games to get a pokémon based on the ID number of that pokémon from the region pokédex, by having them fill out which region the pokémon comes from, indirectly showing what game the user plays
- Name or ID feature - allows users to find the pokémon they want to search for by entering the name or ID of that certain pokémon
- Search feature - allows the user to search for the pokémon and allows the website to show them information about said pokémon
- Clear feature - after searching for the pokémon, if it is not the pokémon the user wanted to search for, the page could be cleared and the user can search once more

## Technologies Used

- [JQuery](https://jquery.com)
    - The project uses **JQuery** to simplify DOM manipulation.
- [PokéAPI](https://pokeapi.co/)
    - The project uses **PokéAPI** to get all information about every pokémon.
- Visual Studio Code was the app I used to create my website.


## Testing

- Home Page - The page has a header with the pokemon logo on the top to distinctively show that this website is about pokemon. The background of the whole website is mainly a pokeball pattern background, and the first for that is needed to input is the region form where the user will choose the region pokemon to choose from. The region form has a background which is the alola region to represent that the form is about regions. After this, the user will input the ID or the name of the pokemon so that the website can search for it. There is a submit button to search for it and a clear button to clear the pokemon the users have searched for. When the page is used on a phone, the flexbox used in the regions part of the website will wrap it to fit the regions in the page. When searching for multiple pokemon, a flexbox will also wrap the display of pokemon on screen to fit in the page.

- Pokemon information page - This page will show off the main information the users will need about the pokemon, the heading is the same. The pokemon logo can be pressed to go back to the home page to search for another pokemon. The background is completely white and the page will show a image of the pokemon and below will show the stats of the pokemon using a radar chart. When the page is used on a phone, the flexbox on all information of the pokemon will be displayed in a column format, starting with the image of the pokemon, then the pokedex data table, then the training information, breeding information and lastly the stats of the pokemon.

## Bugs
- Only a few small bugs that have not been fixed, when the pokemon is searched for, the image comes out fine but the background will stretch till the end of the page so I will need to find a way to change the background width.(Fixed)

## Credits

### Content
- The api I used for this assignment is from here [PokéAPI](https://pokeapi.co/)

### Media
- The pokemon logo I used was from [Wikimedia](https://commons.wikimedia.org/wiki/File:International_Pok%C3%A9mon_logo.svg)
- The pokeball background was from [Vectorstock](https://www.vectorstock.com/royalty-free-vector/pokeball-icon-sign-seamless-pattern-on-a-gray-vector-11297593)
- The region background was from [Pinterest](https://www.pinterest.com/pin/638737159626175520/)
- The pokemon header was from [DeviantArt](https://www.deviantart.com/puli-wind/art/Get-started-20th-Pokemon-Anniversary-pattern-584264541)

### Acknowledgements

- I received great inspiration for the layout design of pokémon information for this project from [PokémonDB](https://pokemondb.net/)
