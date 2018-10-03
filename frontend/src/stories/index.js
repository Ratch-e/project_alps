import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '../js/modules/common/Button/Button'
import Card from '../js/modules/common/Card/Card'

storiesOf('Button', module)
  .add('Simple button', () => (
    <Button onClick={action('clicked')}>
      Hello!
    </Button>
  ));

storiesOf('Card', module)
  .add('Simple card', () => (
    <Card>
      Hello!
    </Card>
  ));
