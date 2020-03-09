import React from 'react';
import Card from './Card';

export default { title: 'Card', component: Card };

export const SimpleCard = () => <Card>Hello, I am a card!</Card>;

export const CardWithComponent = () => <Card><h1>Title</h1></Card>;
