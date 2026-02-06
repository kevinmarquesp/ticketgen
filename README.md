# TicketGen

Webapp created to make it easier to generate detailed Mc. Donalt's ticket
recepies in order to exchange lunch breaks with other restaurants in my area


## Development Notes

-   *Business:*
    -   Consider using a fry object as well (or just a bolean mark).
    -   Consider adding options for fries without salt.
    -   Create a `Combo` object, which will define the break lunch.
-   *Interface:*
    -   It should have a page dedicated for the employees to chose wich
        lunches are available.
        -   Then it create a link with the options in a JSON format on the URL.
        -   This URL will only store the data necessary to build the menu.
    -   In the options, it also should have buttons to remove ingredients.


### TODOS

- [ ]   Rename the `Lunch` object to `MenuItem` because icecreams will have the
        same logic...
- [ ]   Think about how to associate names with the `Combo` ammount for the
        menu; also considering the edge cases of having icecream remaining.
- [ ]   A `Lunch` should also have an option to make it *static*.


