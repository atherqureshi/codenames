from utils.types import GameState, CardType, Card
from typing import List
import random
import time


class GameLogicClient:

    def __init__(self):
        self.words: List[str] = [word[0:-1] for word in open('assets/codenames_words.txt', 'r').readlines()]

    def generate_game(self, session_id: str) -> GameState:
        words = random.sample(self.words, 25)
        cards: List[Card] = []
        cards += [Card(word=words[0], type=CardType.BLACK)]
        cards += [Card(word=word, type=CardType.GRAY) for word in words[1:8]]
        coin = random.randint(1, 2)
        if coin == 1:
            cards += [Card(word=word, type=CardType.BLUE) for word in words[8:17]]
            cards += [Card(word=word, type=CardType.RED) for word in words[17:]]
        else:
            cards += [Card(word=word, type=CardType.BLUE) for word in words[8:17]]
            cards += [Card(word=word, type=CardType.RED) for word in words[17:]]
        random.shuffle(cards)
        return GameState(cards=cards, created_timestamp=time.time(), session_id=session_id)
