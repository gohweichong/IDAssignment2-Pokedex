# Interactive Development(ID) Assignment 2 - Pokédex

I have always wanted to create a game website that helps others provide a certain amount of information to the user. Hence, I decided to create my very own pokémon pokedex. Quite a few have already been made before but I wanted to create a website that can search based on both region and ID no. rather than just the name.

With so many pokémon in this day and age, with 151 in the 1st generation and now over 890 with its latest new generation, many can even remember all the pokémon there are now much less the information about each and every pokémon. With this situation, I decided to create a pokédex that can search for any pokemon based on name, region and ID number. This will help to allow any user to search for the information for the pokémon and learn more about them. 
 
## Design Process
 
For the design process, as the user types are either users who want to know more about a particular pokémon or have only played a certin amount of pokémon games, I wanted the search page to be simple and clear so new users will easily know how to use the website and not get confused. Hence I made a layout with reference to the pokédex example shown in Week 9 mel slides, starting with the regions to select from, and then the ID based on the region or the name of the pokémon. When the search button is pressed it will show a pixel art of the pokémon searched for with the name and ID. After pressing on the pokémon, it will switch to another page to show all the informtion about the searched pokémon. Also, with the new generation of pokémon added to the api but the regional pokédex was not created in the api yet, I decided to create a choice for the national pokédex to search for the newest genearion pokémons.

This section is also where you would share links to any wireframes, mockups, diagrams etc. that you created as part of the design process. 
These files should themselves either be included as a pdf file in the project itself (in an separate directory)
Include the Adobe XD wireframe as a folder. You can include the XD share url. 

## Features

In this section, you should go over the different parts of your project, and describe each in a sentence or so.
 
### Existing Features
- Check region feature - allows users who play only one or two pokémon games to get a pokémon based on the ID number of that pokémon from the region pokédex, by having them fill out which region the pokémon comes from, indirectly showing what game the user plays
- Name or ID feature - allows users to find the pokémon they want to search for by entering the name or ID of that certain pokémon
- Search feature - allows the user to search for the pokémon and allows the website to show them information about said pokémon
- Clear feature - after searching for the pokémon, if it is not the pokémon the user wanted to search for, the page could be cleared and the user can search once more
 
### Features Left to Implement
- Though I am mostly done, with the time I still have I may want to make the website display a bit more information about the pokémon searched for

## Technologies Used

- [JQuery](https://jquery.com)
    - The project uses **JQuery** to simplify DOM manipulation.
- [PokéAPI](https://pokeapi.co/)
    - The project uses **PokéAPI** to get all information about every pokémon.
- Visual Studio Code was the app I used to create my website.


## Testing

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

1. Contact form:
    1. Go to the "Contact Us" page
    2. Try to submit the empty form and verify that an error message about the required fields appears
    3. Try to submit the form with an invalid email address and verify that a relevant error message appears
    4. Try to submit the form with all inputs valid and verify that a success message appears.

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.

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
