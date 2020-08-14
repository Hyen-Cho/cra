import React, { Component } from 'react';

let list = {
  A: [
    {
      id: 1,
      type: 'group',
      name: 'container 1',
      list: [
        {
          id: 1,
          type: 'list',
          name: 'item 1'
        },
        {
          id: 2,
          type: 'list',
          name: 'item 2'
        },
        {
          id: 3,
          type: 'list',
          name: 'item 3'
        }
      ]
    },
    {
      id: 2,
      type: 'list',
      name: 'item 4'
    },
    {
      id: 3,
      type: 'list',
      name: 'item 5'
    },
    {
      id: 4,
      type: 'list',
      name: 'item 6'
    },
  ],
  B: [
    {}
  ]
}

