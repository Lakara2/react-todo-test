import React from 'react';
import TestRenderer from 'react-test-renderer';
import { isFunctionDeclaration } from 'typescript';
import { Counter } from "../components/Counter";

describe('Counter', () => {
    it('renderer correctly', () => {
      const renderer = TestRenderer.create(<Counter />);
      const json = renderer.toJSON();
      expect(json).toMatchSnapshot();
    });

    it('increments the count when the button is clicked', async () => {
      //creer le conteur
        const renderer = TestRenderer.create(<Counter/>);
        //instancier
        const instance = renderer.root;
        //declarer la fonctinon
        const addition = isFunctionDeclaration.call;
        //declarer et instancier le boutton
        const button = await instance.findByType('button');
        //dire ce que le boutton doit faire
        const go = button.props.onClick(addition);
        //expected au format json
        const json = renderer.toJSON();
        //snapshot
        expect(json).toMatchSnapshot();
        //expected(objet retourner dans tsx) vs reality(objet retourner dans le test)
        expect(json).toBe(go);
      });
  });