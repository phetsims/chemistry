// Copyright 2013-2020, University of Colorado Boulder

/**
 * PF3 Molecule
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import Vector2 from '../../../dot/js/Vector2.js';
import inherit from '../../../phet-core/js/inherit.js';
import merge from '../../../phet-core/js/merge.js';
import Node from '../../../scenery/js/nodes/Node.js';
import Element from '../Element.js';
import nitroglycerin from '../nitroglycerin.js';
import AtomNode from './AtomNode.js';

/**
 * @param {Object} [options]
 * @constructor
 */
function PF3Node( options ) {

  options = merge( { atomOptions: {} }, options );

  // atoms
  const centerNode = new AtomNode( Element.P, options.atomOptions );
  const leftNode = new AtomNode( Element.F, merge( {
    centerX: centerNode.left,
    centerY: centerNode.bottom - ( 0.25 * centerNode.height )
  }, options.atomOptions ) );
  const rightNode = new AtomNode( Element.F, merge( {
    centerX: centerNode.right,
    centerY: leftNode.centerY
  }, options.atomOptions ) );
  const bottomNode = new AtomNode( Element.F, merge( {
    centerX: centerNode.centerX,
    centerY: centerNode.bottom
  }, options.atomOptions ) );

  options.children = [ new Node( {
    children: [ leftNode, rightNode, centerNode, bottomNode ],
    center: Vector2.ZERO // origin at geometric center
  } ) ];
  Node.call( this, options );
}

nitroglycerin.register( 'PF3Node', PF3Node );

inherit( Node, PF3Node );
export default PF3Node;