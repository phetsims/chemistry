// Copyright 2013-2020, University of Colorado Boulder

/**
 * SO3 Molecule
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import Vector2 from '../../../dot/js/Vector2.js';
import merge from '../../../phet-core/js/merge.js';
import Node from '../../../scenery/js/nodes/Node.js';
import Element from '../Element.js';
import nitroglycerin from '../nitroglycerin.js';
import AtomNode from './AtomNode.js';

class SO3Node extends Node {

  /**
   * @param {Object} [options]
   */
  constructor( options ) {

    options = merge( { atomOptions: {} }, options );

    // atoms
    const centerNode = new AtomNode( Element.S, options.atomOptions );
    const leftNode = new AtomNode( Element.O, merge( {
      centerX: centerNode.left,
      centerY: centerNode.centerY + ( 0.2 * centerNode.height )
    }, options.atomOptions ) );
    const rightNode = new AtomNode( Element.O, merge( {
      centerX: centerNode.right,
      centerY: centerNode.centerY + ( 0.2 * centerNode.height )
    }, options.atomOptions ) );
    const topNode = new AtomNode( Element.O, merge( {
      centerX: centerNode.centerX + ( 0.08 * centerNode.width ),
      centerY: centerNode.left + ( 0.08 * centerNode.height )
    }, options.atomOptions ) );

    assert && assert( !options.children, 'SO3Node sets children' );
    options.children = [ new Node( {
      children: [ topNode, leftNode, centerNode, rightNode ],
      center: Vector2.ZERO // origin at geometric center
    } ) ];

    super( options );
  }
}

nitroglycerin.register( 'SO3Node', SO3Node );
export default SO3Node;