const assert = require('assert');
const rectangle = require('../Rectangle');

const firstRectangle = new rectangle(10, 10);
const secondRectangle = new rectangle(10, 5);
const thirdRectangle = new rectangle(13, 7);
const fourthRectangle = new rectangle(13, 7);

describe('Rectangle', () => {
    
    it('is a square', () => {
        assert.strictEqual(firstRectangle.isSquare(), true);
        assert.strictEqual(secondRectangle.isSquare(), false);
    });
  
    it('has an area', () => {
        assert.strictEqual(thirdRectangle.getArea(), 91);
    });
  
    it('has a perimeter', () => {
        assert.strictEqual(fourthRectangle.getPerimeter(), 40);
    });
  });