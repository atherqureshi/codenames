from utils import GameLogicClient
from utils.types import CardType
from freezegun import freeze_time
import datetime


class TestGameLogicClient:

    def test_generate_game_has_correct_number_of_cards_of_each_color(self):
        client = GameLogicClient()
        game_state = client.generate_game(session_id="123")
        black_cards = 1
        gray_cards = 7
        team_cards = 17
        for card in game_state.cards:
            if card.type == CardType.BLACK:
                black_cards -= 1
            if card.type == CardType.GRAY:
                gray_cards -= 1
            if card.type in [CardType.BLUE, CardType.RED]:
                team_cards -= 1
        assert black_cards == 0
        assert gray_cards == 0
        assert team_cards == 0

    def test_generate_will_have_9_cards_for_one_team_and_8_cards_for_other_team(self):
        blue_cards = 9
        red_cards = 9
        client = GameLogicClient()
        game_state = client.generate_game(session_id="123")
        for card in game_state.cards:
            if card.type == CardType.RED:
                red_cards -= 1
            if card.type == CardType.BLUE:
                blue_cards -= 1
        assert (blue_cards == 0 and red_cards == 1) or (blue_cards == 1 and red_cards == 0)

    def test_generate_will_have_all_attributes_given_session_id(self):
        client = GameLogicClient()
        with freeze_time("2012-01-14"):
            game_state = client.generate_game(session_id="123")
            assert len(game_state.cards) == 25
            assert game_state.session_id == "123"
            assert game_state.created_timestamp == datetime.datetime(2012, 1, 14)
