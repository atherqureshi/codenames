from dataclasses import dataclass
from enum import Enum
from typing import List


class CardType(Enum):
    BLUE = "Blue"
    RED = "Red"
    GRAY = "Gray"
    BLACK = "Black"

    def __deepcopy__(self, memo):
        return self.value


@dataclass
class Card:
    word: str
    type: CardType


@dataclass
class GameState:
    session_id: str
    created_timestamp: float
    cards: List[Card]
