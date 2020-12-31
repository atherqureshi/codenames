from dataclasses import dataclass
from enum import Enum
import datetime
from typing import List


class CardType(Enum):
    BLUE = "Blue"
    RED = "Red"
    GRAY = "Gray"
    BLACK = "Black"


@dataclass
class Card:
    word: str
    type: CardType


@dataclass
class GameState:
    session_id: str
    created_timestamp: datetime.datetime
    cards: List[Card]
