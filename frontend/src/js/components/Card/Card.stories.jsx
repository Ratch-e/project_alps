import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from './Card'

storiesOf('Card', module)
  .add('Simple card', () => (
    <Card>
      Hello, I am a card!
    </Card>
  ));
