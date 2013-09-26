// Copyright 2002-2013, University of Colorado

/**
 * PCl3 Molecule
 *
 * @author Chris Malley (cmalley@pixelzoom.com)
 */

define( function ( require ) {
  'use strict';

  var inherit = require( 'PHET_CORE/inherit' );
  var AtomNode = require( 'NITROGLYCERIN/nodes/AtomNode' );
  var Node = require( 'SCENERY/nodes/Node' );
  var Vector2 = require( 'DOT/Vector2' );
  var Element = require( 'NITROGLYCERIN/Element' );

  return inherit( Node, function CNode() {
    Node.call( this, {} );

    // atom nodes
    var centerNode = new AtomNode( Element.P );
    var leftNode = new AtomNode( Element.Cl );
    var rightNode = new AtomNode( Element.Cl );
    var bottomNode = new AtomNode( Element.Cl );

    // rendering order
    var parentNode = new Node();
    this.addChild( parentNode );
    parentNode.addChild( leftNode );
    parentNode.addChild( rightNode );
    parentNode.addChild( centerNode );
    parentNode.addChild( bottomNode );

    // layout
    var x = 0;
    var y = 0;
    centerNode.setTranslation( x, y );
    x = centerNode.left;
    y = centerNode.bottom - ( 0.25 * centerNode.height );
    leftNode.setTranslation( x, y );
    x = centerNode.right;
    y = leftNode.y;
    rightNode.setTranslation( x, y );
    x = centerNode.x;
    y = centerNode.bottom;
    bottomNode.setTranslation( x, y );

    // move origin to geometric center
    parentNode.center = Vector2.ZERO;
  } );
} );