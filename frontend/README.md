##Front end Logic

React will take care of any heavy lifting with game logic, and will use derived state
to figure out the details not directly in the game-state payload.

The backend will simply store the state via session and provide crud operations to update the
state (the state is black box). It will keep track of turns, and current color.

Game State Spec:

found in `backend/utils/types.py`

High level Operations:

Points are derived from how many cards are left

Game loop:
    
    if at any point, the red or blue cards revealed are 0 then the team that gets 0, wins
    a) Click on Card:
        - if same color as turn, then update the state of cards to reveal
        - if opposite team color, update the state of cards and reveal, but switch turn
        - if color is gray, then update the state of card and reveal, and swich
        - if color is black, then update the state of the card, reveal game over, other team wins
    b) When next turn is called, the turn will switch and the round will increment 
    
When New game is clicked, a fresh state is generated with same session id from backend

Technical Jargon
    
    A state variable called didClientUpdate will be insantiated, and set to True only when client makes changes
    from their game state.

    The game state object will be constantly updated via long-polling get running on a interval thread.

    The game-state object will have a useEffect attached to it that will POST to the backend anytime there's a
    a change (i.e. a card is clicked, and revealed) on gamestate and didClientUpdate is set to true. Once the 
    change has been posted then didClientUpdate will be set to False.
