import { Card } from '@material-ui/core';
import React from 'react';

export function HowToPlayCard() {
  return (
    <Card>
      Goal: Codebreakers correctly guess all their team's color's cards without
      stepping on a bomb <br /> <br />
      Round Format: <br /> <br />
      Team with 9 cards starts <br /> <br /> 1. Spymasters give a one word hint
      and a number (pointing to amount of potential cards) to codebreakers at
      the start of their respective teams round <br /> <br />
      2. Code breakers try to select a card pertaining to the spymaster's hint{' '}
      <br /> <br />
      A) If the Code breaker hits their team colors card, it gets flipped,
      codebreaker can continue guessing until number runs out <br /> <br />
      B) if the code breaker hits the other teams colors card, other teams card
      gets flipped, and turn is over <br />
      <br />
      C) If the CodeBreaker hits a bomb, then their team automatically loses the
      game <br />
      <br />
    </Card>
  );
}
