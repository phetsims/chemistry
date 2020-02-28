// Copyright 2013-2020, University of Colorado Boulder

/**
 * PH3 Molecule
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
function PH3Node( options ) {

  options = merge( { atomOptions: {} }, options );

  // atoms
  const bigNode = new AtomNode( Element.P, options.atomOptions );
  const smallLeftNode = new AtomNode( Element.H, merge( {
    centerX: bigNode.left,
    centerY: bigNode.bottom - ( 0.25 * bigNode.height )
  }, options.atomOptions ) );
  const smallRightNode = new AtomNode( Element.H, merge( {
    centerX: bigNode.right,
    centerY: smallLeftNode.centerY
  }, options.atomOptions ) );
  const smallBottomNode = new AtomNode( Element.H, merge( {
    centerX: bigNode.centerX,
    centerY: bigNode.bottom
  }, options.atomOptions ) );

  options.children = [ new Node( {
    children: [ smallLeftNode, smallRightNode, bigNode, smallBottomNode ],
    center: Vector2.ZERO // origin at geometric center
  } ) ];
  Node.call( this, options );
}

nitroglycerin.register( 'PH3Node', PH3Node );

inherit( Node, PH3Node );
export default PH3Node;